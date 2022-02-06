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
    
    @media only screen 
        and (min-device-width : 768px) 
        and (max-device-width : 1280px)     
        and (orientation : landscape) {
            right: 40px;
    }
    @media only screen 
        and (min-device-width : 768px) 
        and (max-device-width : 124px) 
        and (orientation : portrait) {
            right: 30px;
            padding-bottom: 100px;

    }
   
  

`;