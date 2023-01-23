import * as types from '../ActionTypes/BannerImageActionTypes';
import {
    put,
    fork,
    call,
    all,
    takeEvery,
    delay,
    takeLatest
} from "redux-saga/effects";
import Swal from 'sweetalert2';
import { createBannerImageApi, deleteBannerImageApi, getSingleBannerImageApi, loadBannerImageApi, updateBannerApi, updateBannerImageApi } from '../APIs/BannerImageApi';
import { createBannerImageError, createBannerImageSuccess, deleteBannerImageError, deleteBannerImageSuccess, getSingleBannerImageError, getSingleBannerImageSuccess, loadBannerImageError, loadBannerImageSuccess, updateBannerError, updateBannerImageError, updateBannerImageSuccess } from '../Actions/BannerImageAction';
const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 4000,
});


export function* onLoadBannerImageStartAsync() {
    try {
        const response = yield call(loadBannerImageApi);
        if (response.data.message === "Success") {
            yield put(loadBannerImageSuccess(response.data.BannerData))
        }
    } catch (error) {
        yield put(loadBannerImageError(error.response))
    }
}

export function* onGetSingleBannerImageStartAsync({ payload }) {
    try {
        const response = yield call(getSingleBannerImageApi, payload);
        if (response.data.message === "Success") {
            yield put(getSingleBannerImageSuccess(response.data))
        }
    } catch (error) {
        yield put(getSingleBannerImageError(error.response))
    }
}

export function* onCreateBannerImageStartAsync({ payload }) {
    try {
        const response = yield call(createBannerImageApi, payload)
        if (response.data.message === 'banner created successfully') {
            yield put(createBannerImageSuccess(response.data.bannerPayload))
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
        yield put(createBannerImageError(error.response))
    }
}

export function* onDeleteBannerImageStartAsync({ payload }) {
    try {
        const response = yield call(deleteBannerImageApi, payload)
        if (response.data.message === "Success") {
            yield delay(500)
            yield put(deleteBannerImageSuccess(response.data))
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
        yield put(deleteBannerImageError(error.response))
        if(error.response.data.errors.imageName) {
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.imageName,
            });
        } else if(error.response.data.errors.image){
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.image,
            });
        } else {
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.message,
            });
        }
    }
}

export function* onUpdateBannerImageStartAsync({ payload }) {
    try {
        const response = yield call(updateBannerImageApi, payload)
        if (response.data.message === "Success") {
            yield put(updateBannerImageSuccess(response.data))
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
        yield put(updateBannerImageError(error.response))
        if(error.response.data.errors.imageName) {
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.imageName,
            });
        } else if(error.response.data.errors.image){
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.image,
            });
        } else {
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.message,
            });
        }
    }
}

export function* onLoadBannerImage() {
    yield takeEvery(types.LOAD_BANNER_IMAGE_START, onLoadBannerImageStartAsync)
}

export function* onGetSingleBannerImage() {
    yield takeEvery(types.GET_SINGLE_BANNER_IMAGE_START, onGetSingleBannerImageStartAsync)
}

export function* onCreateBannerImage() {
    yield takeLatest(types.CREATE_BANNER_IMAGE_START, onCreateBannerImageStartAsync)
}

export function* onDeleteBannerImage() {
    yield takeLatest(types.DELETE_BANNER_IMAGE_START, onDeleteBannerImageStartAsync)
}

export function* onUpdateBannerImage() {
    yield takeLatest(types.UPDATE_BANNER_IMAGE_START, onUpdateBannerImageStartAsync)
}


const bannerImageSagas = [
    fork(onLoadBannerImage),
    fork(onGetSingleBannerImage),
    fork(onCreateBannerImage),
    fork(onDeleteBannerImage),
    fork(onUpdateBannerImage)
]

export default function* bannerImageSaga() {
    yield all([...bannerImageSagas])
}