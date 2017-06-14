import * as actionTypes from './actionTypes';

/**
 * An action creator that says hi.
 *
 * @param {string} message - the greeting message
 * @returns {Object}
 */
export const sayHi = message => ({
  type: actionTypes.SAY_HI,
  payload: {
    message
  }
});
