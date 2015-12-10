/// <reference path='../../../typings/mocha/mocha.d.ts'/>
/// <reference path='../../../typings/chai/chai.d.ts'/>

import { expect } from 'chai';

import * as TodoActions from '../todos';

describe('TodoActions', () => {
  it('creates new todo', () => {
    const { payload: todo } = TodoActions.addTodo('hello');
    
    expect(todo.text).to.eql('hello');
  });
  
  it('deletes todo', () => {
    const { payload: todo } = TodoActions.deleteTodo({
      id: 999,
      text: '',
      completed: false
    });
    
    expect(todo.id).to.eql(999);
  });
  
  it('edits todo', () => {
    const { payload: todo } = TodoActions.editTodo({
      id: 999,
      text: 'hi',
      completed: false
    }, 'bye');
    expect(todo).to.eql({ id: 999, text: 'bye', completed: false});
  });
  
  it('completes todo', () => {
    const { payload: todo } = TodoActions.completeTodo({
      id: 999,
      text: '',
      completed: false
    });
    
    expect(todo.id).to.eql(999);
  });
});
