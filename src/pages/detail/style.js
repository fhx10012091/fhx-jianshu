import styled from 'styled-components'

export const DetailWrapper = styled.div`
    width: 650px;
    overflow: hidden;
    margin: 10px auto;
    background: #fefefe
`

export const Header = styled.h1`
    padding: 24px;
    font-size: 30px;
    font-weight: 700;
    word-break: break-word;
    line-height: 40px;
    margin-bottom: 32px;
`

export const Content = styled.div`
    font-weight: 400;
    line-height: 1.8;
    margin-bottom: 20px; 
    img{
        width: 90%;
        margin: 0 auto;
        display: block;
        margin-bottom: 30px;
    }
    p{
        margin-bottom: 20px;
        word-break: break-word;
        color: #404040;
    }
`