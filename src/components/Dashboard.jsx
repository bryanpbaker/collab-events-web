import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
// import components
import DashboardHeader from './DashboardHeader';
import Sidebar from './Sidebar';

@inject('UserStore')
@observer
class Dashboard extends Component {
  state = {
    sidebarOpen: true
  };

  render() {
    return (
      <div className="Dashboard">
        <DashboardHeader UserStore={this.props.UserStore} />
        <Sidebar>
          <h1>Hello</h1>
        </Sidebar>
      </div>
    );
  }
}
export default Dashboard;
