import * as types from '../ActionTypes/UserActionTypes';
    import {
        all,
        put,
        call,
        fork,
        takeEvery,
} from 'redux-saga/effects';
import { loadUserApi, loadUserContactListApi } from '../APIs/UserApi';
import { loadUserContactUsError, loadUserContactUsSuccess, loadUserError, loadUserSuccess } from '../Actions/UserAction';


export function* onLoadUserStartAsync() {
    try {
        const response = yield call(loadUserApi);
        if (response.data.message === "Success") {
            yield put(loadUserSuccess(response.data))
        }
    } catch (error) {
        yield put(loadUserError(error.response))
    }
}

export function* onLoadUserContactListStartAsync() {
    try {
        const response = yield call(loadUserContactListApi);
        if (response.data.status === 200) {
            yield put(loadUserContactUsSuccess(response.data.BannerData))
        }
    } catch (error) {
        yield put(loadUserContactUsError(error.response))
    }
}

export function* onLoadUser() {
    yield takeEvery(types.LOAD_USER_START, onLoadUserStartAsync)
}

export function* onLoadUserContactList() {
    yield takeEvery(types.LOAD_USER_CONTACTLIST_START, onLoadUserContactListStartAsync)
}


const userSagas = [
    fork(onLoadUser),
    fork(onLoadUserContactList)
]

export default function* userSaga() {
    yield all([...userSagas])
}