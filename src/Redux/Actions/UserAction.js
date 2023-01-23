import * as types from '../ActionTypes/UserActionTypes';

export const loadUserStart = (user) => ({
    type: types.LOAD_USER_START,
    payload: user
})

export const loadUserSuccess = (user) => ({
    type: types.LOAD_USER_SUCCESS,
    payload: user,
})

export const loadUserError = (error) => ({
    type: types.LOAD_USER_ERROR,
    payload: error
})

export const loadUserContactUsStart = (contactUsData) => ({
    type: types.LOAD_USER_CONTACTLIST_START,
    payload: contactUsData
})

export const loadUserContactUsSuccess = (contactUsData) => ({
    type: types.LOAD_USER_CONTACTLIST_SUCCESS,
    payload: contactUsData,
})

export const loadUserContactUsError = (error) => ({
    type: types.LOAD_USER_CONTACTLIST_ERROR,
    payload: error
})

