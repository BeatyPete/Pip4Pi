import {useEffect, useState, useRef} from 'react'
import {socket} from './context/socket';
import { useStoreContext } from "./utils/GlobalState";
import { CHANGE_MAIN_TAB, CHANGE_WEAPON, CHANGE_ARMOR, CHANGE_DAMAGE, CHANGE_RESISTANCE, CHANGE_SETTINGS, CHANGE_LIMBS, CHANGE_STATS } from "./utils/actions";

import STAT from "./pages/STAT";
import INV from "./pages/INV";
import DATA from "./pages/DATA";
import MAP from "./pages/MAP";
import RADIO from "./pages/RADIO";

function App() {
  const [state, dispatch] = useStoreContext();
  const [currTab, setCurrTab] = useState('STAT')
  const { mainTab, settings } = state;
  const [radioStations, setRadioStations] = useState([])

  useEffect(() => {
    const weaponSlots = JSON.parse(localStorage.getItem(CHANGE_WEAPON)) || [];
    const armorSlots = JSON.parse(localStorage.getItem(CHANGE_ARMOR)) || [];
    const damage = JSON.parse(localStorage.getItem(CHANGE_DAMAGE))
    const damResist = JSON.parse(localStorage.getItem(CHANGE_RESISTANCE))
    const displaySettings = JSON.parse(localStorage.getItem(CHANGE_SETTINGS));
    const charStats = JSON.parse(localStorage.getItem(CHANGE_STATS));
    const limbs = JSON.parse(localStorage.getItem(CHANGE_LIMBS));
    if (displaySettings) {
      document.documentElement.style.setProperty('--color', `${displaySettings.r}, ${displaySettings.g}, ${displaySettings.b}`);
      dispatch({
        type: CHANGE_SETTINGS,
        settings: displaySettings 
      });
    }
    dispatch({
      type: CHANGE_WEAPON,
      slots: weaponSlots
    });
    dispatch({
      type: CHANGE_ARMOR,
      slots: armorSlots
    });
    if (charStats) {
      dispatch({
        type: CHANGE_STATS,
        charStats: charStats
      });
    }
    if (limbs) {
      dispatch({
        type: CHANGE_LIMBS,
        limbs: limbs
      });
    }
    if (damage) {
      dispatch({
        type: CHANGE_DAMAGE,
        damage: damage
      });
    }
    if (damResist) {
      dispatch({
        type: CHANGE_RESISTANCE,
        damResist: damResist
      });
    }
  }, []);

  useEffect(() => {
    socket.on('mainChange', function (data) { //get button status from client
      changeMainTab(data)
    });
    socket.emit('getMusic')
    socket.on('music', function (data) { //get button status from client
      setRadioStations(data)
    });
  }, [socket]);

  useEffect(() => {
    dispatch({
      type: CHANGE_MAIN_TAB,
      mainTab: currTab
    });
  }, [currTab]);

  const changeMainTab = rotation => {
    const getNewTab = currTab => {
      const tabs = ['STAT', 'INV', 'DATA', 'MAP', 'RADIO']
      let tabNum = tabs.findIndex(stuff => stuff === currTab)
      let newTabNum = tabNum + rotation
      if (newTabNum < 0) {
        newTabNum = 0
      } else if (newTabNum > 4) {
        newTabNum = 4
      }
      return tabs[newTabNum]
    }
    setCurrTab(getNewTab)
  }

  const displaySettings = {
    transform: `translate(${settings.positionX}, ${settings.positionY})`,
    width: settings.width,
    height: settings.height
  }

  const scanlineToggle = () => {
    if (settings.scanlines) {
      return 'scanlines'
    } else {return ''}
  }
  const flickerToggle = () => {
    if (settings.flicker) {
      return 'flicker'
    } else {return ''}
  }

  const muzak = useRef()

  const [currRadio, setCurrRadio] = useState()
  const [currSong, setCurrSong] = useState()
  const [playlist, setPlaylist] = useState()


  useEffect(() => {
    muzak.current.onended = endedHandler;
  }, [playlist, currSong]);
  const endedHandler = () => {
    let nextSong = currSong + 1
    if (nextSong > (playlist.length - 1)) {
      nextSong = 0
    }
    setCurrSong(nextSong)
    muzak.current.play()
  }
  

  return (
    <div style={displaySettings} className={`master ${scanlineToggle()} ${flickerToggle()}`}>
      <audio id={currRadio} ref={muzak} src={currRadio && require(`./lib/radio/${currRadio}/${playlist[currSong]}`).default}></audio>
      {mainTab === 'STAT' && (<STAT></STAT>)}
      {mainTab === 'INV' && (<INV></INV>)}
      {mainTab === 'DATA' && (<DATA></DATA>)}
      {mainTab === 'MAP' && (<MAP></MAP>)}
      {mainTab === 'RADIO' && (<RADIO radioStations={radioStations} currRadio={currRadio} setCurrRadio={setCurrRadio} setCurrSong={setCurrSong} muzak={muzak} setPlaylist={setPlaylist}></RADIO>)}
    </div>
  );
}

export default App;