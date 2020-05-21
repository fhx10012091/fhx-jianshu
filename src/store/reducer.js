import {combineReducers} from 'redux-immutable'
import {reducer as HeaderReducer} from '../common/header/store'
import {reducer as HomeReducer} from '../pages/home/store'
import {reducer as DetailReducer} from '../pages/detail/store'
import {reducer as LoginReducer} from '../pages/login/store'
// const combineReducers = reducers => {
//     return (state = {}, action) => {
//       return Object.keys(reducers).reduce(
//         (nextState, key) => {
//           nextState[key] = reducers[key](state[key], action);
//           return nextState;
//         },
//         {} 
//       );
//     };
//   }

const reducer = combineReducers({
    header: HeaderReducer,
    home: HomeReducer,
    detail: DetailReducer,
    login: LoginReducer
})
export default reducer

