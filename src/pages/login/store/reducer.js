import {fromJS} from 'immutable'
import * as actionTypes from './actionTypes'
const defaultState = fromJS({
    loginStatus: false
})

export default (state = defaultState, action) => {
    if(action.type === actionTypes.LOGIN_STATUS){
        return state.set('loginStatus', action.value)
    }
    if(action.type === actionTypes.LOGIN_EXIT){
        return state.set('loginStatus', false)
    }
    return state
}