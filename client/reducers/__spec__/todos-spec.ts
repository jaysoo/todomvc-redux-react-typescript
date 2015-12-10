/// <reference path='../../../typings/mocha/mocha.d.ts'/>
/// <reference path='../../../typings/chai/chai.d.ts'/>

import { expect } from 'chai';

import { Todo } from '../../models/todos';
import todos from '../todos';

import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL,
  CLEAR_COMPLETED
} from '../../constants/ActionTypes';

describe('todo reducer', () => {
  it('handles add', () => {
    let state: Todo[] = [{ id: 0, text: '', completed: true }];
    
    state = todos(state, {
      type: ADD_TODO,
      payload: { text: 'hello', completed: false }
    });
    
    expect(state[0]).to.eql(
      { id: 1, text: 'hello', completed: false }
    );
  });
  
  it('handles delete', () => {
    let state: Todo[] = [{ id: 1, text: '', completed: false }];
    
    state = todos(state, {
      type: DELETE_TODO,
      payload: { id: 1 }
    });
    
    expect(state).to.eql([]);
  });
  
  it('handles edit', () => {
    let state: Todo[] = [{ id: 1, text: '', completed: false }];
    
    state = todos(state, {
      type: EDIT_TODO,
      payload: { id: 1, text: 'hello' }
    });
    
    expect(state[0]).to.eql(
      { id: 1, text: 'hello', completed: false }
    );
  });
  
  it('handles complete all', () => {
    
    let state: Todo[] = [
      { id: 1, text: '', completed: false }
    ];
    
    state = todos(state, {
      type: COMPLETE_TODO,
      payload: { id: 1 }
    });
    
    expect(state[0]).to.eql(
      { id: 1, text: '', completed: true }
    );
  });
  
  it('handles complete all', () => {
    let state: Todo[] = [
      { id: 1, text: '', completed: false },
      { id: 2, text: '', completed: true },
      { id: 3, text: '', completed: false }
    ];
    
    state = todos(state, {
      type: COMPLETE_ALL,
      payload: {}
    });
    
    expect(state).to.eql([
      { id: 1, text: '', completed: true },
      { id: 2, text: '', completed: true },
      { id: 3, text: '', completed: true }
    ]);
    
    state = todos(state, {
      type: COMPLETE_ALL,
      payload: {}
    });
    
    expect(state).to.eql([
      { id: 1, text: '', completed: false },
      { id: 2, text: '', completed: false },
      { id: 3, text: '', completed: false }
    ]);
  });
  
  it('handles clear completed', () => {
    let state: Todo[] = [
      { id: 1, text: '', completed: false },
      { id: 2, text: '', completed: true }
    ];
    
    state = todos(state, {
      type: CLEAR_COMPLETED,
      payload: {}
    });
    
    expect(state).to.eql([
      { id: 1, text: '', completed: false }
    ]);
  });
});
