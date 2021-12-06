import React from 'react';
import MenuHanburger from './MenuHanburger';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const Nav = styled.nav`
    
`

const Navbar = () => {
    return (
        <Nav> 
            <div>
                Nav Bar
                {/* <NavLink to="/">Home</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink   NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink> */}
            </div>
            <MenuHanburger />
        </Nav>
    );
}
export default Navbar;