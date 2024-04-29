import * as actionTypes from '../actionTypes/ProviderActionTypes';

export const setCustomerFirebaseId = payload =>({
    type: actionTypes.SET_CUSTOMER_FIREBASE_ID,
    payload
})

export const setAstroFirebaseId = payload =>({
    type: actionTypes.SET_ASTRO_FIREBASE_ID,
    payload
})

export const setScreenType = payload =>({
    type: actionTypes.SET_SCREEN_TYPE,
    payload
})

export const setChatRequestData = payload =>({
    type: actionTypes.SET_CHAT_REQUEST_DATA,
    payload
})

export const setIsActiveDevice = payload =>({
    type: actionTypes.SET_IS_ACTIVE_DEVICE,
    payload
})

