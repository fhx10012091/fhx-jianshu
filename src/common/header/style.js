import styled from 'styled-components'
import logoPic from '../../static/logo.png'
export const HeaderWrapper = styled.div`
    height: 56px;
    border: 1px solid #f0f0f0;
    position: relative;
    font-size: 15px;
`

export const Logo = styled.div`
    height: 56px;
    width: 100px;
    position: absolute;
    top: 0;
    left: 0;
    background: url(${logoPic});
    background-size: cover;
`

export const Nav = styled.div`
    width: 960px;
    height: 56px;
    padding-right: 50px;
    box-sizing: border-box;
    margin: 0 auto;
`

export const NavItem = styled.div`
    font-size: 17px;
    padding: 0 15px;
    line-height: 56px;
    margin-right: 10px;
    &.left{
        float: left
    }
    &.right{
        float: right;
        color: #777;
        font-size: 16px;
        cursor: poiner;
    }
    &.active{
        color: #ea6f5a
    }
    &.a{
        color: #666;
    }
    .zuanshi{
        color: #ea6f5a;
        font-size: 24px;
    }
`

export const SearchWrapper = styled.div`
    float: left;
    position:relative;
    margin-top: 9px;
    .slide-enter,
    .slide-exit{
        transition: all .4s ease-out
    }
`
export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    width: 240px;
    top: 47px;
    padding: 0 20px;
    box-shadow: 0 0 8px #aaa;
    z-index: 100;
    background: white;
`
export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
    display: inline-block;
`
export const SearchInfoSwitch = styled.span`
    float: right;
    margin-top: 20px;
    line-height: 20px;
    font-size: 13px;
    color: #969696;
    cursor: pointer;
    .spin{
        display: inline-block;
        font-size: 12px;
        line-height: 20px;
        margin-right: 3px;
        transition: all .5s ease-out;
        transform: rotate(0deg);
        transform-origin: center center;
    }
`
export const SearchInfoList = styled.div`
    
`
export const SearchInfoItem = styled.a`
    padding: 0px 5px;
    border: 1px solid #ddd;
    font-size: 12px;
    color: #969696;
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 15px;
    border-radius: 3px;
`

export const Span = styled.i`
    position: absolute;
    right: 5px;
    width: 30px;
    border-radius: 50%;
    height: 30px;
    line-height: 30px;
    transition: all .4s ease-out;
    text-align: center;
    top: 4px;
    &.focused{
        background: #aaa;
        color: white;
    }
    
`
export const Search = styled.input.attrs({
    placeholder: '搜索'
})`
    height: 38px;
    width: 160px;
    border: 1px solid #f0f0f0;
    box-sizing: border-box;
    padding: 0 40px 0 20px;
    border-radius: 25px;
    background: #eee;
    outline: none;
    
    &::placeholder{
        color: #aaa;
        font-weight: 700;
    }
    &.focused{
        width:240px;
    }
    

`

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
`
export const Button = styled.button`
    background: white;
    border: 1px solid #eee;
    padding: 6px 20px;
    box-sizing: border-box;
    height: 38px;
    border-radius: 20px;
    margin: 9px 5px 0 15px;
    &.writting{
        background: #ea6f5a;
        color: white;
        margin-right: 20px;
        .yumaobi {
            padding: 0 7px 0 0
        }
    }
    &.register{
        border: 1px solid #ea6f5a;
        color: #ea6f5a
    }
`