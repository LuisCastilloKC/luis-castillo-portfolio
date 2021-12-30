import React from 'react';
import MenuHanburger from './MenuHanburger';
import { LinkStyled, NavStyled } from '../../styles/Nav';



const Navbar = () => {
    return (
        <NavStyled> 
            <div className="logo">
                <h1><LinkStyled to='/'>LUIS</LinkStyled></h1>
            </div>
            <MenuHanburger />
        </NavStyled>
    );
}
export default Navbar;