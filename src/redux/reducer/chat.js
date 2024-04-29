import * as actionTypes from '../actionTypes/ProviderActionTypes';

const initialState = {
  customerFirebaseID: null,
  astroFirebaseID: null,
  screenType: "APP_SCREEN",
  chatRequestData: null,
  isActiveDevice: true,
};

const chat = (state = initialState, actions) => {
  const {payload, type} = actions;

  switch (type) {
    case actionTypes.SET_ASTRO_FIREBASE_ID: {
      return {
        ...state,
        astroFirebaseID: payload,
      };
    }
    case actionTypes.SET_CUSTOMER_FIREBASE_ID: {
      return {
        ...state,
        customerFirebaseID: payload,
      };
    }
    case actionTypes.SET_SCREEN_TYPE: {
      return {
        ...state,
        screenType: payload,
      };
    }
    case actionTypes.SET_CHAT_REQUEST_DATA: {
      return {
        ...state,
        chatRequestData: payload,
      };
    }

    case actionTypes.SET_IS_ACTIVE_DEVICE: {
        return {
          ...state,
          isActiveDevice: payload,
        };
      }
    default: {
      return state;
    }
  }
};

export default chat;
