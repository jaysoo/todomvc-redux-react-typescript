import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';

import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/todos';
import { Todo } from '../models/todos';

interface AppProps {
  todos: Todo[];
  dispatch: Dispatch;
}

class App extends React.Component<AppProps, void> {
  render() {
    const { todos, dispatch } = this.props;

    return (
      <div className="todoapp">
        <Header addTodo={(text: string) => dispatch(TodoActions.addTodo(text))} />
        <MainSection
            todos={todos}
            editTodo={(t: Todo, s: string) => dispatch(TodoActions.editTodo(t, s))}
            deleteTodo={(t: Todo) => dispatch(TodoActions.deleteTodo(t))}
            completeTodo={(t: Todo) => dispatch(TodoActions.completeTodo(t))}
            clearCompleted={() => dispatch(TodoActions.clearCompleted())}
            completeAll={() => dispatch(TodoActions.completeAll())}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(App);
