// Set up a simple Node.js server using Express.js. The code snippet below returns a JSON object when you visit the http://localhost:4000/api in your browser. 
//https://dev.to/novu/building-a-chat-app-with-socketio-and-react-2edj
const express = require('express');
const app = express();
const PORT = 3000;


//New imports
const http = require('http').Server(app);
const cors = require('cors');


app.use(cors());

const socketIO = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000"
    }
});

//Add this before the app.get() block
socketIO.on('connection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
    socket.on('disconnect', () => {
      console.log('🔥: A user disconnected');
    });
});

app.get('/api', (req, res) => {
  res.json({
    message: 'Hello world',
  });
});

http.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});