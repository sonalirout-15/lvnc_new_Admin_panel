import * as types from '../ActionTypes/MattersActionTypes'

export const loadMettersStart = () => ({
    type: types.LOAD_METTERS_START,
})

export const loadMettersSuccess = (metters) => ({
    type: types.LOAD_METTERS_SUCCESS,
    payload: metters,
})

export const loadMettersError = (error) => ({
    type: types.LOAD_METTERS_ERROR,
    payload: error
})


export const getSingleMettersStart = (metterData) => ({
    type: types.GET_SINGLE_METTERS_START,
    payload: metterData
})

export const getSingleMettersSuccess = (metterData) => ({
    type: types.GET_SINGLE_METTERS_SUCCESS,
    payload: metterData
})

export const getSingleMettersError = (error) => ({
    type: types.GET_SINGLE_METTERS_ERROR,
    payload: error
})

export const createMettersStart = (metters) => ({
    type: types.CREATE_METTERS_START,
    payload: metters
})

export const createMettersSuccess = () => ({
    type: types.CREATE_METTERS_SUCCESS,
})

export const createMettersError = (error) => ({
    type: types.CREATE_METTERS_ERROR,
    payload: error
})

export const deleteMettersStart = (deleteMetters) => ({
    type: types.DELETE_METTERS_START,
    payload: deleteMetters
})

export const deleteMettersSuccess = (deleteMetters) => ({
    type: types.DELETE_METTERS_SUCCESS,
    payload: deleteMetters
})

export const deleteMettersError = (error) => ({
    type: types.DELETE_METTERS_ERROR,
    payload: error
})

export const updateMettersStart = (updateMetters) => ({
    type: types.UPDATE_METTERS_START,
    payload: updateMetters
})

export const updateMettersSuccess = (updateMetters) => ({
    type: types.UPDATE_METTERS_SUCCESS,
    payload: updateMetters
})

export const updateMettersError = (error) => ({
    type: types.UPDATE_METTERS_ERROR,
    payload: error
})