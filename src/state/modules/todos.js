
import { createReducer } from '../helper';
//constant
export const workspace = 'todos';
export const ADD_TEST = `${workspace}/ADD_TEST`;
//default state
const defaultState = {
  listTodo: []
};
//create reducer
const todoReducer = createReducer(defaultState, {
  [ADD_TEST]: (state, action) => ({
    ...state,
    listTodo: [...state.listTodo, action.payload.todo]
  })
});
//action
export const addTodo = todo => ({
  type: ADD_TEST,
  payload: {
    todo
  }
});

export default todoReducer;
