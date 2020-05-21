import React, {Component, Fragment} from 'react'
import {Provider} from 'react-redux'
import {GlobalStyle} from './style.js'
import Header from './common/header'
import Home from './pages/home/index.js'
import Detail from './pages/detail/loadable.js'
import Login from './pages/login'
import Writter from './pages/writter'
import {BrowserRouter, Route} from 'react-router-dom'
import store from './store'
class App extends Component {
    render() {
        return (
            <Fragment>
                <GlobalStyle/>
                <Provider store={store}>
                    <BrowserRouter>
                        <Header/>
                        <Route path='/' exact component={Home} />
                        <Route path='/detail/:id' exact component={Detail} />
                        <Route path='/login' exact component={Login}/>
                        <Route path='/writter' exact component={Writter}/>
                    </BrowserRouter>
                </Provider>
            </Fragment>
        )
    }
}
export default App