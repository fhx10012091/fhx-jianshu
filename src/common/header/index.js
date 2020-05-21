import React, {PureComponent} from 'react'
import {CSSTransition} from 'react-transition-group'
import {connect} from 'react-redux'
import {actionCreators} from './store'
import {actionCreators as loginActionCreators} from '../../pages/login/store'
import {Link} from 'react-router-dom'
import '../../static/iconfont.css'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    Addition,
    Button,
    Search,
    Span,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem
} from './style.js'

class Header extends PureComponent {
    getSearchInfo () {
        let {
                page, 
                list, 
                focus, 
                mouse, 
                onhandleLeave, 
                onhandleEnter,
                onhandleSwitch
            } = this.props
        if(focus || mouse){
            let searchList = []
            let newList = list.toJS()
            if(newList.length>0){
                for(let i=(page-1)*10;i<page*10;i++){
                    searchList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                    )
                }
            }
            return (
                <SearchInfo
                onMouseLeave={onhandleLeave}
                onMouseEnter={onhandleEnter}>
                        <SearchInfoTitle>热门搜索</SearchInfoTitle>
                        <SearchInfoSwitch
                            onClick={() => onhandleSwitch(this.props.page, this.props.totalPage, this.spin)}
                        >
                            <span ref={(icon) => this.spin=icon} className='iconfont icon-spin spin'></span>
                            转一转</SearchInfoSwitch>
                        <SearchInfoList>
                            {/* {this.props.list.toJS().map((item, index) => {
                                return (
                                <SearchInfoItem key={item}>{item}</SearchInfoItem>
                                )
                            })} */}
                            {
                                searchList
                            }
                        </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null
        }
    }
    render() {
        let {
            focus, 
            onhandleFocus, 
            onhandleBlur,
            list,
            login,
            loginExit
        } = this.props
        return (<HeaderWrapper>
            <Link to='/'>
                <Logo/>
            </Link>
            <Nav>
                <NavItem className='left active'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                {
                    login ? <NavItem className='right' onClick={loginExit}>退出</NavItem>:<Link to='/login'><NavItem className='right'>登录</NavItem></Link>
                }
                <NavItem className='right zuanshi'>
                    <span className='iconfont icon-zuanshi zuanshi'></span>
                </NavItem>
                <NavItem className='right a'>Aa</NavItem>
                <SearchWrapper>
                    <CSSTransition
                        timeout={400}
                        classNames='slide'
                        in={focus}
                    >
                        <Search
                            onFocus={() => onhandleFocus(list)}
                            onBlur={onhandleBlur}
                            className={focus? 'focused': ''}
                        />
                    </CSSTransition>
                    <Span
                    className={focus? 'focused iconfont icon-sousuo': 'iconfont icon-sousuo search'}
                    ></Span>
                    {this.getSearchInfo()}
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className='register'>注册</Button>
                <Link to='/writter'>
                    <Button className='writting'>
                        <span className='iconfont icon-yumaobi yumaobi'></span>
                        写文章
                    </Button>
                </Link>
            </Addition>
        </HeaderWrapper>)
    }
}

const mapStateToProps = (state) => {
    return {
        focus: state.get('header').get('focus'),
        mouse: state.get('header').get('mouse'),
        list: state.get('header').get('list'),
        page: state.get('header').get('page'),
        totalPage: state.get('header').get('totalPage'),
        login: state.get('login').get('loginStatus')
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onhandleFocus(list) {
            (list.size === 0) && dispatch(actionCreators.searchList())
            const action = actionCreators.searchFocus()
            dispatch(action)
        },
        onhandleBlur() {
            const action = actionCreators.searchBlur()
            dispatch(action)
        },
        onhandleEnter() {
            const action = actionCreators.searchEnter()
            dispatch(action)
        },
        onhandleLeave() {
            const action = actionCreators.searchLeave()
            dispatch(action)
        },
        onhandleSwitch(page, total, spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
            if(!originAngle){
                originAngle = 0
            }else{
                originAngle = parseInt(originAngle, 10)
            }
            spin.style.transform = 'rotate('+(originAngle+360)+'deg)'
            if(page === total){
                page = 1
            }else{
                page++
            }
            const action = actionCreators.searchSwitch(page)
            dispatch(action)
        },
        loginExit(){
            dispatch(loginActionCreators.loginExit())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)