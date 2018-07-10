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

  toggleSidebar = () => {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen
    });
  };

  render() {
    return (
      <div className="Dashboard">
        <DashboardHeader
          toggleSidebar={this.toggleSidebar}
          UserStore={this.props.UserStore}
        />
        <Sidebar sidebarOpen={this.state.sidebarOpen}>
          <h1>Hello</h1>
        </Sidebar>
      </div>
    );
  }
}
export default Dashboard;
