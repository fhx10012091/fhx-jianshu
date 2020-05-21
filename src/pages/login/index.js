import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {actionCreators} from './store'
import {Redirect} from 'react-router-dom'
import {
    LoginWrapper,
    LoginBox,
    Input,
    Button
} from './style'
class Login extends PureComponent{
    render () {
        if(this.props.login){
            return (
                <Redirect to='/'/>
            )
        }else{
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='账号' ref={(input) => this.username=input}></Input>
                        <Input placeholder='密码' ref={(input) => this.password=input}></Input>
                        <Button onClick={() => this.props.onhandleLogin(this.username, this.password)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }
    }
}

const mapStateToProps = (state) => ({
    login: state.get('login').get('loginStatus')
})
const mapDispatchToProps = (dispatch) => ({
    onhandleLogin(username, password){
        dispatch(actionCreators.login(username.value, password.value))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Login)