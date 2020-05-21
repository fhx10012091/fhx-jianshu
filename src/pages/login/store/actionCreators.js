import * as actionTypes from './actionTypes'

export const login = (username, password) => ({
    type: actionTypes.LOGIN,
    username,
    password
})

export const loginStatus = (value) => ({
    type: actionTypes.LOGIN_STATUS,
    value
})

export const loginExit = () => ({
    type: actionTypes.LOGIN_EXIT
})