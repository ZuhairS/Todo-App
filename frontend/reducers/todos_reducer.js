import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';
import merge from 'lodash/merge';

const initialState = {};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_TODOS:
      return merge({}, state, action.todos);

    case RECEIVE_TODO:
      return merge({}, state, action.todo);

    default:
      return state;
  }
};

export default todosReducer;
