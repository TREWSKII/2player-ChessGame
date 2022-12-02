import { Chessboard } from 'react-chessboard';
// import  Socketjs from './connection/socket.js';

import './App.css';
// import socketIO from 'socket.io-client';
// const socket = socketIO.connect('http://localhost:3000');



function App() {
  return (
    <div>
    <div className = "board"><Chessboard /></div>
    {/* <div> <Socketjs /> </div> */}
    
    </div>
    
  );
}

export default App;
