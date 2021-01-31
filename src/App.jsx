import React, { useState, useEffect } from 'react';
import socketIOClient from 'socket.io-client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import { Styled, GlobalStyled } from './commons/styles/global';
import { theme } from './theme';

const socket = socketIOClient('10.242.7.180:3002');

export default function App() {
  const [whatTheme, setWhatTheme] = useState('light');

  useEffect(() => {
    socket.on('connect', () => {
      console.log('conectado em tempo real');
    });

    socket.on('disconnect', () => {
      console.log('desconectado');
    });
    
    window.socket = socket;

    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('message');
      socket.off('rabbitMessage');
    };
  }, []);

  const handleTheme = (truth) => {
    if (truth) {
      setWhatTheme('dark');
    } else {
      setWhatTheme('light');
    }
  }
  
  return (
    <div>
      <ThemeProvider theme={theme[whatTheme]}>
        <Router basename="/">
          <GlobalStyled />
          <Styled>
            <Routes handleTheme={(e) => handleTheme(e)} />
          </Styled>
        </Router>
      </ThemeProvider>
    </div>
  );
}
