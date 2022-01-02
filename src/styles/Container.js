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
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 100px;
    `
    export const ProjectWrapper = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        align-items: center;
        grid-gap: 16px;
        padding: 0 50px;
    `
    export const ProjectCards = styled.div`
        background: #fff;
        border-radius: 10px;
        height: 340px;
        width: 300px;
        padding: 30px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.2);
        transform: all 0.2 ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        }
    `
    export const ProjectH1 = styled.h1`
        font-size: 3.5rem;
        color: #fff;
        margin-bottom: 30px;
    `
    export const ProjectH3 = styled.h3`
        text-align: center;
        font-size: 0.9rem;
        margin-bottom: 10px;    
    `
    export const ProjectLi = styled.li`
       font-weight: none;
    `

    export const ProjectParagraphContainer = styled.div`
       margin-left: 2px;
    `
    export const ProjectP = styled.p`
        text-align: left;
    `


