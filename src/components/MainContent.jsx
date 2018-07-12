import React, { Component } from 'react';
import styled from 'styled-components';

const StyledMainContent = styled.div`
  padding: 25px;
  position: relative;
  top: 64px;
  z-index: 1;

  h2 {
    margin-top: 0;
  }

  @media (min-width: 768px) {
    left: 64px;
    padding: 2%;
    width: calc(100vw - 64px);
  }
`;

class MainContent extends Component {
  render() {
    return <StyledMainContent>{this.props.children}</StyledMainContent>;
  }
}

export default MainContent;
