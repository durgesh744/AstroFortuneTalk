import {combineReducers} from 'redux';
import {CLEAN_STORE} from '../actionTypes/actionTypes';
import provider from './auth';

const rootReducer = combineReducers({
  provider,
});

const appReducer = (state, action) => {
  if (action.type == CLEAN_STORE) {
    state = undefined;
  }
  return rootReducer(state, action);
};

export default appReducer;
