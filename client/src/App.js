import {useContext, useState, useEffect} from 'react'
import {SocketContext, socket} from './context/socket';

import STAT from "./pages/STAT";
import INV from "./pages/INV";
import DATA from "./pages/DATA";
import MAP from "./pages/MAP";
import RADIO from "./pages/RADIO";

function App() {
  const [mainTab, setMainTab] = useState("STAT")
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
      {mainTab === 'STAT' && (<STAT mainTab={mainTab} setMainTab={setMainTab}></STAT>)}
      {mainTab === 'INV' && (<INV mainTab={mainTab} setMainTab={setMainTab}></INV>)}
      {mainTab === 'DATA' && (<DATA mainTab={mainTab} setMainTab={setMainTab}></DATA>)}
      {mainTab === 'MAP' && (<MAP mainTab={mainTab} setMainTab={setMainTab}></MAP>)}
      {mainTab === 'RADIO' && (<RADIO mainTab={mainTab} setMainTab={setMainTab}></RADIO>)}
    </SocketContext.Provider>
  );
}

export default App;