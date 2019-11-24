import React from 'react';
import {NavLink} from 'react-router-dom'
import './index.css';

const NavBar = _ => {
    return (
        <nav className="navbar-wrapper">
            <NavLink activeClassName="selected" to="/" exact>Home</NavLink>
            <NavLink activeClassName="selected" to="/contact" exact>Contact us</NavLink>
        </nav>
    )
}

export default NavBar