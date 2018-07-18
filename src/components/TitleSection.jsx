import React from 'react';
import styled from 'styled-components';
import Badge from '@material-ui/core/Badge';
import Message from '@material-ui/icons/Message';
import Description from '@material-ui/icons/Description';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const StyledTitleSection = styled.div`
  display: grid;
  grid-template-columns: auto 320px;
  padding-top: 25px;

  .actions {
    text-align: left;

    .add-button {
    }
  }

  .alerts {
    text-align: right;

    .icon {
      font-size: 32px;
      margin-left: 20px;
    }
  }
`;

const TitleSection = ({
  content: { name, username, title, subtitle },
  action: { method, type, label }
}) => {
  return (
    <React.Fragment>
      <StyledTitleSection className="TitleSection">
        <div>
          <h1>
            {title || name}
            <br />
            <small>{subtitle || username}</small>
          </h1>
          <div className="actions">
            <Button
              variant="fab"
              aria-label="Delete"
              className="add-button"
              color="secondary"
              onClick={method}
            >
              {type === 'add' && <AddIcon className="add-button" />}
            </Button>
          </div>{' '}
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
