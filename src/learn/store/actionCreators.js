import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM, INIT_DATA, GET_TODO } from './actionTypes'
export const getInputChangeValue = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddItem = () => ({
    type: ADD_ITEM
})

export const getDeleteItem = (index) => ({
    type: DELETE_ITEM,
    index
}) 

export const getInitData = (data) => ({
    type: INIT_DATA,
    data
})

export const getTodoList = () => ({
    type: GET_TODO
})