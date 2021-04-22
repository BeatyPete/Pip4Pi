import {useContext, useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {SocketContext, socket} from './context/socket';

import STAT from "./pages/STAT";
import INV from "./pages/INV";

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
      <Router>
          <Route
            render={({ location }) => (
                <Switch location={location} key={location.pathname}>
                  <Route exact path="/" component={STAT} />
                  <Route exact path="/INV" component={INV} />
                </Switch>
            )}
          />
      </Router>
    </SocketContext.Provider>
  );
}

export default App;