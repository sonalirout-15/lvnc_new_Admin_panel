import * as types from '../ActionTypes/PostActionTypes';

export const loadPostStart = () => ({
    type: types.LOAD_POST_START,
})

export const loadPostSuccess = (post) => ({
    type: types.LOAD_POST_SUCCESS,
    payload: post,
})

export const loadPostError = (error) => ({
    type: types.LOAD_POST_ERROR,
    payload: error
})


export const getSinglePostStart = (postData) => ({
    type: types.GET_SINGLE_POST_START,
    payload: postData
})

export const getSinglePostSuccess = (postData) => ({
    type: types.GET_SINGLE_POST_SUCCESS,
    payload: postData
})

export const getSinglePostError = (error) => ({
    type: types.GET_SINGLE_POST_ERROR,
    payload: error
})

export const createPostStart = (post) => ({
    type: types.CREATE_POST_START,
    payload: post
})

export const createPostSuccess = () => ({
    type: types.CREATE_POST_SUCCESS,
})

export const createPostError = (error) => ({
    type: types.CREATE_POST_ERROR,
    payload: error
})

export const deletePostStart = (deletePost) => ({
    type: types.DELETE_POST_START,
    payload: deletePost
})

export const deletePostSuccess = (deletePost) => ({
    type: types.DELETE_POST_SUCCESS,
    payload: deletePost
})

export const deletePostError = (error) => ({
    type: types.DELETE_POST_ERROR,
    payload: error
})

export const updatePostStart = (updatePost) => ({
    type: types.UPDATE_POST_START,
    payload: updatePost
})

export const updatePostSuccess = (updatePost) => ({
    type: types.UPDATE_POST_SUCCESS,
    payload: updatePost
})

export const updatePostError = (error) => ({
    type: types.UPDATE_POST_ERROR,
    payload: error
})