import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
// import components
import Loader from './Loader';

@inject('UserStore')
@observer
class Summary extends Component {
  render() {
    if (this.props.UserStore.userProfile) {
      const {
        userProfile: { email, name, picture, username }
      } = this.props.UserStore;

      return (
        <div>
          <h1>{name}</h1>
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
