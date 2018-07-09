import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'mobx-react';
import UserStore from './stores/UserStore';

ReactDOM.render(
  <Provider UserStore={UserStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
