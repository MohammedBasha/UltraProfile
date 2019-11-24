import React from 'react';
import {NavigationBar, Logo, LogoText, Nav, NavItem, ItemLink, ItemLink2} from './styles.js';

const NavBar = _ => {
    return (
        <NavigationBar>
            <div className="container">
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                <Nav>
                    <NavItem>
                        <ItemLink2 activeClassName="selected" to="/" exact>Home</ItemLink2>
                    </NavItem>
                    <NavItem><ItemLink href="#">Work</ItemLink></NavItem>
                    <NavItem><ItemLink href="#">Portfolio</ItemLink></NavItem>
                    <NavItem><ItemLink href="#">Resume</ItemLink></NavItem>
                    <NavItem><ItemLink href="#">About</ItemLink></NavItem>
                    <NavItem>
                        <ItemLink2 activeClassName="selected" to="/contact" exact>
                            Contact us
                        </ItemLink2>
                    </NavItem>
                </Nav>
            </div>
        </NavigationBar>
    )
}

export default NavBar