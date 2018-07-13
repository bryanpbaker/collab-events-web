import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './Normalize.css';
import './App.css';
// import components
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
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
          <Router>
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
            </Switch>
          </Router>
        </MuiThemeProvider>
      </ThemeProvider>
    );
  }
}

export default App;
