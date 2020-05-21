import styled from 'styled-components'
export const HomeWrapper = styled.div`
    width: 960px;
    overflow: hidden;
    margin: 30px auto;
`
export const HomeLeft = styled.div`
    width: 640px;
    padding-left: 15px;
    float: left;
    box-sizing: border-box;
    img {
        width: 624;
        height: 270px;
    }
`
export const HomeRight = styled.div`
    margin-left: 40px;
    width: 280px;
    float: right
`

export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow: hidden;
    margin-left: -18px;

`
export const TopicItem = styled.div`
    background: #f7f7f7;
    border: 1px solid #dcdcdc;
    float: left;
    margin-left: 18px;
    margin-bottom: 18px;
    color: #000;
    border-radius: 4px;
    font-size: 14px;
    line-height: 32px;
    padding-right: 10px;
    .topicImg{
        width: 32px;
        height: 32px;
        float: left;
        margin-right: 10px;
    }
`

export const ListItem = styled.div`
    padding: 20px 0;
    overflow: hidden;
    border-bottom: 1px solid #f0f0f0;
    img{
        float: right;
        width: 150px;
        height: 100px;
    }
`
export const ListInfo = styled.div`
    float: left;
    width: 475px;
    .title{
        line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
    }
    .content{
        margin: 10px 0 8px;
        font-size: 13px;
        display: inline-block;
        line-height: 24px;
        color: #999;    
    }
`

export const RecommendWrapper = styled.div`
    margin-top: -4px;
    padding-bottom: 4px;
    min-height: 228px;
`

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    margin-bottom: 6px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;

`

export const WritterWrapper = styled.div`
    widthL 280px;
    height: 300px;
    line-height: 300px;
    text-align: center;
    border: 1px solid #aaa;
    box-sizing: border-box;
    margin-top: 15px;
`

export const LoadMore = styled.div`
    width: 100%;
    border-radius: 20px;
    background-color: #a5a5a5;
    height: 40px;
    margin: 30px auto 60px;
    padding: 10px 15px;
    text-align: center;
    font-size: 15px;
    border-radius: 20px;
    color: #fff;
`

export const BackTop = styled.div`
    position: fixed;
    right: 100px;
    bottom: 100px;
    width: 60px;
    height: 60px;
    font-size: 12px;
    line-height: 60px;
    text-align: center;
    border: 1px solid #666;
`