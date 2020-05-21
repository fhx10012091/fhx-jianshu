import React, { PureComponent } from 'react'
import { Carousel } from 'antd';
import { connect } from 'react-redux'
import { actionCreators } from './store'
import Topic from './components/topic'
import List from './components/list'
import Recommend from './components/recommend'
import Writter from './components/writter'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './style'
import 'antd/dist/antd.css'
class Home extends PureComponent{
    getLunbo(){
        let imgArr = []
        let imgs = this.props.imgs.toJS()
        if(imgs.length>0){
            imgs.map((item) => (
                imgArr.push(
                    <div key={item}>
                        <img alt='' src={item}/>
                    </div>
                )
            ))
        }
        return imgArr
    }
    backTop () {
        window.scrollTo(0,0)
    }
    render () {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <Carousel autoplay>          
                        {
                            this.getLunbo()
                        }
                    </Carousel>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writter/>
                </HomeRight>
                {this.props.showBack? <BackTop onClick={this.backTop}>返回顶部</BackTop>: null}
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.getLunBo()
        this.props.getHome()
        this.bindEvents()
    }
    bindEvents() {
        window.addEventListener('scroll', this.props.onhandleScroll)
    }
    
}

const mapStateToProps = (state) => {
    return {
        imgs: state.get('home').get('imgs'),
        showBack: state.get('home').get('showBack')
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getLunBo(){
            const action = actionCreators.getLunbo()
            dispatch(action)
        },
        getHome(){
            const action = actionCreators.getHome()
            dispatch(action)
        },
        onhandleScroll() {
            if(document.documentElement.scrollTop > 400){
                dispatch(actionCreators.setBackShow(true))
            }else{
                dispatch(actionCreators.setBackShow(false))
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)