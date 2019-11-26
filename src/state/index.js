import { combineReducers } from 'redux'

import todoReducer, { workspace as todoSpace } from './modules/todos';
//combine
const reducer = combineReducers({
  [todoSpace]: todoReducer
})
export default reducer;
