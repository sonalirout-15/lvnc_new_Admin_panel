import * as types from '../ActionTypes/UserActionTypes';

const initialState = {
    user: [],
    contactUsData :[],
    loading: false,
    error: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_USER_START:
        case types.LOAD_USER_CONTACTLIST_START:
            return {
                ...state,
                loading: true
            }
        case types.LOAD_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        case types.LOAD_USER_CONTACTLIST_SUCCESS:
            return{
                ...state,
                loading : false,
                contactUsData :action.payload,
                
            }
        case types.LOAD_USER_ERROR:
        case types.LOAD_USER_CONTACTLIST_ERROR:    
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;
