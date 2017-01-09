/// <reference path="./../../../node_modules/@types/mocha/index.d.ts" />

import { expect } from 'chai';

import * as actions from '../actions';

describe('actions', () => {
  it('creates new todo', () => {
    const { payload: todo } = actions.addTodo('hello');

    expect(todo.text).to.eql('hello');
  });

  it('deletes todo', () => {
    const { payload: todo } = actions.deleteTodo({
      id: 999,
      text: '',
      completed: false
    });

    expect(todo.id).to.eql(999);
  });

  it('edits todo', () => {
    const { payload: todo } = actions.editTodo({
      id: 999,
      text: 'hi',
      completed: false
    }, 'bye');
    expect(todo).to.eql({ id: 999, text: 'bye', completed: false});
  });

  it('completes todo', () => {
    const { payload: todo } = actions.completeTodo({
      id: 999,
      text: '',
      completed: false
    });

    expect(todo.id).to.eql(999);
  });
});
