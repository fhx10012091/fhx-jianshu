import React from 'react'
import {connect} from 'react-redux'
const TodoList = (props) => {
    let {inputVal, changeInputVal, list, onhandleClick, onhandleDelete} = props
    return (
        <div>
            <input 
            onChange={changeInputVal}
            value={inputVal}/>
            <button onClick={onhandleClick}>提交</button>
            <ul>
                {
                    list.map((item, index) => (
                        <li key={item} onClick={() => onhandleDelete(index)}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        inputVal: state.inputVal,
        list: state.list
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeInputVal(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action)
        },
        onhandleClick() {
            const action = {
                type: 'add_item'
            }
            dispatch(action)
        },
        onhandleDelete(index) {
            let action ={
                type: 'delete_item',
                index
            }
            dispatch(action)
        }
    }
}
// TodoList是一个UI组件，但是connect方法把UI组件与业务逻辑相结合
// connnect返回的结果是一个容器组件
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)