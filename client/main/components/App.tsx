import { Dispatch } from "redux";
import { connect } from "react-redux";
import * as React from "react";

import {
  Header,
  MainSection,
  model,
  addTodo,
  editTodo,
  clearCompleted,
  completeAll,
  completeTodo,
  deleteTodo
} from "../../todos";
import { IState } from "../../todos/model";

interface AppProps {
  todos: model.Todo[];
  dispatch: Dispatch<{}>;
}

function App(props: AppProps) {
  const { todos, dispatch } = props;

  return (
    <div className="todoapp">
      <Header addTodo={(text: string) => dispatch(addTodo(text))} />
      <MainSection
        todos={todos}
        editTodo={(t, s) => dispatch(editTodo(t, s))}
        deleteTodo={(t: model.Todo) => dispatch(deleteTodo(t))}
        completeTodo={(t: model.Todo) => dispatch(completeTodo(t))}
        clearCompleted={() => dispatch(clearCompleted())}
        completeAll={() => dispatch(completeAll())}
      />
    </div>
  );
}

const mapStateToProps = (state: IState) => ({
  todos: state
});

export default connect(mapStateToProps)(App);
