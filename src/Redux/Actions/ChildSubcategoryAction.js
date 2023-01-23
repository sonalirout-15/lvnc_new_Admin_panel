import * as types from '../ActionTypes/ChildSubcategoryActionType';

export const loadChildSubcategoryStart = (childSubcatgeory) => ({
    type: types.LOAD_CHILD_SUBCATEGORY_START,
    payload: childSubcatgeory
})

export const loadChildSubcategorySuccess = (childSubcatgeory) => ({
    type: types.LOAD_CHILD_SUBCATEGORY_SUCCESS,
    payload: childSubcatgeory,
})

export const loadChildSubcategoryError = (error) => ({
    type: types.LOAD_CHILD_SUBCATEGORY_ERROR,
    payload: error
})


export const getSingleChildSubcategoryStart = (childSubcategoryData) => ({
    type: types.GET_SINGLE_CHILD_SUBCATEGORY_START,
    payload: childSubcategoryData
})

export const getSingleChildSubcategorySuccess = (childSubcategoryData) => ({
    type: types.GET_SINGLE_CHILD_SUBCATEGORY_SUCCESS,
    payload: childSubcategoryData
})

export const getSingleChildSubcategoryError = (error) => ({
    type: types.GET_SINGLE_CHILD_SUBCATEGORY_ERROR,
    payload: error
})

export const createChildSubcategoryStart = (childSubcatgeory) => ({
    type: types.CREATE_CHILD_SUBCATEGORY_START,
    payload: childSubcatgeory
})

export const createChildSubcategorySuccess = () => ({
    type: types.CREATE_CHILD_SUBCATEGORY_SUCCESS,
})

export const createChildSubcategoryError = (error) => ({
    type: types.CREATE_CHILD_SUBCATEGORY_ERROR,
    payload: error
})

export const deleteChildSubcategoryStart = (deleteChildSubcategory) => ({
    type: types.DELETE_CHILD_SUBCATEGORY_START,
    payload: deleteChildSubcategory
})

export const deleteChildSubcategorySuccess = (deleteChildSubcategory) => ({
    type: types.DELETE_CHILD_SUBCATEGORY_SUCCESS,
    payload: deleteChildSubcategory
})

export const deleteChildSubcategoryError = (error) => ({
    type: types.DELETE_CHILD_SUBCATEGORY_ERROR,
    payload: error
})

export const updateChildSubcategoryStart = (updateChildSubcategory) => ({
    type: types.UPDATE_CHILD_SUBCATEGORY_START,
    payload: updateChildSubcategory,
})

export const updateChildSubcategorySuccess = (updateChildSubcategory) => ({
    type: types.UPDATE_CHILD_SUBCATEGORY_SUCCESS,
    payload: updateChildSubcategory,
})

export const updateChildSubcategoryError = (error) => ({
    type: types.UPDATE_CHILD_SUBCATEGORY_ERROR,
    payload: error,
})