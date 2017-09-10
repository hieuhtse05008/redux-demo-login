import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function loginReducer(state = initialState, action) {
  console.log('loginreducer', state)
  switch (action.type) {
    case types.LOGIN:
      console.log('loginreducer LOGIN', state);
      return {
        ...state,
        ...{
          result: state
        }
      };
    default:
      console.log('loginreducer default', state);
      return state;
  }
}
