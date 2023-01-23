import * as types from '../ActionTypes/ChildSubcategoryActionType';
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
import { createChildSubcategoryApi, deleteChildSubcategoryApi, getSingleChildSubcategoryApi, loadChildSubcategoryApi, updateChildSubcategoryApi } from '../APIs/ChildSubcategoryApi';
import { createChildSubcategoryError, createChildSubcategorySuccess, deleteChildSubcategoryError, deleteChildSubcategorySuccess, getSingleChildSubcategoryError, getSingleChildSubcategorySuccess, loadChildSubcategoryError, loadChildSubcategorySuccess, updateChildSubcategoryError, updateChildSubcategorySuccess } from '../Actions/ChildSubcategoryAction';


const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 4000,
});

export function* onLoadChildSubcategoryStartAsync() {
    try {
        const response = yield call(loadChildSubcategoryApi);
        if (response.data.message === "Success") {
            // console.log('RESPONSE~~~~~~~~~~~????>>>>', response.data.categoryData);
            yield put(loadChildSubcategorySuccess(response.data.categoryData))
        }
    } catch (error) {
        yield put(loadChildSubcategoryError(error.response))
    }
}

export function* onGetSingleChildSubcategoryStartAsync({ payload }) {
    try {
        const response = yield call(getSingleChildSubcategoryApi, payload);
        if (response.data.message === "Success") {
            // console.log('RESPONSE~~~~~~~~~~~~>>', response.data.categoryData)
            yield put(getSingleChildSubcategorySuccess(response.data.categoryData))
        }
    } catch (error) {
        yield put(getSingleChildSubcategoryError(error.response))
    }
}
export function* onCreateChildSubcategoryStartAsync({ payload }) {
    try {
        const response = yield call(createChildSubcategoryApi, payload)
        if (response.data.status === 200) {
            yield put(createChildSubcategorySuccess(response.data.subCateData))
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
        yield put(createChildSubcategoryError(error.response))
        if(error.response.data.errors.Description) {
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.Description,
            });
        } else if(error.response.data.errors.title){
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.title,
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

export function* onDeleteChildSubcategoryStartAsync({ payload }) {
    try {
        const response = yield call(deleteChildSubcategoryApi, payload)
        if (response.data.message === "Success") {
            yield delay(500)
            yield put(deleteChildSubcategorySuccess(response.data))
            Toast.fire({
                icon: "success",
                title: response.data.message,
            });
        } else {
            Toast.fire({
                icon: "error",
                title: response.data.message,
            });
        }
    } catch (error) {
        yield put(deleteChildSubcategoryError(error.response.data))
    }
}

export function* onUpdateChildSubcategoryStartAsync({ payload }) {
    try {
        const response = yield call(updateChildSubcategoryApi, payload)
        if (response.data.message === 'Success') {
            yield put(updateChildSubcategorySuccess(response.data.cateData))
            Toast.fire({
                icon: "success",
                title: response.data.message,
            });
        } else {
            Toast.fire({
                icon: "error",
                title: response.data.message,
            });
        }
    } catch (error) {
        yield put(updateChildSubcategoryError(error.response.data))
        if(error.response.data.errors.Description) {
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.Description,
            });
        } else if(error.response.data.errors.title){
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.title,
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

export function* onLoadChildSubcategory() {
    yield takeEvery(types.LOAD_CHILD_SUBCATEGORY_START, onLoadChildSubcategoryStartAsync)
}

export function* onCreateChildSubcategory() {
    yield takeLatest(types.CREATE_CHILD_SUBCATEGORY_START, onCreateChildSubcategoryStartAsync)
}

export function* onGetSingleChildSubcategory() {
    yield takeLatest(types.GET_SINGLE_CHILD_SUBCATEGORY_START, onGetSingleChildSubcategoryStartAsync)
}

export function* onDeleteChildSubcategory() {
    yield takeLatest(types.DELETE_CHILD_SUBCATEGORY_START, onDeleteChildSubcategoryStartAsync)
}

export function* onUpdateChildSubcategory() {
    yield takeEvery(types.UPDATE_CHILD_SUBCATEGORY_START, onUpdateChildSubcategoryStartAsync)
}


const childSubcategoriesSagas = [
    fork(onLoadChildSubcategory),
    fork(onGetSingleChildSubcategory),
    fork(onCreateChildSubcategory),
    fork(onDeleteChildSubcategory),
    fork(onUpdateChildSubcategory)
]

export default function* childSubcategorySaga() {
    yield all([...childSubcategoriesSagas])
}