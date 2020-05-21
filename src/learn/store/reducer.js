import { CHANGE_INPUT_VALUE, ADD_ITEM, DELETE_ITEM, INIT_DATA } from './actionTypes'

const defaultState = {
    inputVal: '',
    list: ['vue', 'react', 'angular']
}
// reducer只能接收state，但不能修改state,store才能改变自己的内容
// reducer必须是一个纯函数，固定的输入有固定的输出，
//（不能有setTimeout,setInterval,ajax,date,异步相关的操作）
// 而且不会有任何副作用 对参数的修改就是副作用
export default (state = defaultState, action) => {
    if(action.type === CHANGE_INPUT_VALUE){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputVal = action.value
        return newState
    }else if(action.type === ADD_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputVal)
        newState.inputVal = ''
        return newState
    }else if(action.type === DELETE_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }else if(action.type === INIT_DATA){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list = action.data
        return newState
    }
    return state
}