import React from 'react';
import { LinkStyled,  RightNavStyled } from '../../styles/Nav'



const RightNav = ({ open }) => {

    return(
      <> 
      <div>
        <RightNavStyled open={open}>
            <li><LinkStyled to='/'smooth={true} duration={500} spy={true} exact={true} offset={-80}>Home</LinkStyled></li>
            <li><LinkStyled to='about'smooth={true} duration={500} spy={true} exact={true} offset={-80}>About</LinkStyled></li>
            <li><LinkStyled to='projects'smooth={true} duration={500} spy={true} exact={true} offset={-80}>Project</LinkStyled></li>
            <li><LinkStyled to='contact' smooth={true} duration={500} spy={true} exact={true} offset={-80}>Contact</LinkStyled></li>
        </RightNavStyled>
      </div>
      </>
    )
}

export default RightNav;