import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('UserStore')
@observer
class PrivateRoute extends Component {
  render() {
    const { component: ParamComponent, ...rest } = this.props;

    return this.props.UserStore.isAuthorized ? (
      <Route {...rest} render={props => <ParamComponent {...props} />} />
    ) : (
      <Redirect to="/" />
    );
  }
}

export default PrivateRoute;
