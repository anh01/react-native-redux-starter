import { combineReducers } from 'redux';

import greeting from './GreetingsReducer';

/**
 * Combine all reducers to feed into the store.
 */
const rootReducer = combineReducers({
  greeting
});

export default rootReducer;
