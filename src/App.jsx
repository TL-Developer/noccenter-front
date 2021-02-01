import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Routes from './routes';
import { Styled, GlobalStyled } from './commons/styles/global';
import { theme } from './theme';


export default function App() {
  const [whatTheme, setWhatTheme] = useState('light');

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
