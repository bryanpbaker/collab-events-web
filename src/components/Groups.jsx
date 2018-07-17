import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
// import material-ui component
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
// import components
import TitleSection from './TitleSection';
import GroupCard from './GroupCard';

const StyledList = styled(List)`
  .group-list {
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(4, 1fr);
  }
`;

@inject('GroupStore')
@observer
class Groups extends Component {
  componentDidMount() {
    this.props.GroupStore.fetchGroups();
  }

  renderGroupList = () => {
    return this.props.GroupStore.groups.map(group => (
      <GroupCard key={group.name} button>
        {group.name}
      </GroupCard>
    ));
  };

  render() {
    return (
      <StyledList>
        <TitleSection
          content={{
            title: 'Groups',
            subtitle: 'Here are your groups'
          }}
        />
        <div className="group-list">{this.renderGroupList()}</div>
      </StyledList>
    );
  }
}

export default Groups;
