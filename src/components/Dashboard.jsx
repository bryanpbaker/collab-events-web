import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
// import components
import DashboardHeader from './DashboardHeader';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Summary from './Summary';
import Groups from './Groups';

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
          <Route exact path="/dashboard" component={Summary} />
          <Route exact path="/dashboard/groups" component={Groups} />
        </MainContent>
      </div>
    );
  }
}
export default Dashboard;
