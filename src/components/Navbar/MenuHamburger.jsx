import React, { useState } from 'react';
import { StyledMenuHamburger } from '../../styles/Nav'
import RightNav from './RightNav';



const MenuHamburger = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () =>{
      setIsOpen(!isOpen)
    }

    return(
        <>
            <StyledMenuHamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                <div />
                <div />
                <div />
            </StyledMenuHamburger>
            <RightNav isOpen={isOpen} toggle={toggle} />
        </>
    );
};

export default MenuHamburger;