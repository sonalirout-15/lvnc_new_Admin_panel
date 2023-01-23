import * as types from '../ActionTypes/CampaignActionTypes'

export const loadCampaningStart = () => ({
    type: types.LOAD_CAMPANING_START,
})

export const loadCampaningSuccess = (campaning) => ({
    type: types.LOAD_CAMPANING_SUCCESS,
    payload: campaning,
})

export const loadCampaningError = (error) => ({
    type: types.LOAD_CAMPANING_ERROR,
    payload: error
})


export const getSingleCampaningStart = (campaningData) => ({
    type: types.GET_SINGLE_CAMPANING_START,
    payload: campaningData
})

export const getSingleCampaningSuccess = (campaningData) => ({
    type: types.GET_SINGLE_CAMPANING_SUCCESS,
    payload: campaningData
})

export const getSingleCampanaingError = (error) => ({
    type: types.GET_SINGLE_CAMPANING_ERROR,
    payload: error
})

export const createCampaningStart = (campaning) => ({
    type: types.CREATE_CAMPANING_START,
    payload: campaning
})

export const createCampaningSuccess = () => ({
    type: types.CREATE_CAMPANING_SUCCESS,
})

export const createCampaningError = (error) => ({
    type: types.CREATE_CAMPANING_ERROR,
    payload: error
})


export const deleteCampaningStart = (deleteCampaing) => ({
    type: types.DELETE_CAMPANING_START,
    payload: deleteCampaing
})

export const deleteCampaningSuccess = (deleteCampaning) => ({
    type: types.DELETE_CAMPANING_SUCCESS,
    payload: deleteCampaning
})

export const deleteCampaningError = (error) => ({
    type: types.DELETE_CAMPANING_ERROR,
    payload: error
})

export const updateCampaningStart = (updateCampaning) => ({
    type: types.UPDATE_CAMPANING_START,
    payload: updateCampaning,
})

export const updateCampaningSuccess = (updateCampaning) => ({
    type: types.UPDATE_CAMPANING_SUCCESS,
    payload: updateCampaning,
})

export const updateCampaningError = (error) => ({
    type: types.UPDATE_CAMPANING_ERROR,
    payload: error,
})