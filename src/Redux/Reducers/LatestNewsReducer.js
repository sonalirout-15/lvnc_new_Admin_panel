import * as types from '../ActionTypes/LatestNewsActionTypes';

const initialState = {
    latestnews: [],
    latestnewsData: [],
    updateLatestNews: [],
    loading: false,
    error: null
}


const latestNewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_LATEST_NEWS_START:
        case types.GET_SINGLE_LATEST_NEWS_START:
        case types.CREATE_LATEST_NEWS_START:
        case types.DELETE_LATEST_NEWS_START:
        case types.UPDATE_LATEST_NEWS_START:
            return {
                ...state,
                loading: true,
            }
        case types.LOAD_LATEST_NEWS_SUCCESS:
            return {
                ...state,
                loading: false,
                latestnews: action.payload,
            }
        case types.GET_SINGLE_LATEST_NEWS_SUCCESS:
            return {
                ...state,
                loading: false,
                latestnewsData: action.payload
            }
        case types.CREATE_LATEST_NEWS_SUCCESS:
        case types.UPDATE_LATEST_NEWS_SUCCESS:
        case types.DELETE_LATEST_NEWS_SUCCESS:
            return {
                ...state,
                loading: true,
            }
        case types.LOAD_LATEST_NEWS_ERROR:
        case types.GET_SINGLE_LATEST_NEWS_ERROR:
        case types.CREATE_LATEST_NEWS_ERROR:
        case types.DELETE_LATEST_NEWS_ERROR:
        case types.UPDATE_LATEST_NEWS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload

            }
        default:
            return state;
    }
}

export default latestNewsReducer;