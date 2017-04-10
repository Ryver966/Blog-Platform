import React from 'react';
import ReactDOM from 'react-dom';
import App from './JS/App';
import './assets/styles/index.css';
import { Provider } from 'react-redux';
import { store } from './JS/reducers/Store';

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
