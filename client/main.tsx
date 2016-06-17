/// <reference path='../typings/index.d.ts'/>

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { IStore, createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './main/components/App';
import rootReducer from './main/reducer';

const initialState = {};

const store: IStore<any> = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);