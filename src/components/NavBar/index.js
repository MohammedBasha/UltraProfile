import React from 'react';
import {NavLink} from 'react-router-dom';
import {NavigationBar, Logo, LogoText, Nav, NavItem, ItemLink} from './styles.js';

const NavBar = _ => {
    return (
        <NavigationBar>
            <div className="container">
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                <Nav>
                    <NavItem>
                        <ItemLink as={NavLink} activeClassName="selected" to="/UltraProfile/" exact>
                            Home
                        </ItemLink>
                    </NavItem>
                    <NavItem><ItemLink href="#">Work</ItemLink></NavItem>
                    <NavItem><ItemLink href="#">Portfolio</ItemLink></NavItem>
                    <NavItem><ItemLink href="#">Resume</ItemLink></NavItem>
                    <NavItem><ItemLink href="#">About</ItemLink></NavItem>
                    <NavItem>
                        <ItemLink as={NavLink} activeClassName="selected" to="/UltraProfile/contact" exact>
                            Contact us
                        </ItemLink>
                    </NavItem>
                </Nav>
            </div>
        </NavigationBar>
    )
}

export default NavBar