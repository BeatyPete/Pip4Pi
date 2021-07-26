import {useEffect, useState} from 'react'
import {socket} from './context/socket';
import { useStoreContext } from "./utils/GlobalState";
import { CHANGE_MAIN_TAB, CHANGE_WEAPON, CHANGE_ARMOR } from "./utils/actions";

import STAT from "./pages/STAT";
import INV from "./pages/INV";
import DATA from "./pages/DATA";
import MAP from "./pages/MAP";
import RADIO from "./pages/RADIO";

function App() {
  const [state, dispatch] = useStoreContext();
  const [currTab, setCurrTab] = useState('STAT')
  const { mainTab } = state;

  useEffect(() => {
    var weaponSlots = JSON.parse(localStorage.getItem(CHANGE_WEAPON)) || [];
    var armorSlots = JSON.parse(localStorage.getItem(CHANGE_ARMOR)) || [];
    dispatch({
      type: CHANGE_WEAPON,
      slots: weaponSlots
    });
    dispatch({
      type: CHANGE_ARMOR,
      slots: armorSlots
    });
  }, []);

  useEffect(() => {
    socket.on('mainChange', function (data) { //get button status from client
      changeMainTab(data)
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

  return (
    <>
      {mainTab === 'STAT' && (<STAT></STAT>)}
      {mainTab === 'INV' && (<INV></INV>)}
      {mainTab === 'DATA' && (<DATA></DATA>)}
      {mainTab === 'MAP' && (<MAP></MAP>)}
      {mainTab === 'RADIO' && (<RADIO></RADIO>)}
    </>
  );
}

export default App;