import * as types from '../ActionTypes/BannerImageActionTypes';

export const loadBannerImageStart = () => ({
    type: types.LOAD_BANNER_IMAGE_START,
})

export const loadBannerImageSuccess = (bannerImageData) => ({
    type: types.LOAD_BANNER_IMAGE_SUCCESS,
    payload: bannerImageData,
})

export const loadBannerImageError = (error) => ({
    type: types.LOAD_BANNER_IMAGE_ERROR,
    payload: error
})

export const getSingleBannerImageStart = (bannerData) => ({
    type: types.GET_SINGLE_BANNER_IMAGE_START,
    payload: bannerData
})

export const getSingleBannerImageSuccess = (bannerData) => ({
    type: types.GET_SINGLE_BANNER_IMAGE_SUCCESS,
    payload: bannerData
})

export const getSingleBannerImageError = (error) => ({
    type: types.GET_SINGLE_BANNER_IMAGE_ERROR,
    payload: error
})

export const createBannerImageStart = (bannerImageData) => ({
    type: types.CREATE_BANNER_IMAGE_START,
    payload : bannerImageData
})

export const createBannerImageSuccess = (bannerImageData) => ({
    type: types.CREATE_BANNER_IMAGE_SUCCESS,
    payload: bannerImageData
})

export const createBannerImageError = (error) => ({
    type: types.CREATE_BANNER_IMAGE_ERROR,
    payload: error
})


export const deleteBannerImageStart = (deleteBanner) => ({
    type: types.DELETE_BANNER_IMAGE_START,
    payload: deleteBanner
})

export const deleteBannerImageSuccess = (deleteBanner) => ({
    type: types.DELETE_BANNER_IMAGE_SUCCESS,
    payload: deleteBanner
})

export const deleteBannerImageError = (error) => ({
    type: types.DELETE_BANNER_IMAGE_ERROR,
    payload: error
})

export const updateBannerImageStart = (updateBanner) => ({
    type: types.UPDATE_BANNER_IMAGE_START,
    payload: updateBanner,
})

export const updateBannerImageSuccess = (updateBanner) => ({
    type: types.UPDATE_BANNER_IMAGE_SUCCESS,
    payload: updateBanner,
})

export const updateBannerImageError = (error) => ({
    type: types.UPDATE_BANNER_IMAGE_ERROR,
    payload: error,
})