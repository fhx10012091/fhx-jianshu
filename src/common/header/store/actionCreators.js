import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable'

export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
})

export const searchList = () => ({
    type: actionTypes.SEARCH_LIST
})

export const searchEnter = () => ({
    type: actionTypes.SEARCH_ENTER
})

export const searchLeave = () => ({
    type: actionTypes.SEARCH_LEAVE
})

export const putList = (data) => ({
    type: actionTypes.PUT_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length/10)
})
export const searchSwitch = (page) => ({
    type: actionTypes.SEARCH_SWITCH,
    page
})

