import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable'

export const getLunbo = () => ({
    type: actionTypes.GET_LUNBO
})

export const putLunbo = (data) => ({
    type: actionTypes.PUT_LUNBO,
    data: fromJS(data)
})

export const getHome = () => ({
    type: actionTypes.GET_HOME
})

export const putHome = (data) => ({
    type: actionTypes.PUT_HOME,
    data
})

export const getMore = (page) => ({
    type: actionTypes.GET_MORE,
    page
})

export const putMore = (data, page) => ({
    type: actionTypes.PUT_MORE,
    data,
    page
})

export const setBackShow = (bool) => ({
    type: actionTypes.BACK_SHOW,
    bool
})