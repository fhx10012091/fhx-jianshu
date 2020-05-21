import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {
    RecommendWrapper,
    RecommendItem
} from '../style'
class Recommend extends PureComponent {
    getRecommend() {
        let list = this.props.recommendList.toJS()
        if(list.length>0){
            let arr = list.map(item => {
                return (
                    <RecommendItem key={item.id} imgUrl={item.imgUrl}/>
                )
            })
            return arr
        }
    }
    render() {
        return (
            <RecommendWrapper>
                {this.getRecommend()}
            </RecommendWrapper>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        recommendList: state.get('home').get('recommend')
    }
}


export default connect(mapStateToProps, null)(Recommend)