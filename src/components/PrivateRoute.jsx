import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import Loader from './Loader';

@inject('UserStore')
@observer
class PrivateRoute extends Component {
  render() {
    const { component: ParamComponent, ...rest } = this.props;

    if (this.props.UserStore.isAuthorized === null) {
      return (
        <div>
          <Loader />
        </div>
      );
    }

    return this.props.UserStore.isAuthorized ? (
      <Route {...rest} render={props => <ParamComponent {...props} />} />
    ) : (
      <Redirect to="/" />
    );
  }
}

export default PrivateRoute;
