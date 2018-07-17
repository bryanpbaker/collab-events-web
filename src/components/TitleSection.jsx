import React from 'react';
import styled from 'styled-components';
import Badge from '@material-ui/core/Badge';
import Message from '@material-ui/icons/Message';
import Description from '@material-ui/icons/Description';
import Divider from '@material-ui/core/Divider';

const StyledTitleSection = styled.div`
  display: grid;
  grid-template-columns: auto 320px;
  padding-top: 25px;

  .alerts {
    text-align: right;

    .icon {
      font-size: 32px;
      margin-left: 20px;
    }
  }
`;

const TitleSection = ({ content }) => {
  const { name, username, title, subtitle } = content;

  return (
    <React.Fragment>
      <StyledTitleSection className="TitleSection">
        <div>
          <h1>
            {title || name}
            <br />
            <small>{subtitle || username}</small>
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
      <Divider style={{ marginBottom: 75, marginTop: 25 }} />
    </React.Fragment>
  );
};

export default TitleSection;
