import * as types from '../ActionTypes/MattersActionTypes'

const initialState = {
    metters: [],
    metterData: [],
    updateMetters: [],
    loading: false,
    error: null
}


const mattersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_METTERS_START:
        case types.GET_SINGLE_METTERS_START:
        case types.CREATE_METTERS_START:
        case types.DELETE_METTERS_START:
        case types.UPDATE_METTERS_START:
            return {
                ...state,
                loading: true
            }
        case types.LOAD_METTERS_SUCCESS:
            return {
                ...state,
                loading: false,
                metters: action.payload
            }
        case types.GET_SINGLE_METTERS_SUCCESS:
            return {
                ...state,
                loading: false,
                metterData: action.payload
            }
        case types.CREATE_METTERS_SUCCESS:
        case types.UPDATE_METTERS_SUCCESS:
        case types.DELETE_METTERS_SUCCESS:
            return {
                ...state,
                loading: true
            }
        case types.LOAD_METTERS_ERROR:
        case types.GET_SINGLE_METTERS_ERROR:
        case types.CREATE_METTERS_ERROR:
        case types.DELETE_METTERS_ERROR:
        case types.UPDATE_METTERS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload

            }
        default:
            return state;
    }
}

export default mattersReducer;