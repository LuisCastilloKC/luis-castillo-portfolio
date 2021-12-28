import React from 'react';
import MenuHanburger from './MenuHanburger';
import { NavStyled } from '../../styles/Nav';



const Navbar = () => {
    return (
        <NavStyled> 
            <div className="logo">
                <h1>LUIS</h1>
                {/* <NavLink to="/">Home</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink   NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink> */}
            </div>
            <MenuHanburger />
        </NavStyled>
    );
}
export default Navbar;