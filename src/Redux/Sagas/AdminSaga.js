import * as types from '../ActionTypes/AdminActionTypes';
    import {
        all,
        put,
        call,
        fork,
        takeEvery,
        takeLatest,
        delay
    } from 'redux-saga/effects';
import Swal from 'sweetalert2';
import {
    adminChangePasswordApi,
    adminForgotPasswordApi,
    adminLoginApi,
    adminResetPasswordApi,
    createAdminApi,
    deleteAdminApi,
    getSingleAdminApi,
    loadAdminApi,
    updateAdminApi
} from '../APIs/AdminAPI';
import {
    adminChangePasswordError,
    adminChangePasswordSuccess,
    adminForgotPasswordError,
    adminForgotPasswordSuccess,
    adminLoginError,
    adminLoginSuccess,
    adminLogoutError,
    adminLogoutStart,
    adminLogoutSuccess,
    adminResetPasswordError,
    adminResetPasswordSuccess,
    createAdminError,
    createAdminSuccess,
    deleteAdminError,
    deleteAdminSuccess,
    getSingleAdminError,
    getSingleAdminSuccess,
    loadAdminError,
    loadAdminSuccess,
    updateAdminError,
    updateAdminSuccess
} from '../Actions/AdminActions';

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 4000,
})

export function* onAdminLoginStartAsync({ payload }) {
    try {
    const response = yield call(adminLoginApi, payload) 
    if (response.data.status === 200) {
        localStorage.setItem("ADMIN", JSON.stringify(response.data.data.token));
        localStorage.setItem('ADMINEMAIL',  response.data.userEmail)
        yield put(adminLoginSuccess(response.data));
        Toast.fire({
            icon: "success",
            title: response.data.message,
        });
    } else {
        Toast.fire({
            icon: 'error',
            title: response.data.message
        })
    
    }
} catch (error) {
    yield put(adminLoginError(error.response));
            Toast.fire({
                icon: 'error',
                title: 'Invalid Email or Password'
            })
        
    }
}

export function* onAdminChangePasswordStartAsync({ payload }) {
    try {
        const response = yield call(adminChangePasswordApi, payload);
        if (response.data.status === 200) {
            yield put(adminChangePasswordSuccess(response.data))
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
        yield put(adminChangePasswordError(error.response))
    }
}

export function* onAdminResetPasswordStartAsync({ payload }) {
    try {
        const response = yield call(adminResetPasswordApi, payload);
        if (response.data.status === 200) {
            localStorage.setItem("ADMIN", JSON.parse(JSON.stringify(response.data.data.token)))
            yield put(adminResetPasswordSuccess(response.data))
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
        yield put(adminResetPasswordError(error.response))
        Toast.fire({
            icon: "error",
            title: error.response.data.message,
        });
    }
}

export function* onAdminForgotPasswordStartAsync({ payload }) {
    try {
        const response = yield call(adminForgotPasswordApi, payload);
        if (response.data.status === 200) {
            yield put(adminForgotPasswordSuccess(response.data))
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
        yield put(adminForgotPasswordError(error.response))
        Toast.fire({
            icon: "error",
            title: error.response.data.message,
        });
    }
}

export function* onAdminLogoutStartAsync() {
    try {
        localStorage.removeItem("ADMIN")
        const response = yield call(adminLogoutStart)
        if (response.data.status === 200) {
            yield put(adminLogoutSuccess(response.data))
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
        yield put(adminLogoutError(error.response))
    }
}

export function* onLoadAdminStartAsync() {
    try {
        const response = yield call(loadAdminApi);
        if (response.data.message === "Success") {
            yield put(loadAdminSuccess(response.data.data))
        }
    } catch (error) {
        yield put(loadAdminError(error.response))
    }
}

export function* onCreateAdminStartAsync({ payload }) {
    try {
        const response = yield call(createAdminApi, payload)
        if (response.data.message === "Success") {
            yield put(createAdminSuccess(response.data))
            Toast.fire({
                icon: "success",
                title: response.data.message,
            })
        } else {
            Toast.fire({
                icon: "error",
                title:response.data.message,
            });
        }


    } catch (error) {
        yield put(createAdminError(error.response));
        if(error.response.data.errors.name) {
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.name,
            });
        } else if (error.response.data.errors.email) {
            console.log(error.response)
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.email,
            });
        } else if(error.response.data.errors.password) {
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.password,
            });
        } else if(error.response.data.errors.confirm_password) {
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.confirm_password,
            });
        } else if(error.response.data.errors.mobile) {
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.mobile,
            });
        } else if(error.response.data.errors.gender) {
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.gender,
            });
        } else if(error.response.data.errors.address){
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.address,
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

export function* onGetSingleAdminStartAsync({ payload }) {
    try {
        const response = yield call(getSingleAdminApi, payload);
        if (response.data.status === 200) {
            yield put(getSingleAdminSuccess(response.data.data))
        }
    } catch (error) {
        yield put(getSingleAdminError(error.response))
    }
}
export function* onUpdateAdminStartAsync({ payload }) {
    try {
        const response = yield call(updateAdminApi, payload)
        if (response.data.status === 200) {
            console.log('RESPONSE~~~~~~~~~~~~~>>>', response.data)
            yield put(updateAdminSuccess(response.data))
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
        yield put(updateAdminError(error.response))
        if(error.response.data.errors.name) {
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.name,
            });
        } else if(error.response.data.errors.mobile) {
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.mobile,
            });
        } else if(error.response.data.errors.gender) {
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.gender,
            });
        }  else if(error.response.data.errors.address){
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.address,
            });
        } else if(error.response.data.errors.image){
            Toast.fire({
                icon: "error",
                title: error.response.data.errors.image,
            });
        }
    }
}

// export function* onDeleteAdminStartAsync({ payload }) {
//     try {
//         const response = yield call(deleteAdminApi, payload)
//         if (response.data.message === "Success") {
//             yield delay(500)    
//             yield put(deleteAdminSuccess(response.data))
//             Toast.fire({
//                 icon: "success",
//                 title: response.data.message,
//             });
//         } else {
//             Toast.fire({
//                 icon: "error",
//                 title: response.data.message,
//             });
//         }
//     } catch (error) {
//         yield put(deleteAdminError(error.response))
//     }
// }

export function* onAdminLogin() {
    yield takeLatest(types.ADMIN_LOGIN_START, onAdminLoginStartAsync)
}

export function* onAdminChangePassword() {
    yield takeLatest(types.ADMIN_CHANGE_PASSWORD_START, onAdminChangePasswordStartAsync);
}

export function* onAdminResetPassword() {
    yield takeLatest(types.ADMIN_RESET_PASSWORD_START, onAdminResetPasswordStartAsync);
}

export function* onAdminForgotPassword() {
    yield takeLatest(types.ADMIN_FORGOT_PASSWORD_START, onAdminForgotPasswordStartAsync);
}

export function* onAdminLogout() {
    yield takeLatest(types.ADMIN_LOGOUT_START, onAdminLogoutStartAsync);
}

export function* onLoadAdmin() {
    yield takeEvery(types.LOAD_ADMIN_START, onLoadAdminStartAsync)
}

export function* onCreateAdmin() {
    yield takeLatest(types.CREATE_ADMIN_START, onCreateAdminStartAsync)
}

export function* onGetSingleAdmin() {
    yield takeEvery(types.GET_SINGLE_ADMIN_START, onGetSingleAdminStartAsync)
}

// export function* onDeleteAdmin() {
//     yield takeLatest(types.DELETE_ADMIN_START, onDeleteAdminStartAsync)
// }

export function* onUpdateAdmin() {
    yield takeEvery(types.UPDATE_ADMIN_START, onUpdateAdminStartAsync)
}

const adminSagas = [
    fork(onAdminLogin),
    fork(onAdminChangePassword),
    fork(onAdminResetPassword),
    fork(onAdminForgotPassword),
    fork(onAdminLogout),
    fork(onLoadAdmin),
    fork(onCreateAdmin),
    fork(onGetSingleAdmin),
    // fork(onDeleteAdmin),
    fork(onUpdateAdmin)
]

export default function* adminSaga() {
    yield all([...adminSagas])
}