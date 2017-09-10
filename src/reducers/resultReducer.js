import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function resultReducer(state = initialState, action) {

  switch (action.type) {
    case types.LOGIN:
      console.log('LOGIN action',state);
      return {
        ...state,
        ...{
          Result: action.data.email,
          login : action.data,
          typeAction : true
        }

      };
    case types.REGISTER:
      console.log('REGISTER action',state);
      return {
        ...state,
        ...{
          Result: action.data.email,
          register : action.data,
          typeAction : false
        }

      };
    default:
      return state;
  }
}
