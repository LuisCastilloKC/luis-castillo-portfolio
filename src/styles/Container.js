import styled from 'styled-components'

export const HomeContainerStyled = styled.div`
    color: #fff;
    display: flex;
    text-align: center;
    flex-direction: column;
    margin: 3em 0em 25em 1em;

    .hello {
        color: #fee12b;
        font-size: 1.2rem;
        font-weight: bold;
        margin-right: 13.5em;
    }

    .name {
        font-size: 3.5rem;
        font-weight: bold;
    }

    .intro {

    }

`;

export const AboutContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    

    h1 {
        
        color: #ffffff;
        font-size: 3.5em;
        /* margin-top: 300px; */
        
    }

    p {
        color: #ffffff;
        
    }
`;

export const ProjectsContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    
    align-items: center;
    margin-bottom: 150px;
    
    .pj {
        color: #ffffff;
        background-color: red;
        padding: 20px;
        margin: 20px;
    }

`;

export const TitleStyled = styled.h1`
        margin-top: 300px;
        text-align: center;
        color: #ffffff;
        font-size: 3.5rem; 
`;
