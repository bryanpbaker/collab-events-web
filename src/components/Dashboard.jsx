import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
// import components
import DashboardHeader from './DashboardHeader';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

@inject('UserStore')
@observer
class Dashboard extends Component {
  state = {
    sidebarOpen: false
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
        <Sidebar sidebarOpen={this.state.sidebarOpen} />
        <MainContent>
          <h2>Hello</h2>
        </MainContent>
      </div>
    );
  }
}
export default Dashboard;
