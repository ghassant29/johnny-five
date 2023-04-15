import { socket } from './socket';
import './styles/global.css';

const btn = document.getElementById("press");

socket.on('connect', () => {
  console.log('Connected to server');
});

btn.addEventListener("click", () => {
  socket.emit("led-off");
})
