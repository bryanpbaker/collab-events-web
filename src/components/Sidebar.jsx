import React, { Component } from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

const StyledSidebar = styled.div`
  background: ${props => lighten(0.5, props.theme.gray)};
  box-sizing: border-box;
  height: calc(100% - 64px);
  left: 0;
  padding-left: 35px;
  padding-top: 20px;
  position: fixed;
  top: 64px;
  width: 300px;
`;

class Sidebar extends Component {
  render() {
    return <StyledSidebar className="Sidebar">Sidebar</StyledSidebar>;
  }
}

export default Sidebar;
