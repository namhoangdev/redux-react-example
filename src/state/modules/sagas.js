import { all, takeEvery, put } from 'redux-saga/effects';
import { ADD_SAGA } from './todos';

import { addTodo as addTodoAction } from './todos';

function* addTodoSagas(action) {
    const { todo } = action.payload;
    yield put(addTodoAction(todo));
}

export default function* todoSagas() {
    yield all([
        takeEvery(ADD_SAGA, addTodoSagas)
    ]);
}