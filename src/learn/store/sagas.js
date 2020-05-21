import { takeEvery, put } from 'redux-saga/effects'
import {GET_TODO} from './actionTypes'
import {getInitData} from './actionCreators'
import axios from 'axios'
function* getTodoList() {
    try {
        let res = yield axios.get('/api/index.json')
        let data = res.data
        let action = getInitData(data)
        yield put(action)
    }catch(e) {

    }
}
function* mySagas() {
    yield takeEvery(GET_TODO, getTodoList)
}
export default mySagas