import styled from "styled-components";

export const SocialMedia = styled.div`
    display: flex;
    flex-direction: column;    
    position: fixed;
    right: 10px;
    top: 85%;
    -webkit-transform: translateY(-85%);
    -ms-transform: translateY(-85%);
    transform: translateY(-85%);
  
    
    .icon {
        text-decoration: none;
        color: #fff;
        font-size: 2rem;
        margin: 10px;
        padding: 5px;

        a{
            color: #fff;
        }
    
        a:hover {
            color: #fee12b;   
        }
       
    }
    
    @media (max-width: 768px) {
        display: none;
        /* display: flex;
        flex-direction: row;
        left: 20px;
        position: static;
        justify-content: center;
        margin-bottom: 20px; */
    }

`;