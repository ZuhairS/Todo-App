import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.removeTodo = this.removeTodo.bind(this);
  }

  removeTodo(event) {
    event.preventDefault();
    this.props.removeTodo(this.props.todo);
  }

  render() {
    return (
      <li>{ this.props.todo.title } <button onClick={this.removeTodo}>Remove TODO</button></li>
    );
  }
}

export default TodoListItem;
