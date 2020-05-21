import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
import createSagasMiddleware from 'redux-saga'
import TodoSagas from './sagas'
const sagasMiddleware = createSagasMiddleware()

// store必须是唯一的
// 只有store才能改变自己的内容
const store = createStore(
    reducer,
    applyMiddleware(sagasMiddleware)
);
sagasMiddleware.run(TodoSagas)
export default store;