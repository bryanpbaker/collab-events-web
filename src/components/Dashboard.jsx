import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { inject } from 'mobx-react';

@inject('UserStore')
class Dashboard extends Component {
  render() {
    return this.props.UserStore.user ? (
      <div className="Dashboard">Dashboard</div>
    ) : (
      <Redirect to="/" />
    );
  }
}
export default Dashboard;
