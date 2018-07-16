import React from 'react';
import styled from 'styled-components';

const StyledTitleSection = styled.div`
  margin-bottom: 75px;
`;

const TitleSection = ({ userProfile: { name, username } }) => (
  <StyledTitleSection className="TitleSection">
    <h1>
      {name}
      <br />
      <small>{username}</small>
    </h1>
  </StyledTitleSection>
);

export default TitleSection;
