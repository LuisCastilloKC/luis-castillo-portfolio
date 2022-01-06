import React from 'react';
import { LinkStyled,  RightNavStyled } from '../../styles/Nav'


const RightNav = ({ open }) => {
    
    return(
      <> 
      <div>
        <RightNavStyled open={open}>
            <li><LinkStyled smooth to='/#'>Home</LinkStyled></li>
            <li><LinkStyled smooth to='/#bout'>About</LinkStyled></li>
            <li><LinkStyled smooth to='/#projects'>Project</LinkStyled></li>
            <li><LinkStyled smooth to='/#contact'>Contact</LinkStyled></li>
        </RightNavStyled>
      </div>
      </>
    )
}

export default RightNav;