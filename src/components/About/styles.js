import styled from 'styled-components';

export const AboutWrapper = styled.div`
    height: 500px;
    background-image: url('images/about-bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    align-items: center;

    @media (max-width:991px) {
        height: auto
    }
`

export const AboutInfo = styled.div`
    flex-basis: 50%;
    margin-left: auto;

    @media (max-width:991px) {
        flex-basis: 100%;
        padding-top: 10px;
        margin-left: 0;
    }
`

export const AboutTitle = styled.h2`
    font-weight: bold;
    font-size: 50px;
    margin-bottom: 0;

    span {
        font-weight: normal
    }
`

export const AboutSubTitle = styled.h4`
    font-size: 40px;
    color: #eb5424;
    margin-top: 0;
    margin-bottom: 20px;

    @media (max-width:991px) {
        font-size: 30px;
    }
`

export const AboutDesc = styled.p`
    color: #000;
    margin-bottom: 15px;
    line-height: 1.8;

    a {
        text-decoration: none;
    }
`