/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './core/store/configureStore';

import { syncHistoryWithStore } from 'react-router-redux';
const store = configureStore();
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

require('assets/images/favicon.ico'); // Tell webpack to load favicon.ico
//require('app/styles/index.scss');

import './styles/index.scss';

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>, document.getElementById('app')
);
