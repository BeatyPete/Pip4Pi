const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();
/* var Gpio = require('onoff').Gpio; */
const http = require('http');
const server = http.createServer(app);
/* const io = require('socket.io')(server); */

var pushButton = new Gpio(17, 'in', 'both');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

server.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

/* io.on('connection', function (socket) {// WebSocket Connection
  var countvalue = 0; //static variable for current status
  pushButton.watch(function (err, value) { //Watch for hardware interrupts on pushButton
    if (err) { //if an error
      console.error('There was an error', err); //output error message to console
      return;
    }
    countvalue = countvalue + value;
    console.log(value)
    socket.emit('count', countvalue); //send button status to client
  });
  socket.on('light', function(data) { //get light switch status from client
    console.log(data)
  });

});

process.on('SIGINT', function () { //on ctrl+c
  pushButton.unexport(); // Unexport Button GPIO to free resources
  process.exit(); //exit completely
}); */