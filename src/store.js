import { compose, createStore } from 'redux';
import reducers from './state/index';

// Use Redux DevTools Extension if available and not in production.
const composeEnhancers =
  (process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  reducers,
  composeEnhancers()
);

export default store;
