import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'mobx-react';

import testStore from './stores/TestStore';

ReactDOM.render(
  <Provider TestStore={testStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
