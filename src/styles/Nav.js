import styled from "styled-components";
// import { Link as LinkR} from 'react-router-dom' 
import { Link } from 'react-scroll'


export const NavStyled = styled.nav`
position: sticky;
width: 100%;
height: 55px;
border-bottom: 2px;
backdrop-filter: blur(60px);
color: #FFF;
padding: 0 30px;
display: flex;
justify-content: space-between;
top: 0;

a:hover {
    color: #fee12b;
}

.logo {
padding: 15px 0;
}
`

export const LinkStyled = styled(Link)`
    color: #FFFFFF;
    text-decoration: none;

`


export const RightNavStyled = styled.div`

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

