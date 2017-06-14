import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { autoRehydrate } from 'redux-persist';
import { compose, createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers';

/**
 * List of Redux middleware.
 */
const middleware = [
  thunk
];

if (__DEV__) middleware.push(logger);

/**
 * Configure the redux store with middleware and reducers.
 *
 * @returns {object} store
 */
const configureStore = () => {
  return createStore(
    rootReducer,
    compose(
      applyMiddleware(...middleware),
      autoRehydrate()
    )
  );
};

export default configureStore;
