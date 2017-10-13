import * as React from 'react';

import TodoTextInput from './TodoTextInput';

interface HeaderProps {
  addTodo: (text:string)=> any;
};

class Header extends React.Component<HeaderProps> {
  handleSave(text: string) {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    return (
      <header className="header">
          <h1>todos</h1>
          <TodoTextInput
            newTodo
            onSave={this.handleSave.bind(this)}
            placeholder="What needs to be done?" />
      </header>
    );
  }
}

export default Header;
