import { combineReducers } from 'redux';

import todos from '../todos';
import { IState } from '../todos/model';

const rootReducer = combineReducers<IState>({
  todos
});

export default rootReducer;
