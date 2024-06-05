import * as actionTypes from '../actionTypes/actionTypes';

export const setAuthData = payload => ({
  type: actionTypes.SET_AUTH_DATA,
  payload,
});

export const setDashboard = payload => ({
  type: actionTypes.SET_DASHBOARD,
  payload,
});

export const setFirebaseId = payload => ({
  type: actionTypes.SET_FIREBASE_ID,
  payload,
});

export const setIsLoading = payload => ({
  type: actionTypes.IS_LOADING,
  payload,
});

export const setCleanStore = () => ({
  type: actionTypes.CLEAN_STORE,
});

