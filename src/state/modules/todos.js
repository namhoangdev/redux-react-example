
import { createReducer } from '../helper';
//constant
export const workspace = 'todos';
export const ADD_TEST = `${workspace}/ADD_TEST`;
export const ADD_SAGA = `${workspace}/ADD_SAGA`;
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

export const addTodoSaga = todo => ({
  type: ADD_SAGA,
  payload: {
    todo
  }
})

export default todoReducer;
