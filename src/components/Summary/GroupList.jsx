import React, { Component } from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
// import material-ui components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const StyledList = styled(List)`
  background-color: ${props => lighten(0.5, props.theme.gray)};
`;

class GroupList extends Component {
  render() {
    return (
      <div>
        <h2>Your Groups</h2>
        <StyledList component="nav">
          <ListItem className="ListItem" button>
            <ListItemText>Group one</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>Group one</ListItemText>
          </ListItem>
          <ListItem button>
            <ListItemText>Group one</ListItemText>
          </ListItem>
        </StyledList>
      </div>
    );
  }
}

export default GroupList;
