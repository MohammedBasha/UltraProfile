import styled from 'styled-components';
import {NavLink} from 'react-router-dom'

export const NavigationBar = styled.div`
    padding: 5px 0;
    background-color: #fff;
    position: relative;
    border-bottom: 1px solid #000;
`

export const Logo = styled.div`
    @media (max-width : 991px) {
        flex-basis: 100%;
        text-align: center;
    }
`

export const LogoText = styled.h2`
    font-size: 30px;
    font-weight: bold;
`

export const Nav = styled.nav`
    @media (max-width : 991px) {
        flex-basis: 100%;
        margin-top: 20px;
    }
`

export const NavItem = styled.li`
    display: inline-block;
    @media (max-width : 991px) {
        display: block;
        text-align: center;
    }
`

export const ItemLink = styled.a`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;

    &:hover {
        color: #eb5424;
    }
`

export const ItemLink2 = styled(NavLink)`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;

    &:hover {
        color: #eb5424;
    }
`