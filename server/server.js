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

//pin 17 is taken for some reason
// WARNING ! This is WIRINGPI pin numerotation !! please see https://fr.pinout.xyz/pinout/wiringpi#*
const pinClk = 2;
const pinDt = 3;


const rotary = new Rotary(pinClk, pinDt);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

server.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

io.on('connection', function (socket) {// WebSocket Connection
  rotary.on("rotate", (delta) => {
    socket.emit('count', delta);
  });
});

process.on('SIGINT', function () { //on ctrl+c
  /* pushButton.unexport(); // Unexport Button GPIO to free resources */
  process.exit(); //exit completely
});