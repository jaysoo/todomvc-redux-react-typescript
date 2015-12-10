/// <reference path='../../typings/react/react.d.ts'/>
/// <reference path='../../typings/classnames/classnames.d.ts'/>

import * as React from 'react';
import classNames from 'classnames';

import { Todo } from '../models/todos';
import TodoTextInput from './TodoTextInput';

interface TodoItemProps {
  todo: Todo;
  editTodo: Function;
  deleteTodo: Function;
  completeTodo: Function;
  key?: any;
}

class TodoItem extends React.Component<TodoItemProps, any> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      editing: false
    };
  }

  handleDoubleClick() {
    this.setState({ editing: true });
  }

  handleSave(todo, text) {
    if (text.length === 0) {
      this.props.deleteTodo(todo);
    } else {
      this.props.editTodo(todo, text);
    }
    this.setState({ editing: false });
  }

  render() {
    const {todo, completeTodo, deleteTodo} = this.props;

    let element;
    if (this.state.editing) {
      element = (
        <TodoTextInput text={todo.text}
                       editing={this.state.editing}
                       onSave={(text) => this.handleSave(todo, text)}/>
      );
    } else {
      element = (
        <div className="view">
          <input className="toggle"
                 type="checkbox"
                 checked={todo.completed}
                 onChange={() => completeTodo(todo)} />
          <label onDoubleClick={this.handleDoubleClick.bind(this)}>
            {todo.text}
          </label>
          <button className="destroy"
                  onClick={() => deleteTodo(todo)} />
        </div>
      );
    }

    return (
      <li className={classNames({
        completed: todo.completed,
        editing: this.state.editing
      })}>
        {element}
      </li>
    );
  }
}

export default TodoItem;
