import * as actionTypes from '../actionTypes/actionTypes';

const initialState = {
  id: null,
  authData: [],
  dashboard: null,
  firebaseId: null,
  requestData: null,
  isLoading: false,
};

const authProvider = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.SET_AUTH_DATA:
      return {
        ...state,
        authData: payload,
      };
    case actionTypes.SET_DASHBOARD:
      return {
        ...state,
        dashboard: payload,
      };

    case actionTypes.SET_FIREBASE_ID:
      return {
        ...state,
        firebaseId: payload,
      };

    case actionTypes.IS_LOADING:
      return {
        ...state,
        isLoading: payload,
      };

    default:
      return state;
  }
};

export default authProvider;
