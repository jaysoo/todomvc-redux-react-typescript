/// <reference path='../typings/react/react.d.ts'/>
/// <reference path='../typings/redux-actions/redux-actions.d.ts'/>
/// <reference path='../typings/redux/redux.d.ts'/>
/// <reference path='../typings/react-redux/react-redux.d.ts'/>
/// <reference path='../typings/classnames/classnames.d.ts'/>
/// <reference path='../typings/lodash/lodash.d.ts'/>

import * as React from 'react';

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

import App from './containers/App.tsx';
import { rootReducer } from './reducers/rootReducer.ts';

const initialState = {
};

const store: Store = createStore(rootReducer, initialState);

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.getElementById('app')
);

