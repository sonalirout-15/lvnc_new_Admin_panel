import * as types from '../ActionTypes/CategoryActionTypes';

export const loadCategoryStart = (categories) => ({
    type: types.LOAD_CATEGORY_START,
    payload: categories
})

export const loadCategorySuccess = (categories) => ({
    type: types.LOAD_CATEGORY_SUCCESS,
    payload: categories,
})

export const loadCategoryError = (error) => ({
    type: types.LOAD_CATEGORY_ERROR,
    payload: error
})


export const getSingleCategoryStart = (categoryData) => ({
    type: types.GET_SINGLE_CATEGORY_START,
    payload: categoryData
})

export const getSingleCategorySuccess = (categoryData) => ({
    type: types.GET_SINGLE_CATEGORY_SUCCESS,
    payload: categoryData
})

export const getSingleCategoryError = (error) => ({
    type: types.GET_SINGLE_CATEGORY_ERROR,
    payload: error
})

export const createCategoryStart = (category) => ({
    type: types.CREATE_CATEGORY_START,
    payload: category
})

export const createCategorySuccess = (category) => ({
    type: types.CREATE_CATEGORY_SUCCESS,
    payload: category
})

export const createCategoryError = (error) => ({
    type: types.CREATE_CATEGORY_ERROR,
    payload: error
})

export const deleteCategoryStart = (deleteCategory) => ({
    type: types.DELETE_CATEGORY_START,
    payload: deleteCategory
})

export const deleteCategorySuccess = (deleteCategory) => ({
    type: types.DELETE_CATEGORY_SUCCESS,
    payload: deleteCategory
})

export const deleteCategoryError = (error) => ({
    type: types.DELETE_CATEGORY_ERROR,
    payload: error
})

export const updateCategoryStart = (updateCategory) => ({
    type: types.UPDATE_CATEGORY_START,
    payload: updateCategory,
})

export const updateCategorySuccess = (updateCategory) => ({
    type: types.UPDATE_CATEGORY_SUCCESS,
    payload: updateCategory,
})

export const updateCategoryError = (error) => ({
    type: types.UPDATE_CATEGORY_ERROR,
    payload: error,
})