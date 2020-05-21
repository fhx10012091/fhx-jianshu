import {takeEvery, put} from 'redux-saga/effects'
import axios from 'axios'
import {actionCreators, actionTypes} from '../common/header/store'
import {actionCreators as homeActionCreators, actionTypes as homeActionTypes} from '../pages/home/store' 
import {actionCreators as detailActionCreators, actionTypes as detailActionTypes} from '../pages/detail/store'
import {actionCreators as loginActionCreators, actionTypes as loginActionTypes} from '../pages/login/store'

function* getSearchList(){
    let res = yield axios.get('/api/headerList.json')
    let data = res.data
    if(data.success){
        const action = actionCreators.putList(data.data)
        yield put(action)
    }
}
function* getLunBo() {
    let res = yield axios.get('/api/lunbo.json')
    let data = res.data
    if(data.success){
        const action = homeActionCreators.putLunbo(data.data)
        yield put(action)
    }
}
function* getHome() {
    let res = yield axios.get('/api/home.json')
    let data = res.data
    if(data.success){
        let homeList = data.data
        const action = homeActionCreators.putHome(homeList)
        yield put(action)
    }
}

function* getMore(arg){
    let res = yield axios.get('/api/homeList.json?page='+arg.page)
    let data = res.data
    let page = arg.page + 1
    if(data.success){
        let homeList = data.data
        const action = homeActionCreators.putMore(homeList, page)
        yield put(action)
    }
}
function* getDetail(arg){
    let id = arg.id
    let res = yield axios.get('/api/detail.json?id='+id)
    let data = res.data
    if(data.success){
        let content = data.data
        const action = detailActionCreators.putDetail(content)
        yield put(action)
    }
}

function* login(argu){
    let {username, password} = argu
    let res = yield axios.get('/api/login.json?username='+username+'&password='+password)
    let data = res.data
    if(data.success){
        let value = data.data
        const action = loginActionCreators.loginStatus(value)
        yield put(action)
    }
}

function* mySagas(){
    yield takeEvery(actionTypes.SEARCH_LIST, getSearchList)
    yield takeEvery(homeActionTypes.GET_LUNBO, getLunBo)
    yield takeEvery(homeActionTypes.GET_HOME, getHome)
    yield takeEvery(homeActionTypes.GET_MORE, getMore)
    yield takeEvery(detailActionTypes.GET_CONTENT, getDetail)
    yield takeEvery(loginActionTypes.LOGIN, login)
}

export default mySagas