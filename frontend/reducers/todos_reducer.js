import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';
import merge from 'lodash/merge';

window.merge = merge;   // TODO

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_TODOS:

      const newState = {};
      action.todos.forEach(todo => {
        newState[todo.id] = todo;
      });

      return newState;

    case RECEIVE_TODO:
      const oldState = merge({}, state);

      const newTodo = { [action.todo.id]: action.todo };
      return merge(oldState, newTodo);

    default:
      return state;
  }
};

export default todosReducer;
