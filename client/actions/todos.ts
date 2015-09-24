/// <reference path='../../typings/redux-actions/redux-actions.d.ts'/>

import { createAction, Action } from 'redux-actions';

import * as types from '../constants/ActionTypes.ts';

type Todo = {
  text?: string;
  id?: number;
  completed?: boolean;
}

const addTodo = createAction<Todo>(
  types.ADD_TODO,
  (text: string) => ({ text })
);

const deleteTodo = createAction<Todo>(
  types.DELETE_TODO,
  (id: number) => ({ id })
);

const editTodo = createAction<Todo>(
  types.EDIT_TODO,
  (id: number, text: string) => ({ id, text })
);

const completeTodo = createAction<Todo>(
  types.COMPLETE_TODO,
  (id: number) => ({ id })
)

const completeAll = createAction<void>(
  types.COMPLETE_ALL,
  () => {}
)

const clearCompleted = createAction<void>(
  types.CLEAR_COMPLETED,
  () => {}
);

export {
  addTodo,
  deleteTodo,
  editTodo,
  completeTodo,
  completeAll,
  clearCompleted
}