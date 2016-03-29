import { createAction, Action } from 'redux-actions';
import { assign } from 'lodash';

import { Todo } from './model';

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const COMPLETE_ALL = 'COMPLETE_ALL';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

const addTodo = createAction<Todo>(
  ADD_TODO,
  (text: string) => ({ text, completed: false })
);

const deleteTodo = createAction<Todo>(
  DELETE_TODO,
  (todo: Todo) => todo
);

const editTodo = createAction<Todo>(
  EDIT_TODO,
  (todo: Todo, newText: string) => <Todo>assign(todo, {text: newText})
);

const completeTodo = createAction<Todo>(
  COMPLETE_TODO,
  (todo: Todo) => todo
)

const completeAll = createAction<void>(
  COMPLETE_ALL,
  () => {}
)

const clearCompleted = createAction<void>(
  CLEAR_COMPLETED,
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
