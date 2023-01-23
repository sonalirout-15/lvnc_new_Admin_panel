import * as types from '../ActionTypes/SubcategoryActionTypes';

export const loadSubcategoryStart = () => ({
    type: types.LOAD_SUBCATEGORY_START,
})

export const loadSubcategorySuccess = (subcategories) => ({
    type: types.LOAD_SUBCATEGORY_SUCCESS,
    payload: subcategories
})

export const loadSubcategoryError = (error) => ({
    type: types.LOAD_SUBCATEGORY_ERROR,
    payload: error
})

export const getSingleSubcategoryStart = (cateData) => ({
    type: types.GET_SINGLE_SUBCATEGORY_START,
    payload: cateData
})

export const getSingleSubcategorySuccess = (cateData) => ({
    type: types.GET_SINGLE_SUBCATEGORY_SUCCESS,
    payload: cateData
})

export const getSingleSubcategoryError = (error) => ({
    type: types.GET_SINGLE_SUBCATEGORY_ERROR,
    payload: error
})

export const createSubcategoryStart = (subcategory) => ({
    type: types.CREATE_SUBCATEGORY_START,
    payload: subcategory
})

export const createSubcategorySuccess = () => ({
    type: types.CREATE_SUBCATEGORY_SUCCESS,
})

export const createSubcategoryError = (error) => ({
    type: types.CREATE_SUBCATEGORY_START,
    payload: error
})

export const deleteSubcategoryStart = (deleteSubcategory) => ({
    type: types.DELETE_SUBCATEGORY_START,
    payload: deleteSubcategory
})

export const deleteSubcategorySuccess = (deleteSubcategory) => ({
    type: types.DELETE_SUBCATEGORY_SUCCESS,
    payload: deleteSubcategory
})

export const deleteSubcategoryError = (error) => ({
    type: types.DELETE_SUBCATEGORY_ERROR,
    payload: error
})

export const updateSubcategoryStart = (updateSubcategory) => ({
    type: types.UPDATE_SUBCATEGORY_START,
    payload: updateSubcategory
})

export const updateSubcategorySuccess = (updateSubcategory) => ({
    type: types.UPDATE_SUBCATEGORY_SUCCESS,
    payload: updateSubcategory
})

export const updateSubcategoryError = (error) => ({
    type: types.UPDATE_SUBCATEGORY_ERROR,
    payload: error
})