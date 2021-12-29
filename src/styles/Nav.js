import styled from "styled-components";
import { Link } from 'react-router-dom' 

export const NavStyled = styled.nav`
width: 100%;
height: 55px;
border-bottom: 2px solid #05182c;
background-color: transparent;
color: #FFF;
padding: 0 20px;
display: flex;
justify-content: space-between;

.logo {
padding: 15px 0;
}
`

export const LinkStyled = styled(Link)`
    color: #FFFFFF;
    text-decoration: none;
`