import * as types from '../ActionTypes/AdminActionTypes'

export const adminLoginStart = (admin) => ({
    type: types.ADMIN_LOGIN_START,
    payload: admin,
});

export const adminLoginSuccess = (admin) => ({
    type: types.ADMIN_LOGIN_SUCCESS,
    payload: admin
});

export const adminLoginError = (error) => ({
    type: types.ADMIN_LOGIN_ERROR,
    payload: error,
});

export const adminChangePasswordStart = (adminChangePassword) => ({
    type: types.ADMIN_CHANGE_PASSWORD_START,
    payload: adminChangePassword
})
export const adminChangePasswordSuccess = () => ({
    type: types.ADMIN_CHANGE_PASSWORD_SUCCESS
})
export const adminChangePasswordError = (error) => ({
    type: types.ADMIN_CHANGE_PASSWORD_ERROR,
    payload: error
})

export const adminResetPasswordStart = (adminResetPassword) => ({
    type: types.ADMIN_RESET_PASSWORD_START,
    payload: adminResetPassword
})
export const adminResetPasswordSuccess = () => ({
    type: types.ADMIN_RESET_PASSWORD_SUCCESS
})
export const adminResetPasswordError = (error) => ({
    type: types.ADMIN_RESET_PASSWORD_ERROR,
    payload: error
})

export const adminForgotPasswordStart = (adminForgotPassword) => ({
    type: types.ADMIN_FORGOT_PASSWORD_START,
    payload: adminForgotPassword
})
export const adminForgotPasswordSuccess = () => ({
    type: types.ADMIN_FORGOT_PASSWORD_SUCCESS
})
export const adminForgotPasswordError = (error) => ({
    type: types.ADMIN_FORGOT_PASSWORD_ERROR,
    payload: error
})

export const adminLogoutStart = () => ({
    type: types.ADMIN_LOGOUT_START
});

export const adminLogoutSuccess = () => ({
    type: types.ADMIN_LOGOUT_SUCCESS,
});

export const adminLogoutError = () => ({
    type: types.ADMIN_LOGOUT_ERROR,
});

export const loadAdminStart = (admin) => ({
    type: types.LOAD_ADMIN_START,
    payload: admin
})

export const loadAdminSuccess = (admin) => ({
    type: types.LOAD_ADMIN_SUCCESS,
    payload: admin,
})

export const loadAdminError = (error) => ({
    type: types.LOAD_ADMIN_ERROR,
    payload: error
})

export const createAdminStart = (admin) => ({
    type: types.CREATE_ADMIN_START,
    payload: admin
})

export const createAdminSuccess = (admin) => ({
    type: types.CREATE_ADMIN_SUCCESS,
    payload: admin
})

export const createAdminError = (error) => ({
    type: types.CREATE_ADMIN_ERROR,
    payload: error
})

export const getSingleAdminStart = (adminData) => ({
    type: types.GET_SINGLE_ADMIN_START,
    payload: adminData
})

export const getSingleAdminSuccess = (adminData) => ({
    type: types.GET_SINGLE_ADMIN_SUCCESS,
    payload: adminData
})

export const getSingleAdminError = (error) => ({
    type: types.GET_SINGLE_ADMIN_ERROR,
    payload: error
})

// export const deleteAdminStart = (deleteAdmin) => ({
//     type: types.DELETE_ADMIN_START,
//     payload: deleteAdmin
// })

// export const deleteAdminSuccess = (deleteAdmin) => ({
//     type: types.DELETE_ADMIN_SUCCESS,
//     payload: deleteAdmin
// })

// export const deleteAdminError = (error) => ({
//     type: types.DELETE_ADMIN_ERROR,
//     payload: error
// })

export const updateAdminStart = (updateAdmin) => ({
    type: types.UPDATE_ADMIN_START,
    payload: updateAdmin
})

export const updateAdminSuccess = (updateAdmin) => ({
    type: types.UPDATE_ADMIN_SUCCESS,
    payload: updateAdmin
})

export const updateAdminError = (error) => ({
    type: types.UPDATE_ADMIN_ERROR,
    payload: error
})