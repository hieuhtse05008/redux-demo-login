import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
//import calcultorReducer  from './calcultorReducer';
//import loginReducer from './loginReducer'
import resultReducer from "./resultReducer";

const rootReducer = combineReducers({
  routing: routerReducer,
  result: resultReducer
});

export default rootReducer;
