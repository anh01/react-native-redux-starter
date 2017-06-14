import * as actionTypes from '../actions/actionTypes';

const initialGreetingsState = {
  message: 'Hello World!'
};

const greetingsReducer = (state = {}, action) => {
  switch(action.type) {
    case actionTypes.SAY_HI:
      return {
        ...state,
        message: action.payload.message
      }

    default:
      return state;
  }
};

export default greetingsReducer;
