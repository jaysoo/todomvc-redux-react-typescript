/// <reference path='../../typings/react/react.d.ts'/>
/// <reference path='../../typings/redux/redux.d.ts'/>
/// <reference path='../../typings/react-redux/react-redux.d.ts'/>

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as React from 'react';

import { Model, isInitializing } from '../reducers/todos';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/todos';

// It would be nice to specify an AppProps interface for this component, but it
// does not play nicely with the {() => <App/>} usage in main.
class App extends React.Component<any, any> {
  componentDidMount() {
    const dispatch = this.props.dispatch;
    const actions = bindActionCreators(TodoActions, dispatch);
    // actions.loadTodos();
  }
  
  render() {
    const todos: Model = this.props.todos;
    const dispatch = this.props.dispatch;
    const actions = bindActionCreators(TodoActions, dispatch);

    if (isInitializing(todos)) {
      const style = {
        'font-size': '24px',
        'text-align': 'center'
      };
      return <p style={style}>Initializing... ({todos.progress}%)</p>
    } else {
      return (
        <div className="todoapp">
          <Header addTodo={actions.addTodo} />
          <MainSection
            todos={todos}
            actions={actions}/>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(mapStateToProps)(App);
