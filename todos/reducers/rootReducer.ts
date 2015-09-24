/// <reference path='../../typings/redux/redux.d.ts'/>

import { combineReducers } from 'redux';

import todos from './todos';

const rootReducer = combineReducers({
  todos: todos
});

export { rootReducer };
