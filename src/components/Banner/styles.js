import styled from 'styled-components';

export const BannerWrapper = styled.section`
    height: 500px;
    background-image: url('images/banner-bg.jpg');
    background-size: cover;
    background-position: center;
    text-align: center;
`

export const BannerInfo = styled.div`
    flex-basis: 50%;
    margin: auto;
`

export const BannerTitle = styled.h2`
    font-size: 60px;
    font-weight: bold;
    color: #5e5e5e;

    @media (max-width: 768px) {
        font-size: 40px;
        color: #fff;
    }
    
    @media (max-width: 575px) {
        font-size: 30px;
    }
`

export const BannerSubTitle = styled.h4`
    font-size: 35px;
    color: #eb5424;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        font-size: 20px;
    }
`

export const BannerDesc = styled.p`
    font-size: 20px;
    line-height: 1.5;
    color: #888;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        font-size: 15px;
    }
`

export const BannerSpan = styled.span`
    color: #000;
`

export const BannerBtn = styled.button`
    background-color: #eb5424;
    color: #fff;
    font-size: 18px;
    width: 150px;
    border: 0;
    padding: 15px;
    cursor: pointer;
    font-weight: bold;
    transition: all .3s ease-in-out;

    &:hover {
        background-color: #fff;
        color: #eb5424;
    }
`