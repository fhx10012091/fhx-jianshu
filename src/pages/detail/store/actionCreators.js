import * as actionTypes from './actionTypes'

export const getDetail = (id) => ({
    type: actionTypes.GET_CONTENT,
    id
})

export const putDetail = (data) => ({
    type: actionTypes.PUT_CONTENT,
    data
})