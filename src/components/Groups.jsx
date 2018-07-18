import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
// import material-ui component
import List from '@material-ui/core/List';
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
      <GroupCard key={group.name} group={group} />
    ));
  };

  createGroup = () => {
    this.props.GroupStore.createGroup();
  };

  render() {
    return (
      <StyledList>
        <TitleSection
          content={{
            title: 'Groups',
            subtitle: 'Here are your groups'
          }}
          action={{
            method: this.createGroup,
            type: 'add',
            label: 'Create Group'
          }}
        />
        <div className="group-list">{this.renderGroupList()}</div>
      </StyledList>
    );
  }
}

export default Groups;
