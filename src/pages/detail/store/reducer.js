import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable'

const defaultState = fromJS({
    title: '',
    content: ''
})

export default (state = defaultState, action) => {
    if(action.type === actionTypes.PUT_CONTENT){
        return state.set('content', action.data.content).set('title', action.data.title)
    }
    return state
}