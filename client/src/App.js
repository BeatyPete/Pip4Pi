import {useContext, useState, useEffect} from 'react'
import {SocketContext, socket} from './context/socket';
import { useStoreContext } from "./utils/GlobalState";


import STAT from "./pages/STAT";
import INV from "./pages/INV";
import DATA from "./pages/DATA";
import MAP from "./pages/MAP";
import RADIO from "./pages/RADIO";

function App() {
  const [state, dispatch] = useStoreContext();

  const { mainTab } = state;
  /* const [mainTab, setMainTab] = useState("STAT") */
  /* const [count, setCount] = useState(0)

  useEffect(() => {
    socket.on('connection', () => {
      console.log(`I'm connected with the back-end`);
    });
  }, [socket]);

  

  socket.on('count', function (data) { //get button status from client
    setCount(data)
  }); */

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