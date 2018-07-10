import React, { Component } from 'react';
import styled from 'styled-components';
// import material ui components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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

class DashboardHeader extends Component {
  logout = () => {
    this.props.UserStore.logout();
  };

  render() {
    return (
      <StyledAppBar>
        <AppBar position="static" className="AppBar">
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Menu"
              className="IconButton"
              onClick={this.props.toggleSidebar}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className="Typography">
              CollabEvents
            </Typography>
            <Button onClick={this.logout} color="inherit">
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </StyledAppBar>
    );
  }
}

export default DashboardHeader;
