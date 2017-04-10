import { combineReducers, createStore, applyMiddleware } from 'redux';
import { routerReducer, syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import LoggedUser from './reducer-logged-user';

const reducersContainer = combineReducers({ 
  routing: routerReducer,
  user: LoggedUser,
});

export const store = createStore(reducersContainer, applyMiddleware(thunk, routerMiddleware(browserHistory)));
export const history = syncHistoryWithStore(browserHistory, store);