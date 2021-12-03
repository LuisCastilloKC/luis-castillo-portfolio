import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/work">Work</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="Contact">Contact</NavLink>
        </div>
    );
}
export default Navbar;