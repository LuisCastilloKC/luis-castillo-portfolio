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
        display: flex;
        flex-direction: flex-start;
        align-items: center;
        border-radius: 10px;
        max-height: 340px;
        padding: 30px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.2);
        transform: all 0.2 ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
        }
    `

