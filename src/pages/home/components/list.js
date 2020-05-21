import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {actionCreators} from '../store'
import {Link} from 'react-router-dom'
import {
    ListItem,
    ListInfo,
    LoadMore
} from '../style'
class List extends PureComponent {
    getList () {
        let list = this.props.list.toJS()
        if(list.length > 0){
            let arr = list.map((item, index) => {
                return (
                <Link to={'/detail/' + item.id} key={index}>
                    <ListItem>
                    <img alt='' src={item.imgUrl}/>
                    <ListInfo>
                        <h3 className='title'>
                            {item.title}
                        </h3>
                        <p className='content'>
                            {item.desc}
                        </p>
                    </ListInfo>
                </ListItem>
                </Link>
                )
            })
            return arr
        }
    }
    render() {
        return (
            <div>
                {this.getList()}
                <LoadMore onClick={() => this.props.onhandleMore(this.props.page)}>加载更多</LoadMore>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        list: state.get('home').get('list'),
        page: state.get('home').get('articlePage')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onhandleMore(page) {
            const action = actionCreators.getMore(page)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)