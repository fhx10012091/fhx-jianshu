import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
class Writter extends PureComponent{
    render() {
        if(this.props.login){
            return (
                <div>写文章页面</div>
            )
        }else{
            return (
                <Redirect to='/login'/>
            )
        }
    }
}


const mapStateToProps = (state) => ({
    login: state.get('login').get('loginStatus')
})


export default connect(mapStateToProps, null)(Writter)