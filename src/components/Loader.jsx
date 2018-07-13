import React, { Component } from 'react';
import { CircularProgress } from '@material-ui/core';

class Loader extends Component {
  render() {
    return <CircularProgress color="primary" size={50} />;
  }
}

export default Loader;
