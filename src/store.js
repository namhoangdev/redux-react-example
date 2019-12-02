import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { sagas } from './state/rootSagas';

import reducers from './state/index';

const sagasMiddleware = createSagaMiddleware();
const composeMiddlewares = applyMiddleware(sagasMiddleware);

// Use Redux DevTools Extension if available and not in production.
const composeEnhancers =
  (process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  reducers,
  composeEnhancers(composeMiddlewares)
);
sagasMiddleware.run(sagas);
export default store;
