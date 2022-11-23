import { Chessboard } from 'react-chessboard';
import './App.css';
import socketIO from 'socket.io-client';
const socket = socketIO.connect('http://localhost:4000');
// ! 

function App() {
  return (
    <div className = "board"><Chessboard /></div>
  );
}

export default App;
