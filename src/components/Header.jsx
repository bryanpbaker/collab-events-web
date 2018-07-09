import React, { Component } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
// import components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Login from './Login';
import { inject, observer } from 'mobx-react';

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

@inject('UserStore')
@observer
class Header extends Component {
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
        {!this.props.UserStore.user && <Login show={this.state.showLogin} />}
        {this.props.UserStore.user && <Redirect to="dashboard" />}
        <AppBar position="static" className="AppBar">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Menu"
              className="IconButton"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className="Typography">
              CollabEvents
            </Typography>
            {!this.props.UserStore.user && (
              <Button onClick={this.toggleLogin} color="inherit">
                Login
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </StyledAppBar>
    );
  }
}

export default Header;
