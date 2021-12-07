import React from 'react';
import MenuHanburger from './MenuHanburger';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

const Nav = styled.nav`
    width: 100%;
    height: 55px;
    border-bottom: 2px solid #f1f1f1;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    
    .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
    return (
        <Nav> 
            <div className="logo">
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