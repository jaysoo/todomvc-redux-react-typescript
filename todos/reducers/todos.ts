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

const initialState = [<Todo>{
  text: 'Use Redux with TypeScript',
  completed: false,
  id: 0
}];

export default handleActions<Todo[]>({
  [ADD_TODO]: (state: Todo[], action: Action): Todo[] => {
    return [{
      id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      completed: action.payload.completed,
      text: action.payload.text
    }, ...state];
  },
  
  [DELETE_TODO]: (state: Todo[], action: Action): Todo[] => {
    return state.filter(todo =>
      todo.id !== action.payload.id
    );
  },
  
  [EDIT_TODO]: (state: Todo[], action: Action): Todo[] => {
    return <Todo[]>state.map(todo =>
      todo.id === action.payload.id
        ? assign(<Todo>{}, todo, { text: action.payload.text })
        : todo
    );
  },
  
  [COMPLETE_TODO]: (state: Todo[], action: Action): Todo[] => {
    return <Todo[]>state.map(todo =>
      todo.id === action.payload.id ?
        assign({}, todo, { completed: !todo.completed }) :
        todo
    );
  },
  
  [COMPLETE_ALL]: (state: Todo[], action: Action): Todo[] => {
    const areAllMarked = state.every(todo => todo.completed);
    return <Todo[]>state.map(todo => assign({}, todo, {
      completed: !areAllMarked
    }));
  },

  [CLEAR_COMPLETED]: (state: Todo[], action: Action): Todo[] => {
    return state.filter(todo => todo.completed === false);
  }
}, initialState);
