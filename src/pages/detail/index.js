import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {actionCreators} from './store'
import {withRouter} from 'react-router-dom'
import {
    DetailWrapper,
    Header,
    Content
} from './style'
class Detail extends PureComponent{
    render () {
        return (
            <DetailWrapper>
                <Header>
                《纸短情长》民国60余封情书，教我明白什么是真正的爱情
                </Header>
                <Content dangerouslySetInnerHTML={{__html: this.props.content}}></Content> 
            </DetailWrapper>
        )
    }
    componentDidMount () {
        this.props.getData(this.props.match.params.id)
    }
}

const mapStateToProps = (state) => ({
    content: state.get('detail').get('content')
})
const mapDispatchToProps = (dispatch) => ({
    getData(id){
        dispatch(actionCreators.getDetail(id))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail))