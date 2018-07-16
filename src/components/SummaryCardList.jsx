import React, { Component } from 'react';
import styled from 'styled-components';

const StyledSummaryCardList = styled.div`
  .list {
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(5, 1fr);
  }
`;

class SummaryCardList extends Component {
  render() {
    return (
      <StyledSummaryCardList className="SummaryCardList">
        <h2>{this.props.headline}</h2>
        <div className="list">{this.props.render()}</div>
      </StyledSummaryCardList>
    );
  }
}

export default SummaryCardList;
