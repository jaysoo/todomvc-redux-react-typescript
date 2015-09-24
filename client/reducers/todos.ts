import { assign } from 'lodash';
import { handleActions, Action } from 'redux-actions';

import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL,
  CLEAR_COMPLETED
} from '../constants/ActionTypes';

const initialState = [{
  text: 'Use Redux with TypeScript',
  completed: false,
  id: 0
}];

export type Todo = {
  text?: string;
  id?: number;
  completed?: boolean;
};

export default handleActions<Todo[]>({
  [ADD_TODO]: (state: Todo[], action: Action) => {
    return [{
      id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      completed: false,
      text: action.payload.text
    }, ...state];
  },
  
  [DELETE_TODO]: (state: Todo[], action: Action) => {
    return state.filter(todo =>
      todo.id !== action.payload.id
    );
  },
  
  [EDIT_TODO]: (state: Todo[], action: Action) => {
    return state.map(todo =>
      todo.id === action.payload.id ?
        assign({}, todo, { text: action.payload.text }) :
        todo
    );
  },
  
  [COMPLETE_TODO]: (state: Todo[], action: Action) => {
    return state.map(todo =>
      todo.id === action.payload.id ?
        assign({}, todo, { completed: !todo.completed }) :
        todo
    );
  },
  
  [COMPLETE_ALL]: (state: Todo[], action: Action) => {
    const areAllMarked = state.every(todo => todo.completed);
    return state.map(todo => assign({}, todo, {
      completed: !areAllMarked
    }));
  },

  [CLEAR_COMPLETED]: (state: Todo[], action: Action) => {
    return state.filter(todo => todo.completed === false);
  }
});
