import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './Normalize.css';
import './App.css';
// import components
import LandingPage from './components/LandingPage';
// create app theme
import { ThemeProvider } from 'styled-components';

const theme = {
  // colors
  primary: '#4472CA',
  secondary: '#FFD166',
  accent: '#39A0ED',
  gray: '#4F6367',
  black: '#333',
  error: '#e44235',
  // fonts
  roboto: "'Roboto', sans-serif"
};

const muiTheme = createMuiTheme({
  palette: {
    primary: { main: theme.primary },
    secondary: { main: theme.secondary },
    error: { main: theme.error }
  }
});
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={muiTheme}>
          <LandingPage />
        </MuiThemeProvider>
      </ThemeProvider>
    );
  }
}

export default App;
