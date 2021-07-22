const express = require('express');
const socketIo = require("socket.io");
const http = require('http');

const PORT = process.env.PORT || 3001;
const app = express();
var Gpio = require('onoff').Gpio;
const Rotary = require('raspberrypi-rotary-encoder');

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

const pushButton = new Gpio(18, 'in', 'rising')
// WARNING ! This below is WIRINGPI pin numerotation !! please see https://fr.pinout.xyz/pinout/wiringpi#*
const mainClk = 2;
const mainDt = 3;
const subClk = 12;
const subDt = 13;
const itemClk = 30;
const itemDt = 21;


const mainRotary = new Rotary(mainClk, mainDt);
const subRotary = new Rotary(subClk, subDt);
const itemRotary = new Rotary(itemClk, itemDt);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

server.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

io.on('connection', function (socket) {// WebSocket Connection
  mainRotary.on("rotate", (delta) => {
    socket.emit('mainChange', delta);
  });
  subRotary.on("rotate", (delta) => {
    socket.emit('subChange', delta);
  });
  itemRotary.on("rotate", (delta) => {
    socket.emit('itemChange', delta);
  });
  pushButton.watch(function (err, value) { //Watch for hardware interrupts on pushButton
    if (err) { //if an error
      console.error('There was an error', err); //output error message to console
      return;
    } 
    socket.emit('select', value); //send button status to client
  });
});

process.on('SIGINT', function () { //on ctrl+c
  pushButton.unexport(); // Unexport Button GPIO to free resources 
  process.exit(); //exit completely
});