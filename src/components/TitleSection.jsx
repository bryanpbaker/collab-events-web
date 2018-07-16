import React from 'react';
import styled from 'styled-components';
import Badge from '@material-ui/core/Badge';
import Message from '@material-ui/icons/Message';
import Description from '@material-ui/icons/Description';

const StyledTitleSection = styled.div`
  display: grid;
  grid-template-columns: auto 320px;
  margin-bottom: 75px;

  .alerts {
    text-align: right;

    .icon {
      font-size: 32px;
      margin-left: 20px;
    }
  }
`;

const TitleSection = ({ userProfile: { name, username } }) => (
  <StyledTitleSection className="TitleSection">
    <div>
      <h1>
        {name}
        <br />
        <small>{username}</small>
      </h1>
    </div>
    <div className="alerts">
      <Badge badgeContent={2} color="primary">
        <Description className="icon" />
      </Badge>
      <Badge badgeContent={4} color="primary">
        <Message className="icon" />
      </Badge>
    </div>
  </StyledTitleSection>
);

export default TitleSection;
