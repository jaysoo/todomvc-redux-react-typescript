/// <reference path='../../typings/react/react.d.ts'/>
/// <reference path='../../typings/classnames/classnames.d.ts'/>

import * as React from 'react';
import * as classNames from 'classnames';

import TodoTextInput from './TodoTextInput';

type Todo = {
	id: number;
	text: string,
	completed?: boolean
};

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

  handleSave(id, text) {
    if (text.length === 0) {
      this.props.deleteTodo(id);
    } else {
      this.props.editTodo(id, text);
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
                       onSave={(text) => this.handleSave(todo.id, text)}/>
      );
    } else {
      element = (
        <div className="view">
          <input className="toggle"
                 type="checkbox"
                 checked={todo.completed}
                 onChange={() => completeTodo(todo.id)} />
          <label onDoubleClick={this.handleDoubleClick.bind(this)}>
            {todo.text}
          </label>
          <button className="destroy"
                  onClick={() => deleteTodo(todo.id)} />
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