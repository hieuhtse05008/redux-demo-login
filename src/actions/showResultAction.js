import * as types from '../constants/actionTypes';

export function login(data) {
  console.log('login')
  return ({
    type: types.LOGIN,
    data : data,

  });
}

export function register(data) {
  console.log('register')
  return ({
    type: types.REGISTER,
    data: data,

  });
}


