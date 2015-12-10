/// <reference path='../typings/react/react.d.ts'/>
/// <reference path='../typings/react-dom/react-dom.d.ts'/>
/// <reference path='../typings/redux-actions/redux-actions.d.ts'/>
/// <reference path='../typings/redux/redux.d.ts'/>
/// <reference path='../typings/react-redux/react-redux.d.ts'/>

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '../src-scss/main.css!';

import {
  Store,
  compose,
  createStore,
  bindActionCreators,
  combineReducers
} from 'redux';
import {
  connect,
  Provider
} from 'react-redux';
import { Action } from 'redux-actions';

import App from './containers/App';
import { rootReducer } from './reducers/rootReducer';

const initialState = {};

const store: Store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
