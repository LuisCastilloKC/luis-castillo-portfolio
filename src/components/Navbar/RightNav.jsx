import React from 'react';
import { LinkStyled,  RightNavStyled } from '../../styles/Nav'

const RightNav = ({ open }) => {
    
    return(
      <> 
      <div>
        <RightNavStyled open={open}>
            <li><LinkStyled to='/'>Home</LinkStyled></li>
            <li><LinkStyled to='/#about'>About</LinkStyled></li>
            <li><LinkStyled to='/#projects'>Project</LinkStyled></li>
            <li><LinkStyled to='/#contact'>Contact</LinkStyled></li>
        </RightNavStyled>
      </div>
      </>
    )
}

export default RightNav;