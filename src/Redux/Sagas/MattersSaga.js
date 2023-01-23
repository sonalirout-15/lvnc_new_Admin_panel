import * as types from '../ActionTypes/MattersActionTypes'
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
    createMettersApi,
    deleteMettersApi,
    getSingleMettersApi,
    loadMettersApi,
    updateMettersApi
} from '../APIs/MattersAPI';
import {
    createMettersError,
    createMettersSuccess,
    deleteMettersError,
    deleteMettersSuccess,
    getSingleMettersError,
    getSingleMettersSuccess,
    loadMettersError,
    loadMettersSuccess,
    updateMettersError,
    updateMettersSuccess
} from '../Actions/MattersActions';


const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 4000,
});

export function* onLoadMettersStartAsync() {
    try {
        const response = yield call(loadMettersApi);

        if (response.data.message === "Success") {
            yield put(loadMettersSuccess(response.data))
        }
    } catch (error) {
        yield put(loadMettersError(error.response))
    }
}

export function* onGetSingleMettersStartAsync({ payload }) {
    try {
        const response = yield call(getSingleMettersApi, payload);
        if (response.data.message === "Success") {
            yield put(getSingleMettersSuccess(response.data.metterData))
        }
    } catch (error) {
        yield put(getSingleMettersError(error.response))
    }
}

export function* onCreateMettersStartAsync({ payload }) {
    try {
        const response = yield call(createMettersApi, payload)
        if (response.data.message === "Success") {
            yield put(createMettersSuccess(response.data.data))
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
        yield put(createMettersError(error.response.data))
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
        } else if(error.response.data.errors.audio) {
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.audio,
            });
        } else {
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.message
            })
        }
    }
}

export function* onDeleteMettersStartAsync({ payload }) {
    try {
        const response = yield call(deleteMettersApi, payload)
        if (response.data.message === 200) {
            yield delay(500)
            yield put(deleteMettersSuccess(response.data))
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
        yield put(deleteMettersError(error.response.data))
    }
}

export function* onUpdateMettersStartAsync({ payload }) {
    try {
        const response = yield call(updateMettersApi, payload)
        if (response.data.message === "Success") {
            yield put(updateMettersSuccess(response.data.data))
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
        yield put(updateMettersError(error.response))
    }
}

export function* onLoadMetters() {
    yield takeEvery(types.LOAD_METTERS_START, onLoadMettersStartAsync)
}

export function* onGetSingleMetters() {
    yield takeEvery(types.GET_SINGLE_METTERS_START, onGetSingleMettersStartAsync)
}

export function* onCreateMetters() {
    yield takeLatest(types.CREATE_METTERS_START, onCreateMettersStartAsync)
}

export function* onDeleteMetters() {
    yield takeLatest(types.DELETE_METTERS_START, onDeleteMettersStartAsync)
}

export function* onUpdateMetters() {
    yield takeEvery(types.UPDATE_METTERS_START, onUpdateMettersStartAsync)
}


const mettersSagas = [
    fork(onLoadMetters),
    fork(onGetSingleMetters),
    fork(onCreateMetters),
    fork(onDeleteMetters),
    fork(onUpdateMetters)
]

export default function* mettersSaga() {
    yield all([...mettersSagas])
}