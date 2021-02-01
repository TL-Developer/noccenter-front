import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import socketIOClient from 'socket.io-client';

// const SOCKET_BASE = 'http://10.91.20.82:3002/api/v1';
const SOCKET_BASE = '10.242.7.180:3002';

const socket = socketIOClient(SOCKET_BASE);

socket.on('connect', () => {
  console.log('conectado em tempo real');
});

socket.on('disconnect', () => {
  console.log('desconectado');
});

window.socket = socket;

if (window.socket) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
  
  reportWebVitals();
}
