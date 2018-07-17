import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'mobx-react';
import UserStore from './stores/UserStore';
import GroupStore from './stores/GroupStore';

ReactDOM.render(
  <Provider UserStore={UserStore} GroupStore={GroupStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
