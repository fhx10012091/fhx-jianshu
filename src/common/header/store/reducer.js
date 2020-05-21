import * as actionTypes from './actionTypes'
import {fromJS} from 'immutable'
const defaultState = fromJS({
    focus: false,
    mouse: false,
    list: [],
    page: 1,
    totalPage: 0
})

export default (state = defaultState, action) => {
    if(action.type === actionTypes.SEARCH_FOCUS){
        return state.set('focus', true)
    }
    if(action.type === actionTypes.SEARCH_BLUR){
        return state.set('focus', false)
    }
    if(action.type === actionTypes.SEARCH_ENTER){
        return state.set('mouse', true)
    }
    if(action.type === actionTypes.SEARCH_LEAVE){
        return state.set('mouse', false)
    }
    if(action.type === actionTypes.PUT_LIST){
        return state.merge({
            'list': action.data,
            'totalPage': action.totalPage
        })
    }
    if(action.type === actionTypes.SEARCH_SWITCH){
        return state.set('page', action.page)
    }
    return state
}