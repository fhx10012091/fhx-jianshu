import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {
    TopicWrapper,
    TopicItem
} from '../style'
class Topic extends PureComponent {
    getTopicItem() {
        let list = this.props.list.toJS()
        if(list.length>0){
            let topicArr = list.map((item) => {
                return (
                    <TopicItem key={item.id}>
                        <img 
                        alt=''
                        className='topicImg'
                        src={item.imgUrl}/>
                        {item.title}
                    </TopicItem>
                )
            })
            return topicArr
        }
    }
    render() {
        return (
            <TopicWrapper>
                {this.getTopicItem()}
            </TopicWrapper>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        list: state.get('home').get('topicList')
    }
}
export default connect(mapStateToProps, null)(Topic)