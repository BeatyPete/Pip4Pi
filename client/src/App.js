import {useEffect} from 'react'
import {SocketContext, socket} from './context/socket';
import { useStoreContext } from "./utils/GlobalState";
import { CHANGE_MAIN_TAB } from "./utils/actions";

import STAT from "./pages/STAT";
import INV from "./pages/INV";
import DATA from "./pages/DATA";
import MAP from "./pages/MAP";
import RADIO from "./pages/RADIO";

function App() {
  const [state, dispatch] = useStoreContext();

  const { mainTab } = state;

  useEffect(() => {
    console.log(mainTab)
    socket.on('count', function (data) { //get button status from client
      changeTab(data)
    });
  }, [socket]);

  
  const changeTab = rotation => {
    let watchlist = JSON.parse(localStorage.getItem("tab")) || 'STAT';
    const tabs = ['STAT', 'INV', 'DATA', 'MAP', 'RADIO']
      const tabNum = tabs.findIndex(stuff => stuff === watchlist)
      let newTab = tabNum + rotation;
      if (newTab < 0) {
        newTab = 0
      } else if (newTab > 4) {
        newTab = 4
      }
      localStorage.setItem("tab", JSON.stringify(tabs[newTab]));
      dispatch({
        type: CHANGE_MAIN_TAB,
        mainTab: tabs[newTab]
      });
  }

  return (
    <SocketContext.Provider value={socket}>
      {mainTab === 'STAT' && (<STAT></STAT>)}
      {mainTab === 'INV' && (<INV></INV>)}
      {mainTab === 'DATA' && (<DATA></DATA>)}
      {mainTab === 'MAP' && (<MAP></MAP>)}
      {mainTab === 'RADIO' && (<RADIO></RADIO>)}
    </SocketContext.Provider>
  );
}

export default App;