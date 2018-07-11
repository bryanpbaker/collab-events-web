import React, { Component } from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
// import material ui components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GroupWork from '@material-ui/icons/GroupWork';
import Event from '@material-ui/icons/Event';

const StyledSidebar = styled.div`
  background: white;
  border-right: 1px solid ${props => lighten(0.3, props.theme.gray)}
  box-sizing: border-box;
  height: calc(100% - 64px);
  left: -256px;
  padding-top: 20px;
  position: fixed;
  top: 64px;
  transition: 0.3s left ease-in;
  width: 320px;

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
          <ListItem button>
            <ListItemText primary="Groups" />
            <ListItemIcon className="ListItemIcon">
              <GroupWork />
            </ListItemIcon>
          </ListItem>
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
