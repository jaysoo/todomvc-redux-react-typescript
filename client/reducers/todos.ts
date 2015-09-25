/// <reference path='../../typings/lodash/lodash.d.ts'/>
/// <reference path='../../typings/redux-actions/redux-actions.d.ts'/>

import { assign } from 'lodash';
import { handleActions, Action } from 'redux-actions';

import { Todo } from '../models/todos';
import {
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

const initialState: Initializing = {progress: 0};

export default handleActions<Model>({
  [ADD_TODO]: (state: Model, action: Action): Model => {
    if (!isInitializing(state)) {
    return [{
      id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      completed: action.payload.completed,
      text: action.payload.text
    }, ...state];
    }
  }
}, initialState);
