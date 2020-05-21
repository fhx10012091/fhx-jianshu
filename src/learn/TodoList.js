import React, {Component} from 'react'
import store from './store'
import TodoListUI from './TodoListUI'
import {getInputChangeValue, getAddItem, getDeleteItem, getTodoList} from './store/actionCreators'
import 'antd/dist/antd.css'
// 容器组件，也称聪明组件，主要是逻辑代码
class TodoList extends Component {
    constructor (props) {
        super(props)
        this.state = store.getState()
        this.onhandleInputVal = this.onhandleInputVal.bind(this)
        this.onhandleScribe = this.onhandleScribe.bind(this)
        this.onhandleClick = this.onhandleClick.bind(this)
        this.onhandleDelete = this.onhandleDelete.bind(this)
        store.subscribe(this.onhandleScribe)
    }
    render() {
        return (
            <TodoListUI
                inputVal={this.state.inputVal}
                list={this.state.list}
                onhandleInputVal={this.onhandleInputVal}
                onhandleClick={this.onhandleClick}
                onhandleDelete={this.onhandleDelete}
            />
        )
    }
    componentDidMount () {
        const action = getTodoList()
        store.dispatch(action)
    }
    onhandleInputVal (e) {
        const action = getInputChangeValue(e.target.value)
        store.dispatch(action)
    }
    onhandleScribe () {
        this.setState(store.getState())
    }
    onhandleClick () {
        const action = getAddItem()
        store.dispatch(action)
    }
    onhandleDelete (index) {
        const action = getDeleteItem(index)
        store.dispatch(action)
    }
}

export default TodoList