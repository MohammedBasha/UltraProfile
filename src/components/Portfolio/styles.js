import styled from 'styled-components';

export const PortfolioWrapper = styled.section`
    background-color: #f8f8f8;
    padding-top: 20px;
`

export const PortfolioTitle = styled.h2`
    text-align: center;
    font-size: 35px;

    span {
        font-weight: normal;
    }
`

export const PortfolioList = styled.ul`
    list-style: none;
    text-align: center;
    margin: 20px 0;
`

export const PortfolioItem = styled.li`
    display: inline-block;
    width: 100px;
    padding: 10px;
    background-color: ${props => props.active?  '#eb5424' : ''};
    color: ${props => props.active?  '#fff' : '#000'};

    @media (max-width:575px) {
        display: block;
        margin: auto;
    }
`

export const Box = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const BoxItem = styled.div`
    flex-basis: 25%;
    font-size: 0;
    position: relative;

    img {
        width: 100%;
    }
    @media (max-width:575px) {
        flex-basis: 100%;
    }

    @media (min-width:576px) and (max-width : 768px ){
        flex-basis: 50%;
    }
`

export const BoxOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(235,84,36 , 0.5);
    font-size: 15px;
    opacity: 0;
    transition: opacity .3s ease-in-out;

    ${BoxItem}:hover & {
        opacity: 1;
    }

    span{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: #fff;
        display: block;
        padding: 10px 20px;
        cursor: pointer;
        border: 2px solid #eb5424;
    }
`