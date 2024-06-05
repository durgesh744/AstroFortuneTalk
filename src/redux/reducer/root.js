import {combineReducers} from 'redux';
import authProvider from './auth';
import {CLEAN_STORE} from '../actionTypes/actionTypes';

const rootReducer = combineReducers({
  authProvider,
});

const appReducer = (state, action) => {
  if (action.type == CLEAN_STORE) {
    state = undefined;
  }
  return rootReducer(state, action);
};

export default appReducer;
