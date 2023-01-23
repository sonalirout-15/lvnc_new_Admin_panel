import * as types from '../ActionTypes/CampaignActionTypes';
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
import {
    createCampaningApi,
    deleteCampaningApi,
    getSingleCampaningApi,
    loadCampaningApi,
    updateCampaningApi
} from '../APIs/CampaignAPI';
import {
    createCampaningError,
    createCampaningSuccess,
    deleteCampaningError,
    deleteCampaningSuccess,
    getSingleCampanaingError,
    getSingleCampaningSuccess,
    loadCampaningError,
    loadCampaningSuccess,
    updateCampaningError,
    updateCampaningSuccess
} from '../Actions/CampaignActions';

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 4000,
});


export function* onLoadCampaningStartAsync() {
    try {
        const response = yield call(loadCampaningApi);
        if (response.data.message === "Success") {
            yield put(loadCampaningSuccess(response.data))
        }
    } catch (error) {
        yield put(loadCampaningError(error.response))
    }
}

export function* onGetSingleCampaningStartAsync({ payload }) {
    try {
        const response = yield call(getSingleCampaningApi, payload);
        if (response.data.message === "Success") {
            yield put(getSingleCampaningSuccess(response.data.CampaningData))
        }
    } catch (error) {
        yield put(getSingleCampanaingError(error.response))
    }
}

export function* onCreateCampaningStartAsync({ payload }) {
    try {
        const response = yield call(createCampaningApi, payload)
        if (response.data.message === "Success") {
            yield put(createCampaningSuccess(response.data.data))
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
        yield put(createCampaningError(error.response.data))
        if(error.response.data.errors.title) {
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.title,
            });
        } else if(error.response.data.errors.description){
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.description,
            });
        } else if(error.response.data.errors.image) {
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.image,
            });
        } else if(error.response.data.errors.audio){
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.audio,
            });
        } else if(error.response.data.errors.video){
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.video,
            });
        } else {
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.message,
            });
        }
    }
}

export function* onDeleteCampaningStartAsync({ payload }) {
    try {
        const response = yield call(deleteCampaningApi, payload)
        if (response.data.message === "Success") {
            yield delay(500)
            yield put(deleteCampaningSuccess(response.data.data))
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
        yield put(deleteCampaningError(error.response.data))
    }
}

export function* onUpdateCampaningStartAsync({ payload }) {
    try {
        const response = yield call(updateCampaningApi, payload)
        if (response.data.message === "Success") {
            yield put(updateCampaningSuccess(response.data))
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
        yield put(updateCampaningError(error.response))
        if(error.response.data.errors.title) {
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.title,
            });
        } else if(error.response.data.errors.description){
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.description,
            });
        } else if(error.response.data.errors.image) {
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.image,
            });
        } else if(error.response.data.errors.audio){
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.audio,
            });
        } else if(error.response.data.errors.video){
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.video,
            });
        } else {
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.message,
            });
        }
    }
}

export function* onLoadCampaning() {
    yield takeEvery(types.LOAD_CAMPANING_START, onLoadCampaningStartAsync)
}

export function* onGetSingleCampaning() {
    yield takeEvery(types.GET_SINGLE_CAMPANING_START, onGetSingleCampaningStartAsync)
}

export function* onCreateCampaning() {
    yield takeLatest(types.CREATE_CAMPANING_START, onCreateCampaningStartAsync)
}

export function* onDeleteCampaning() {
    yield takeLatest(types.DELETE_CAMPANING_START, onDeleteCampaningStartAsync)
}

export function* onUpdateCampaning() {
    yield takeLatest(types.UPDATE_CAMPANING_START, onUpdateCampaningStartAsync)
}


const campaningSagas = [
    fork(onLoadCampaning),
    fork(onGetSingleCampaning),
    fork(onCreateCampaning),
    fork(onDeleteCampaning),
    fork(onUpdateCampaning)
]

export default function* campaningSaga() {
    yield all([...campaningSagas])
}