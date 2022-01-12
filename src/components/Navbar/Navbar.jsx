import React from 'react';
import MenuHamburger from './MenuHamburger';
import { LinkStyled, NavStyled } from '../../styles/Nav';



const Navbar = () => {
    return (
        <NavStyled> 
            <div className="logo">
                <h1><LinkStyled to='/'>LUIS</LinkStyled></h1>
            </div>
            <MenuHamburger />
        </NavStyled>
    );
}
export default Navbar;