import React, { Component } from 'react';
import styled from 'styled-components';
// import components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Login from './Login';

const StyledAppBar = styled(AppBar)`
  .AppBar {
    background-color: ${props => props.theme.black};
    flex-grow: 1;
  }

  .IconButton {
    margin-left: -12;
    margin-right: 20;
  }

  .Typography {
    flex: 1;
  }
`;

class LandingPageHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLogin: false
    };

    this.toggleLogin = this.toggleLogin.bind(this);
  }

  toggleLogin() {
    this.setState({
      showLogin: !this.state.showLogin
    });
  }

  render() {
    return (
      <StyledAppBar>
        <Login show={this.state.showLogin} />
        <AppBar position="static" className="AppBar">
          <Toolbar>
            <Typography variant="title" color="inherit" className="Typography">
              CollabEvents
            </Typography>
            <Button onClick={this.toggleLogin} color="inherit">
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </StyledAppBar>
    );
  }
}

export default LandingPageHeader;
