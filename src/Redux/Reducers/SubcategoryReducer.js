import * as types from '../ActionTypes/SubcategoryActionTypes'

const initialState = {
    subcategories: [],
    subCateData: [],
    subcategories: [],
    categoryData: [],
    catgories: [],
    cateData: [],
    updateSubcategory:[],
    loading: false,
    error: null
}


const subcategoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_SUBCATEGORY_START:
        case types.CREATE_SUBCATEGORY_START:
        case types.GET_SINGLE_SUBCATEGORY_START:
        case types.DELETE_SUBCATEGORY_START:
        case types.UPDATE_SUBCATEGORY_START:
            return {
                ...state,
                loading: true
            }
        case types.LOAD_SUBCATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                subcategories: action.payload
            }
        case types.GET_SINGLE_SUBCATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                cateData: action.payload
            }
        case types.CREATE_SUBCATEGORY_SUCCESS:
        case types.UPDATE_SUBCATEGORY_SUCCESS:
        case types.DELETE_SUBCATEGORY_SUCCESS:
            return {
                ...state,
                loading: true,
            }
        case types.LOAD_SUBCATEGORY_ERROR:
        case types.CREATE_SUBCATEGORY_ERROR:
        case types.GET_SINGLE_SUBCATEGORY_ERROR:
        case types.DELETE_SUBCATEGORY_ERROR:
        case types.UPDATE_SUBCATEGORY_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload

            }
        default:
            return state;
    }
}

export default subcategoryReducer;