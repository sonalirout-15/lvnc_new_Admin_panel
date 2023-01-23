import * as types from '../ActionTypes/CampaignActionTypes';

const initialState = {
    campaning: [],
    CampaningData: [],
    updateCampaning: [],
    loading: false,
    error: null
}


const campaignReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_CAMPANING_START:
        case types.GET_SINGLE_CAMPANING_START:
        case types.CREATE_CAMPANING_START:
        case types.DELETE_CAMPANING_START:
        case types.UPDATE_CAMPANING_START:
            return {
                ...state,
                loading: true,
            }
        case types.LOAD_CAMPANING_SUCCESS:
            return {
                ...state,
                loading: false,
                campaning: action.payload,
            }
        case types.GET_SINGLE_CAMPANING_SUCCESS:
            return {
                ...state,
                loading: false,
                CampaningData: action.payload
            }
        case types.CREATE_CAMPANING_SUCCESS:
        case types.UPDATE_CAMPANING_SUCCESS:
        case types.DELETE_CAMPANING_SUCCESS:
            return {
                ...state,
                loading: true,
            }
        case types.LOAD_CAMPANING_ERROR:
        case types.GET_SINGLE_CAMPANING_ERROR:
        case types.CREATE_CAMPANING_ERROR:
        case types.DELETE_CAMPANING_ERROR:
        case types.UPDATE_CAMPANING_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload

            }
        default:
            return state;
    }
}

export default campaignReducer;