import * as types from '../ActionTypes/BannerImageActionTypes';

const initialState = {
    bannerImageData: [],
    bannerData : [],
    deleteBanner : [],
    updateBanner : [],
    loading: false,
    error: null
}


const bannerImageReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_BANNER_IMAGE_START:
        case types.CREATE_BANNER_IMAGE_START:
        case types.GET_SINGLE_BANNER_IMAGE_START:
        case types.DELETE_BANNER_IMAGE_START:
        case types.UPDATE_BANNER_IMAGE_START:
            return {
                ...state,
                loading: true,
            }
        case types.LOAD_BANNER_IMAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                bannerImageData: action.payload,
            }
        case types.GET_SINGLE_BANNER_IMAGE_SUCCESS:
            return {
                    ...state,
                    loading: false,
                    bannerData: action.payload,
                }
        case types.CREATE_BANNER_IMAGE_SUCCESS:
        case types.UPDATE_BANNER_IMAGE_SUCCESS:
        case types.DELETE_BANNER_IMAGE_SUCCESS:
            return{
                ...state,
                loading: false
            }
        case types.LOAD_BANNER_IMAGE_ERROR:
        case types.GET_SINGLE_BANNER_IMAGE_ERROR:
        case types.CREATE_BANNER_IMAGE_ERROR:
        case types.UPDATE_BANNER_IMAGE_ERROR:
        case types.DELETE_BANNER_IMAGE_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload

            }
        default:
            return state;
    }
}

export default bannerImageReducer;