import * as types from '../ActionTypes/AdminActionTypes';

const initialState = {
    admin: [],
    adminLogin: [],
    adminData: [],
    updateAdmin: [],
    loading: false,
    error: null
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADMIN_LOGIN_START:
        case types.ADMIN_CHANGE_PASSWORD_START:
        case types.ADMIN_RESET_PASSWORD_START:
        case types.ADMIN_FORGOT_PASSWORD_START:
        case types.ADMIN_LOGOUT_START:
        case types.LOAD_ADMIN_START:
        case types.CREATE_ADMIN_START:
        case types.GET_SINGLE_ADMIN_START:
        // case types.DELETE_ADMIN_START:
        case types.UPDATE_ADMIN_START:
            return {
                ...state,
                loading: true
            }
        case types.ADMIN_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                adminLogin: action.payload
            }
        case types.CREATE_ADMIN_SUCCESS: 
            return {
                ...state,
                loading: false,
                admin : action.payload
            }
        case types.LOAD_ADMIN_SUCCESS:
            return {
                ...state,
                loading: false,
                admin: action.payload
            }
        case types.GET_SINGLE_ADMIN_SUCCESS:
            return {
                ...state,
                loading: false,
                adminData: action.payload
            }
        case types.UPDATE_ADMIN_SUCCESS:
            return{
                ...state,
                loading: true,
                updateAdmin: action.payload
            }
            
        case types.ADMIN_CHANGE_PASSWORD_SUCCESS:
        case types.ADMIN_RESET_PASSWORD_SUCCESS:
        case types.ADMIN_FORGOT_PASSWORD_SUCCESS:
        case types.ADMIN_LOGOUT_SUCCESS:
        // case types.DELETE_ADMIN_SUCCESS:
            return {
                ...state,
                loading: true
            }
        case types.ADMIN_LOGIN_ERROR:
        case types.ADMIN_CHANGE_PASSWORD_ERROR:
        case types.ADMIN_RESET_PASSWORD_ERROR:
        case types.ADMIN_FORGOT_PASSWORD_ERROR:
        case types.ADMIN_LOGOUT_ERROR:
        case types.LOAD_ADMIN_ERROR:
        case types.CREATE_ADMIN_ERROR:
        case types.GET_SINGLE_ADMIN_ERROR:
        // case types.DELETE_ADMIN_ERROR:
        case types.UPDATE_ADMIN_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default adminReducer;
