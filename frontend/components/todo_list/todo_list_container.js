import { connect } from 'react-redux';
import { receiveTodos, receiveTodo } from '../../actions/todo_actions';
import TodoList from './todo_list';
import allTodos from '../../reducers/selectors';

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  addTodo: (todo) => dispatch(receiveTodo(todo))
  // addTodos: (todos) => dispatch(receiveTodos(todos))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
