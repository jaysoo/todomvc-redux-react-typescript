import { combineReducers } from 'redux';
import todos from './todos.ts';

const rootReducer = combineReducers({
	todos: todos
});

export { rootReducer };