import {useEffect, useState, useRef} from 'react'
/* import {socket} from './context/socket'; */
import { useStoreContext } from "./utils/GlobalState";
import { CHANGE_MAIN_TAB, CHANGE_WEAPON, CHANGE_ARMOR, CHANGE_DAMAGE, CHANGE_RESISTANCE, CHANGE_SETTINGS, CHANGE_LIMBS, CHANGE_STATS } from "./utils/actions";

import STAT from "./pages/STAT";
import INV from "./pages/INV";
import DATA from "./pages/DATA";
import MAP from "./pages/MAP";
import RADIO from "./pages/RADIO";

function App() {
  const [state, dispatch] = useStoreContext();
  const [currTab/* , setCurrTab */] = useState('STAT')
  const { mainTab, settings } = state;
  const [radioStations, setRadioStations] = useState([])

  useEffect(() => {
    let classical = ["songs/01 Advent Chamber Orchestra - Albinoni - Concerto for 2 Oboes in F Major Op9 no3, 1 Allegro.mp3", "songs/01 Advent Chamber Orchestra - Bach - Brandenburg Concerto no3 mvt3 allegro.mp3", "songs/01 John Harrison with the Wichita State University Chamber Players - Spring Mvt 1 Allegro.mp3", "songs/02 Advent Chamber Orchestra - Albinoni - Concerto for 2 Oboes in F Major Op9 no3, 2 Adagio.mp3", "songs/02 Advent Chamber Orchestra - Couperin - Pieces en Concert - Prelude, La Tromba, Air de Diable.mp3", "songs/02 John Harrison with the Wichita State University Chamber Players - Spring Mvt 2 Largo.mp3", "songs/03 Advent Chamber Orchestra - Albinoni - Concerto for 2 Oboes in F Major Op9 no3, 3 Allegro.mp3", "songs/03 Advent Chamber Orchestra - Bartok - Roumanian Folk Dances - Waistband Dance, Roumanian Polka, Maruntel.mp3", "songs/03 John Harrison with the Wichita State University Chamber Players - Spring Mvt 3 Allegro pastorale.mp3", "songs/04 Advent Chamber Orchestra - Handel - Entrance to the Queen of Sheba for Two Oboes, Strings, and Continuo allegro.mp3", "songs/04 Advent Chamber Orchestra - Mozart - Eine Kleine Nachtmusik allegro.mp3", "songs/04 John Harrison with the Wichita State University Chamber Players - Summer Mvt 1 Allegro non molto.mp3", "songs/05 Advent Chamber Orchestra - Dvorak - Serenade for Strings Op22 in E Major larghetto.mp3", "songs/05 Advent Chamber Orchestra - Handel - Concerto for Organ and Orchestra Op7 no1 mvt1.mp3", "songs/05 John Harrison with the Wichita State University Chamber Players - Summer Mvt 2 Adagio.mp3", "songs/06 Advent Chamber Orchestra - Bughici - Suite for Violin, 6 Dance, allegretto.mp3", "songs/06 Advent Chamber Orchestra - Handel - Concerto for Organ and Orchestra Op7 no1 mvt2.mp3", "songs/06 John Harrison with the Wichita State University Chamber Players - Summer Mvt 3 Presto.mp3", "songs/07 Advent Chamber Orchestra - Bughici - Suite for Violin, 7 Lyric Song, lento.mp3", "songs/07 Advent Chamber Orchestra - Handel - Concerto for Organ and Orchestra Op7 no1 mvt3.mp3", "songs/07 John Harrison with the Wichita State University Chamber Players - Autumn Mvt 1 Allegro.mp3", "songs/08 Advent Chamber Orchestra - Bughici - Suite for Violin, 8 Ardeleneasca, moderato.mp3", "songs/08 Advent Chamber Orchestra - Vivaldi - Concerto in C Major for Oboe and Orchestra andante.mp3", "songs/08 John Harrison with the Wichita State University Chamber Players - Autumn Mvt 2 Adagio molto.mp3", "songs/09 Advent Chamber Orchestra - Bughici - Suite for Violin, 9 Hora, vivace.mp3", "songs/09 Advent Chamber Orchestra - Corelli - Concerto Grosso, Op6 no4.mp3", "songs/09 John Harrison with the Wichita State University Chamber Players - Autumn Mvt 3 Allegro.mp3", "songs/10 John Harrison with the Wichita State University Chamber Players - Winter Mvt 1 Allegro non molto.mp3", "songs/11 John Harrison with the Wichita State University Chamber Players - Winter Mvt 2 Largo.mp3", "songs/12 John Harrison with the Wichita State University Chamber Players - Winter Mvt 3 Allegro.mp3"]
    setRadioStations([{
      radio: 'Classical Radio',
      songs: classical
    }])
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

/*   useEffect(() => {
    socket.on('mainChange', function (data) { //get button status from client
      changeMainTab(data)
    });
    socket.emit('getMusic')
    socket.on('music', function (data) { //get button status from client
      setRadioStations(data)
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);*/

  useEffect(() => {
    dispatch({
      type: CHANGE_MAIN_TAB,
      mainTab: currTab
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currTab]);

  /* const changeMainTab = rotation => {
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
  } */

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
    const endedHandler = () => {
      let nextSong = currSong + 1
      if (nextSong > (playlist.length - 1)) {
        nextSong = 0
      }
      setCurrSong(nextSong)
      muzak.current.play()
    }
    muzak.current.onended = endedHandler;
  }, [playlist, currSong]);
  
  

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