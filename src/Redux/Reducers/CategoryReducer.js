import * as types from '../ActionTypes/CategoryActionTypes'

const initialState = {
    categories: [],
    category : [],
    categoryData: [],
    updateCategory: [],
    Subcategories: [],
    loading: false,
    error: null
}


const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOAD_CATEGORY_START:
        case types.GET_SINGLE_CATEGORY_START:
        case types.CREATE_CATEGORY_START:
        case types.DELETE_CATEGORY_START:
        case types.UPDATE_CATEGORY_START:
            return {
                ...state,
                loading: true
            }
        case types.LOAD_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                categories: action.payload
            }
        case types.GET_SINGLE_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                categoryData: action.payload
            }
        case types.CREATE_CATEGORY_SUCCESS:
            return{
                ...state,
                loading: false,
                category: action.payload
            }
        case types.UPDATE_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: false,
                updateCategory: action.payload
            }
        case types.DELETE_CATEGORY_SUCCESS:
            return {
                ...state,
                loading: true,
            }
        case types.LOAD_CATEGORY_ERROR:
        case types.GET_SINGLE_CATEGORY_ERROR:
        case types.CREATE_CATEGORY_ERROR:
        case types.DELETE_CATEGORY_ERROR:
        case types.UPDATE_CATEGORY_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload

            }
        default:
            return state;
    }
}

export default categoryReducer;