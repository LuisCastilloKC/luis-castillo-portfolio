import styled from "styled-components";
// import { Link as LinkR} from 'react-router-dom' 
import { Link } from 'react-scroll'


  export const NavStyled = styled.nav`
    position: sticky;
    height: 55px;
    border-top-style: hidden;
    border-bottom: 2px;
    color: #FFF;
    padding: 0  50px  0 30px;
    display: flex;
    justify-content: space-between;
    top: 0;
    background-color: #05182c;
    box-sizing: border-box;

    a:hover {
    color: #fee12b;
    cursor: pointer;
    }

    .logo {
    padding: 15px 0;
    margin-left: 10px ;
    }

    @media screen and (max-width: 480px) {
      padding-left: 10px;
    }
  `

  export const LinkStyled = styled(Link)`
    color: #FFFFFF;
    text-decoration: none;

  `


  export const RightNavStyled = styled.div`
    display: flex;
    flex-flow: row nowrap;
    list-style: none;
    align-items: center;

    
    li {
    padding: 18px 10px;
  }
  
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 107vh;
    width: 250px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    
    li {
      color: #fff;
    }
  }
`;

  export const StyledMenuHamburger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 1px;
    z-index: 20;
    display: none;
    @media (max-width: 768px) {
      display: flex;
      right: 1px;
      justify-content: space-around;
      flex-flow: column nowrap;
      padding-right: 65px;
    }
    @media (max-width: 480px) {
      padding-right: 55px;
      right: 10px;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ isOpen }) => isOpen ? '#ccc' : '#fff'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ isOpen }) => isOpen ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ isOpen }) => isOpen ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;