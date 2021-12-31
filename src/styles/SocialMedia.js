import styled from "styled-components";

export const SocialMedia = styled.div`
    font-size: 1.5em;
    margin-top: 300px;
    position: fixed;
    right: 20px;
    
    a{
        color: #fff;
    }

    a:hover {
        color: #fee12b;
    }
    
    div{
        margin: 15px 20px 0px 25px;
        color: #fff;
    }
    
    @media (max-width: 768px) {
        left: 20px;
    }

`;