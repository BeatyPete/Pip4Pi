import {useContext, useState, useEffect} from 'react'
import {SocketContext, socket} from './context/socket';

import STAT from "./pages/STAT";

function App() {

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
      <STAT></STAT>
    </SocketContext.Provider>
  );
}

export default App;