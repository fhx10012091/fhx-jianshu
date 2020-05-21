# 简书网站

## 使用到的技术栈

### UI组件

```
npm i antd 
使用时，导入样式， 选择性导入组件
```

### react-redux

```js
组件内部的所有组件都可以使用store
import react, {Component, Fragment} from 'react'
import {Provider} from 'react-redux'
import store from './store'
// Provider 里面只有一个根标签，可以使用Fragment占位
<Provider store={store}>
   <Header/>
</Provider>

组件使用store时, 把获取到的数据以props的形式传入
import {connect} from 'react-redux'
const mapStateToProps = (state) => {
    return {
        focus: state.header.get('focus')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onhandleFocus() {
            const action = actionCreators.searchFocus
            dispatch(action)
        },
        onhandleBlur() {
            const action = actionCreators.searchBlur
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
```

### redux

```js
store.js
// 创建仓库,存储空间
import {createStore} from 'redux'
import reducer from './reducer'
// store必须是唯一的
// 只有store才能改变自己的内容
const store = createStore()
export default store

reducer.js //记录本，仓库通过记录本来存储和修改数据
// reducer只能接收state，但不能修改state,store才能改变自己的内容
// reducer必须是一个纯函数，固定的输入有固定的输出，
//（不能有setTimeout,setInterval,ajax,date,异步相关的操作）
// 而且不会有任何副作用 对参数的修改就是副作用
export default (state=defaultState, action) => {
	if(action.type === '类型'){
		return {}
	}
	return state
}

组件获取数据方法
import store from './store'
class 组件 extends Component {
	constructor(props){
        super(props)
        // 把仓库数据初始化到state中
        this.state=store.getState()
    }
    函数 () {
       const action = {
           type: '类型'
       }
       // 对数据进行更改
       store.dispatch(action)
    }
}

// 为了代码的可维护性，其中的action和action中type给分离出来
actionCreators.js
export default const 变量 = () => {
    
}
acitonTypes.js
export default const HELLO = 'hello'
```

###  react-transition-group

```js
import {CSSTransition, TransitionGroup} from 'react-transition-group'
<CSSTransition
                    timeout={400} // 持续时间
                    classNames='slide' // css样式名称
                    appear={true} // 为true  渲染的时候就直接执行动画，默认false，
                    in={props.focus} // true和false 是进场动画还是出场动画
                    unmountOnExit // 当in=false时，动画组件去除dom标签
                    onEnter={(el) => el.style.opacity = 1} //可以在这里操作
    				onExited={() => console.log('hide ~')}
                >
                    //要进行动画的内容
</CSSTransition>
style.css
.slide-enter, .slide-appear{
	
}
.slide-enter-active, .slide-appear-active{

}
.slide-enter-done{

}
.slide-exit{
	
}
.slide-exit-active{

}
.slide-exit-done{

}
//TransitionGroup 是要进行动画的组件是动态增加的
 <TransitionGroup>
                    {
                        this.state.items.map(item => (
                            <CSSTransition
                                key = {item.id}
                                timeout = {1000}
                                classNames = "message"
                                unmountOnExit
                                
                            >
                                {
                                    (state) => (<h3 >{item.text} -- {state}</h3>)
                                }
                            </CSSTransition>
                        ))
                    }
</TransitionGroup>

```

###  redux-saga

```js
一个用于管理应用程序 Side Effect（副作用，例如异步获取数据，访问浏览器缓存等）的 library，它的目标是让副作用管理更容易，执行更高效，测试更简单，在处理故障时更容易。

$ npm install --save redux-saga

sagas.js
// takeEvery 监听组件向store发送的action的type是否与自己相符，put是store发送action
import { takeEvery, put } from 'redux-saga/effects'
import {GET_TODO} from './actionTypes'
import {getInitData} from './actionCreators'
import axios from 'axios'
function* getTodoList() {
    // 执行异步函数， 数据请求
    try {
        let res = yield axios.get('/api/index.json')
        let data = res.data
        let action = getInitData(data)
        yield put(action)
    }catch(e) {

    }
}
function* mySagas() {
    // 当监听到的type与自己的相符，执行回调函数
    yield takeEvery(GET_TODO, getTodoList)
}
export default mySagas

store.js
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
```

### redux-thunk

```
export const getData = () => {
	return (dispatch) => {
		//异步操作，把数据得到，形成action
		dispatch(action)
	}
}
//组件内部
允许dispatch传入的是函数，调用中间件，
action是一个函数，然后进行
dispatch(action)
```

### styled-components

```js
styled-components是目前React中非常受关注的一种样式方案，既实现了css-in-js的模块化优点，移除了样式和组件之间的映射关系，又完全使用了CSS的书写习惯。使你使用起来几乎0门槛。

npm install --save styled-components

import styled from 'styled-components';
const H1 = styled.h1`
  background-color: #a1a
`;

class App extends Component {
  render() {
    return (
      <div className="App">
        <H1>nihao</H1>
      </div>
    );
  }
}
// 全局样式
import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 
`
在根组件里面引用


当使用了该组件后，ref不能使用来获取对应的dom标签，可以使用styled-components内置样式innerRef
```

### immutable

```
immutable对象是不可直接赋值的对象，它可以有效的避免错误赋值的问题
npm install immutable
// 在react中，immutable主要是防止state对象被错误赋值。因为state是不可更改的，只能store更改
import { fromJS } from 'immutable';
// 将js对象转成immutable对象
const defaultState = fromJS({
  todoList: []
});

state.get('todoList'); // 获取store中的todoList
statae.get(['Main', 'todoList']); // 获取Main组件中store的todoList

// immutable 对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
state.set('todoList', action.value);  // 设置单个属性值
// 设置多个属性
state.merge({
  todoList: fromJS(action.value), // 由于action.value是js对象所以要转成immutable对象
});

state.get('todoList').toJS(); // 把todoList转成js数组
```

### react-router-dom

```
App.js 根组件
import {BrowserRouter, Route} from 'react-router-dom'
// 所有要使用路由的组件都必须包在BrowserRouter中
<BrowserRouter>
	<Header/>
    <Route path='/' exact component={Home} />
    <Route path='/detail' exact component={Detail} />
</BrowserRouter>
```



### 性能优化

```
每当一个reducersy一个值改变，就会调用connect重新加载组件,本与该组件无关，但还是重新执行了一遍

可以在组件中添加shouldComponentUpdate来判断是否该组件的数据更新了

方法二
import React, {PureComponent} from 'react'

PurComponent内置了shouldComponentUpdate
要与immutable.js来管理数据
```



### react-loadable

```
// 代码进行分割，按需加载，将js 拆分成若干个chunk.js,用到就加载，react-loadable就可以很好地解决这个问题。

import React from 'react'
import Loadable from 'react-loadable'

const LoadableComponent = Loadable({
    loader: () => import('./'),
    loading() {
        return (<div>正在加载....</div>)
    }
})

export default () => <LoadableComponent/>
// 这就替代了原来的组件，同时原来的组件的里面的路由等会报错，要使用
import {withRouter} from 'react-router-dom'
withRouter(原来的组件)
```





