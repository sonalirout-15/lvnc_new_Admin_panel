import * as types from '../ActionTypes/LatestNewsActionTypes';

export const loadLatestNewsStart = () => ({
    type: types.LOAD_LATEST_NEWS_START,
})

export const loadLatestNewsSuccess = (latestnews) => ({
    type: types.LOAD_LATEST_NEWS_SUCCESS,
    payload: latestnews,
})

export const loadLatestNewsError = (error) => ({
    type: types.LOAD_LATEST_NEWS_ERROR,
    payload: error
})


export const getSingleLatestNewsStart = (latestnewsData) => ({
    type: types.GET_SINGLE_LATEST_NEWS_START,
    payload: latestnewsData
})

export const getSingleLatestNewsSuccess = (latestnewsData) => ({
    type: types.GET_SINGLE_LATEST_NEWS_SUCCESS,
    payload: latestnewsData
})

export const getSingleLatestNewsError = (error) => ({
    type: types.GET_SINGLE_LATEST_NEWS_ERROR,
    payload: error
})

export const createLatestNewsStart = (latestnews) => ({
    type: types.CREATE_LATEST_NEWS_START,
    payload: latestnews
})

export const createLatestNewsSuccess = () => ({
    type: types.CREATE_LATEST_NEWS_SUCCESS,
})

export const createLatestNewsError = (error) => ({
    type: types.CREATE_LATEST_NEWS_ERROR,
    payload: error
})


export const deleteLatestNewsStart = (deleteLatestNews) => ({
    type: types.DELETE_LATEST_NEWS_START,
    payload: deleteLatestNews
})

export const deleteLatestNewsSuccess = (deleteLatestNews) => ({
    type: types.DELETE_LATEST_NEWS_SUCCESS,
    payload: deleteLatestNews
})

export const deleteLatestNewsError = (error) => ({
    type: types.DELETE_LATEST_NEWS_ERROR,
    payload: error
})

export const updateLatestNewsStart = (updateLatestNews) => ({
    type: types.UPDATE_LATEST_NEWS_START,
    payload: updateLatestNews,
})

export const updateLatestNewsSuccess = (updateLatestNews) => ({
    type: types.UPDATE_LATEST_NEWS_SUCCESS,
    payload: updateLatestNews,
})

export const updateLatestNewsError = (error) => ({
    type: types.UPDATE_LATEST_NEWS_ERROR,
    payload: error,
})