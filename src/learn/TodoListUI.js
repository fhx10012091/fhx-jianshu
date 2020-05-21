import React from 'react'
import { Input, Button, List } from 'antd'
import PropTypes from 'prop-types'
// UI组件 也称傻瓜组件，没有逻辑代码，主要是渲染页面
// 如果普通组件中只有render函数，则可以直接定义函数来渲染页面、
// 称无状态组件
const TodoListUI = (props) => {
    return (
        <div style={{marginTop: 10, marginLeft: 10}}>
                <Input 
                    placeholder='todolist' 
                    value={props.inputVal}
                    style={{width: 300, marginRight: 10}}
                    onChange={props.onhandleInputVal}
                />
                <Button 
                    type='primary'
                    onClick={props.onhandleClick}
                >提交</Button>
                <List
                    style={{marginTop: 10, width: 300}}
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => (
                        <List.Item onClick={(index) => (props.onhandleDelete(index))}>
                            {item}
                        </List.Item>
                    )}
                />
            </div>
    )
}
TodoListUI.propTypes = {
    inputVal: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
    onhandleClick: PropTypes.func.isRequired,
    onhandleDelete: PropTypes.func.isRequired,
    onhandleInputVal: PropTypes.func.isRequired
}
TodoListUI.defaultProps = {
    inputVal: '123',
    list: []
}
// class TodoListUI extends Component {
//     render () {
//         return (
//             <div style={{marginTop: 10, marginLeft: 10}}>
//                 <Input 
//                     placeholder='todolist' 
//                     value={this.props.inputVal}
//                     style={{width: 300, marginRight: 10}}
//                     onChange={this.props.onhandleInputVal}
//                 />
//                 <Button 
//                     type='primary'
//                     onClick={this.props.onhandleClick}
//                 >提交</Button>
//                 <List
//                     style={{marginTop: 10, width: 300}}
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={(item, index) => (
//                         <List.Item onClick={(index) => (this.props.onhandleDelete(index))}>
//                             {item}
//                         </List.Item>
//                     )}
//                 />
//             </div>
//         )
//     }
// }
export default TodoListUI