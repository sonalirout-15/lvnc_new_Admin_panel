import * as types from '../ActionTypes/PostActionTypes';

const initialState = {
    post: [],
    postData: [],
    updatePost: [],
    loading: false,
    error: null
}


const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_POST_START:
        case types.GET_SINGLE_POST_START:
        case types.CREATE_POST_START:
        case types.DELETE_POST_START:
        case types.UPDATE_POST_START:
            return {
                ...state,
                loading: true
            }
        case types.LOAD_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                post: action.payload
            }
        case types.GET_SINGLE_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                postData: action.payload
            }
        case types.CREATE_POST_SUCCESS:
        case types.UPDATE_POST_SUCCESS:
        case types.DELETE_POST_SUCCESS:
            return {
                ...state,
                loading: true,
            }
        case types.LOAD_POST_ERROR:
        case types.GET_SINGLE_POST_ERROR:
        case types.CREATE_POST_ERROR:
        case types.DELETE_POST_ERROR:
        case types.UPDATE_POST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload

            }
        default:
            return state;
    }
}

export default postReducer;