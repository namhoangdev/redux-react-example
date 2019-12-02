import { fork, all } from 'redux-saga/effects';

import todoSaga from './modules/sagas';
export function* sagas() {
  yield all([
    yield fork(todoSaga)
  ]);
}