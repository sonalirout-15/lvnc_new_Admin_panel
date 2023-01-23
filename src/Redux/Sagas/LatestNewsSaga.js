import * as types from '../ActionTypes/LatestNewsActionTypes';
import {
    takeLatest,
    put,
    fork,
    call,
    all,
    takeEvery,
    delay
} from "redux-saga/effects";
import Swal from 'sweetalert2';
import { createLatestNewsApi, deleteLatestNewsApi, getSingleLatestNewsApi, loadLatestNewsApi, updateLatestNewsApi } from '../APIs/LatestNewsApi';
import { createLatestNewsError, createLatestNewsSuccess, deleteLatestNewsError, deleteLatestNewsSuccess, getSingleLatestNewsError, getSingleLatestNewsSuccess, loadLatestNewsError, loadLatestNewsSuccess, updateLatestNewsError, updateLatestNewsSuccess } from '../Actions/LatestNewsActions';
const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 4000,
});

export function* onLoadLatestNewsStartAsync() {
    try {
        const response = yield call(loadLatestNewsApi);
        if (response.data.status === 200) {
            yield put(loadLatestNewsSuccess(response.data.latestnewsData))
        }
    } catch (error) {
        yield put(loadLatestNewsError(error.response))
    }
}

export function* onGetSingleLatestNewsStartAsync({ payload }) {
    try {
        const response = yield call(getSingleLatestNewsApi, payload);
        if (response.data.message === "Success") {
            yield put(getSingleLatestNewsSuccess(response.data.latestnewsData))
        }
    } catch (error) {
        yield put(getSingleLatestNewsError(error.response))
    }
}

export function* onCreateLatestNewsStartAsync({ payload }) {
    try {
        const response = yield call(createLatestNewsApi, payload)
        if (response.data.message === "Success") {
            yield put(createLatestNewsSuccess(response.data.latestnewsData))
            Toast.fire({
                icon: "success",
                title: response.data.message
            })
        } else {
            Toast.fire({
                icon: "error",
                title: response.data.errors.message,
            });
        }
    } catch (error) {
        yield put(createLatestNewsError(error.response))
        if(error.response.data.errors.title) {
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.title,
            });
        } else if(error.response.data.errors.Description){
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.Description,
            });
        } else if(error.response.data.errors.image){
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.image,
            });
        } else if (error.response.data.errors.video) {
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.video,
            });
        } else if(error.response.data.errors.category_ref_id){
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.category_ref_id,
            });
        } else if(error.response.data.errors.Subcategory_ref_id){
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.Subcategory_ref_id,
            });
        } else {
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.message,
            });
        }
    }
}

export function* onDeleteLatestNewsStartAsync({ payload }) {
    try {
        const response = yield call(deleteLatestNewsApi, payload)
        if (response.data.message === "Success") {
            yield delay(500)
            yield put(deleteLatestNewsSuccess(response.data.data))
            Toast.fire({
                icon: "success",
                title: response.data.message
            })
        } else {
            Toast.fire({
                icon: "error",
                title: response.data.message
            })
        }
    } catch (error) {
        yield put(deleteLatestNewsError(error.response.data))
    }
}

export function* onUpdateLatestNewsStartAsync({ payload }) {
    try {
        const response = yield call(updateLatestNewsApi, payload)
        if (response.data.message === "Success") {
            yield put(updateLatestNewsSuccess(response.data.latestnewsData))
            Toast.fire({
                icon: "success",
                title: response.data.message
            })
        } else {
            Toast.fire({
                icon: "error",
                title: response.data.message
            })
        }
    } catch (error) {
        yield put(updateLatestNewsError(error.response.data))
        if(error.response.data.errors.title) {
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.title,
            });
        } else if(error.response.data.errors.Description){
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.Description,
            });
        } else if(error.response.data.errors.image){
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.image,
            });
        } else if (error.response.data.errors.video) {
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.video,
            });
        } else if(error.response.data.errors.category_ref_id){
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.category_ref_id,
            });
        } else if(error.response.data.errors.Subcategory_ref_id){
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.Subcategory_ref_id,
            });
        } else {
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.message,
            });
        }
    }
}

export function* onLoadLatestNews() {
    yield takeEvery(types.LOAD_LATEST_NEWS_START, onLoadLatestNewsStartAsync)
}

export function* onGetSingleLatestNews() {
    yield takeEvery(types.GET_SINGLE_LATEST_NEWS_START, onGetSingleLatestNewsStartAsync)
}

export function* onCreateLatestNews() {
    yield takeLatest(types.CREATE_LATEST_NEWS_START, onCreateLatestNewsStartAsync)
}

export function* onDeleteLatestNews() {
    yield takeLatest(types.DELETE_LATEST_NEWS_START, onDeleteLatestNewsStartAsync)
}

export function* onUpdateLatestNews() {
    yield takeLatest(types.UPDATE_LATEST_NEWS_START, onUpdateLatestNewsStartAsync)
}


const latestNewsSagas = [
    fork(onLoadLatestNews),
    fork(onGetSingleLatestNews),
    fork(onCreateLatestNews),
    fork(onDeleteLatestNews),
    fork(onUpdateLatestNews)
]

export default function* latestNewsSaga() {
    yield all([...latestNewsSagas])
}