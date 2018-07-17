import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { lighten } from 'polished';
// import material ui components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import People from '@material-ui/icons/People';
import Event from '@material-ui/icons/Event';

const StyledSidebar = styled.div`
  background: white;
  border-right: 1px solid ${props => lighten(0.3, props.theme.gray)}
  box-sizing: border-box;
  height: calc(100% - 64px);
  left: -100vw;
  padding-top: 20px;
  position: fixed;
  top: 64px;
  transition: 0.3s left ease-in;
  z-index: 2;
  width: 100vw;

  @media(min-width: 768px) {
    left: -256px;
    width: 320px;  
  }

  .ListItemIcon {
    margin-right: 0;
  }

  &.open {
    left: 0;
    transition: 0.3s left ease-out;
  }
`;

class Sidebar extends Component {
  render() {
    return (
      <StyledSidebar
        className={`Sidebar ${this.props.sidebarOpen ? 'open' : ''}`}
      >
        <List component="nav">
          <Link to="/dashboard/groups">
            <ListItem button>
              <ListItemText primary="Groups" />
              <ListItemIcon className="ListItemIcon">
                <People />
              </ListItemIcon>
            </ListItem>
          </Link>
          <ListItem button>
            <ListItemText primary="Events" />
            <ListItemIcon className="ListItemIcon">
              <Event />
            </ListItemIcon>
          </ListItem>
        </List>
      </StyledSidebar>
    );
  }
}

export default Sidebar;
