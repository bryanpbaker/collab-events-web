import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
// import components
import Loader from '../Loader';
import GroupList from './GroupList';

@inject('UserStore')
@observer
class Summary extends Component {
  render() {
    if (this.props.UserStore.userProfile) {
      const {
        userProfile: { name, picture, username }
      } = this.props.UserStore;

      return (
        <div>
          <h1>
            {name}
            <br />
            <small>{username}</small>
          </h1>
          <GroupList />
        </div>
      );
    }

    return (
      <div>
        <Loader />
      </div>
    );
  }
}

export default Summary;
