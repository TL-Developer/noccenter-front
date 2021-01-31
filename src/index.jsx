import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import socketIOClient from 'socket.io-client';

const socket = socketIOClient('10.242.7.180:3002');

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
