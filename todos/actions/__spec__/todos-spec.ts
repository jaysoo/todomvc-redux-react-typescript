/// <reference path='../../../test.d.ts'/>

import { expect } from 'chai';

import * as TodoActions from '../todos';

describe('TodoActions', () => {
  it('creates new todo', () => {
    const { payload: todo } = TodoActions.addTodo('hello');
    
    expect(todo.text).to.eql('hello');
  });
  
  it('deletes todo', () => {
    const { payload: todo } = TodoActions.deleteTodo(999);
    
    expect(todo.id).to.eql(999);
  });
  
  it('edits todo', () => {
    const { payload: todo } = TodoActions.editTodo(999, 'bye');
    expect(todo).to.eql({ id: 999, text: 'bye'});
  });
  
  it('completes todo', () => {
    const { payload: todo } = TodoActions.completeTodo(999);
    
    expect(todo.id).to.eql(999);
  });
});
