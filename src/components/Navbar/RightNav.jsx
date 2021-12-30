import React from 'react';
import { LinkStyled } from '../../styles/Nav'
import styled from 'styled-components'

const Ul = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    
    li {
    padding: 18px 10px;
  }
  
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    
    li {
      color: #fff;
    }
  }
`;

const RightNav = ({ open }) => {
    
    return(
        <Ul open={open}>
            <li><LinkStyled to='/'>Home</LinkStyled></li>
            <li><LinkStyled to='/#about'>About</LinkStyled></li>
            <li><LinkStyled to='/#projects'>Project</LinkStyled></li>
            <li><LinkStyled to='/#contact'>Contact</LinkStyled></li>
        </Ul>
    )
}

export default RightNav;