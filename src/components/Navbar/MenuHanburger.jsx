import React, { useState } from 'react';
import styled from 'styled-components';
import RightNav from './RightNav';

const StyledMenuHanburger = styled.div`
list-style: none;
  display: flex;
  flex-flow: row nowrap;
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

const MenuHanburger = () => {

    const [open, setOpen] = useState(false)

    return(
        <>
            <StyledMenuHanburger open={open} onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </StyledMenuHanburger>
            <RightNav open={open} />
        </>
    );
};

export default MenuHanburger;