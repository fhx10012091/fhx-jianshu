import {fromJS} from 'immutable'
import * as actionTypes from './actionTypes'
const defaultState = fromJS({
    imgs: [],
    topicList: [],
    list: [],
    recommend: [],
    articlePage: 1,
    showBack: false
})

const changeHome = (state, data) => {
    return state.merge({
        topicList: fromJS(data.topicList),
        list: fromJS(data.articleList),
        recommend: fromJS(data.recommendList)
    })
}
const getMore = (state, data, page) => {
    return state.merge({
        list: state.get('list').concat(data),
        page
    })
}

export default (state = defaultState, action) => {
    if(action.type === actionTypes.PUT_LUNBO){
        return state.set('imgs', action.data)
    }
    if(action.type === actionTypes.PUT_HOME){
        return changeHome(state, action.data)
    }
    if(action.type === actionTypes.PUT_MORE){
        return getMore(state, action.data, action.page)
    }
    if(action.type === actionTypes.BACK_SHOW){
        return state.set('showBack', action.bool)
    }
    return state
}
