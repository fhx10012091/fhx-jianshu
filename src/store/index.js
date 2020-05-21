import {createStore, applyMiddleware} from 'redux'
import createSagasMiddleware from 'redux-saga'
import reducer from './reducer'
import sagas from './sagas'
let sagasMiddleware = createSagasMiddleware()
let store = createStore(
    reducer,
    applyMiddleware(sagasMiddleware)
)
sagasMiddleware.run(sagas)
// sagasMiddleware.run(saga2)
export default store