import styled from 'styled-components';

export const SocialMediaWrapper = styled.div`
    height: auto;
    display: flex;

    @media (max-width:991px) {
        flex-wrap: wrap;
    }
`

export const Social = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    padding: 100px 0 100px 60px;
    background-color: ${props => props.color};

    @media (max-width:991px) {
        flex-basis: 100%;
    }
`

export const SocialIcon = styled.i`
    width: 50px;
    height: 50px;
    background-color: #fff;
    text-align: center;
    line-height: 50px;
    color: #888;
    float: left;
    margin-right: 10px;
`

export const SocialLinks = styled.p`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 20px;
    color: #fff;

    span {
        display: block;
        margin-bottom: 8px;

        &.info2 {
            font-weight: normal;
        }
    }
`
