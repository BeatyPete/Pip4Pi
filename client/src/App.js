import logo from './logo.svg';
import './App.css';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:3001";

function App() {

  var socket = socketIOClient(ENDPOINT); //load socket.io-client and connect to the host that serves the page
  var counter = document.getElementById("counter");

  

  socket.on('count', function (data) { //get button status from client
    counter.innerHTML = data
  });

  return (
    <h1>clicks <span id="counter">0</span></h1>
  );
}

export default App;
