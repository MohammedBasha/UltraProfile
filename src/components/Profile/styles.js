import styled from 'styled-components';

export const ProfileWrapper = styled.div`
    padding: 50px 0;
`

export const ProfileSection = styled.div`
    flex-basis: 50%;

    @media (max-width:768px) {
        flex-basis: 100%;
        
        &:last-child {
            margin-bottom: 20px;
        }
    }
`

export const ProfileTitle = styled.div`
    font-size: 40px; 
    margin-bottom: 20px;

    span {
        font-weight: normal;
    }
`

export const ProfileItem = styled.div`
    margin-bottom: 8px;

    span {
        display: inline-block;
        width: 100px;
        font-weight: bold;

        &.web {
            font-weight: normal;
            color: #eb5424;
        }
    }
`

export const SkillsDesc = styled.div`
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px;
`

export const SkillsBar = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 10px 0;
    margin-bottom: 10px;
`

export const SkillsPerc = styled.div`
    margin-right: 100px;
`

export const SkillsPercParent = styled.div`
    flex-basis: 100%;
    height: 2px;
    clear: both;
    background-color: #f8f8f8;
    position: relative;
    top: 5px;

    span {
        background: #eb5424;
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        bottom: 0;
        width: ${props => props.width};
    }
`