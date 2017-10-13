import { handleActions, Action } from 'redux-actions';

import { Todo, IState } from './model';
import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL,
  CLEAR_COMPLETED
} from './constants/ActionTypes';

const initialState: IState = [<Todo>{
  text: 'Use Redux with TypeScript',
  completed: false,
  id: 0
}];

export default handleActions<IState, Todo>({
  [ADD_TODO]: (state: IState, action: Action<Todo>): IState => {
    return [{
      id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
      completed: action.payload.completed,
      text: action.payload.text
    }, ...state];
  },

  [DELETE_TODO]: (state: IState, action: Action<Todo>): IState => {
    return state.filter(todo =>
      todo.id !== action.payload.id
    );
  },

  [EDIT_TODO]: (state: IState, action: Action<Todo>): IState => {
    return <IState>state.map(todo =>
      todo.id === action.payload.id
        ? { ...todo, text: action.payload.text }
        : todo
    );
  },

  [COMPLETE_TODO]: (state: IState, action: Action<Todo>): IState => {
    return <IState>state.map(todo =>
      todo.id === action.payload.id ?
        { ...todo, completed: !todo.completed } :
        todo
    );
  },

  [COMPLETE_ALL]: (state: IState, action: Action<Todo>): IState => {
    const areAllMarked = state.every(todo => todo.completed);
    return <IState>state.map(todo => ({ ...todo,
      completed: !areAllMarked
    }));
  },

  [CLEAR_COMPLETED]: (state: IState, action: Action<Todo>): IState => {
    return state.filter(todo => todo.completed === false);
  }
}, initialState);
