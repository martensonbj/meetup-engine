import { combineReducers } from 'redux';
import sunReducer from './sun-reducer';
import localReducer from './local-reducer';

const rootReducer = combineReducers({
  sunReducer,
  localReducer
});

export default rootReducer;
