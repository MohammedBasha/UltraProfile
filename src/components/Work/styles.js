import styled from 'styled-components';

export const WorkWrapper = styled.div`
    height: auto;
    padding: 50px 0;
    background-color: #fff;
`

export const WorkTitle = styled.h2`
    font-size: 60px;
    flex-basis: 100%;
    text-align: center;

    span {
        font-weight: normal;
    }
`

export const WorkItem = styled.div`
    margin-top: 20px;
    flex-basis: 30%;
    height: auto;
    padding: 100px 0;
    border: 1px solid #888;
    box-sizing: border-box;
    text-align: center;
    margin-left: ${props => props.first === 1? 0 : '5%'};

    @media (max-width: 768px) {
        flex-basis: 100%;
        margin-left: 0;
        
    }
`

export const ItemIcon = styled.i`
    color: #888;
    margin-bottom: 20px;
`

export const ItemTitle = styled.h4`
    font-size: 25px;
    color: #eb5424;
    margin-bottom: 20px;
`
export const TitleLine = styled.hr`
    width: 60%;
    margin: auto;
    margin-bottom: 20px;
`

export const ItemDesc = styled.p`
    font-size: 14px;
    color: #888;
    padding: 20px;
`