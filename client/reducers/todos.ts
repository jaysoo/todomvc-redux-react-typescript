/// <reference path='../../typings/lodash/lodash.d.ts'/>
/// <reference path='../../typings/redux-actions/redux-actions.d.ts'/>

import { assign } from 'lodash';
import { handleActions, Action } from 'redux-actions';

import { Todo } from '../models/todos';
import {
  LOAD_TODOS,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL,
  CLEAR_COMPLETED
} from '../constants/ActionTypes';

export interface Initializing {
  progress: number;
};

export const isInitializing = (model: any): model is Initializing => {
  return typeof model.progress === 'number';
}

export type Model = Initializing | Todo[];

const initialState: Initializing = {progress: 0}

export default handleActions<Model>({
  [LOAD_TODOS]: (state: Model, action: Action): Model => {
    return action.payload;
  },
  
  [ADD_TODO]: (state: Model, action: Action): Model => {
    let todos: Todo[];
    
    if (isInitializing(state)) {
      // If current state is initializing, set todos to empty array.
      todos = [];
    } else {
      // Otherwise set to current state.
      todos = state;
    }

    return [{
      id: todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      completed: action.payload.completed,
      text: action.payload.text
    }, ...todos];
  }
}, initialState);
