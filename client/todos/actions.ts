import { createAction } from 'redux-actions';

import { Todo } from './model';

import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL,
  CLEAR_COMPLETED
} from './constants/ActionTypes';

const addTodo = createAction<Todo, string>(
  ADD_TODO,
  (text: string) => ({ text, completed: false })
);

const deleteTodo = createAction<Todo, Todo>(
  DELETE_TODO,
  (todo: Todo) => todo
);

const editTodo = createAction<Todo, Todo, string>(
  EDIT_TODO,
  (todo: Todo, newText: string) => ({ ...todo, text: newText })
);

const completeTodo = createAction<Todo, Todo>(
  COMPLETE_TODO,
  (todo: Todo) => todo
)

const completeAll = createAction<void>(
  COMPLETE_ALL,
  () => { }
)

const clearCompleted = createAction<void>(
  CLEAR_COMPLETED,
  () => { }
);

export {
  addTodo,
  deleteTodo,
  editTodo,
  completeTodo,
  completeAll,
  clearCompleted
}
