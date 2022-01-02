import styled from 'styled-components'

    export const HomeContainerStyled = styled.div`
    
    color: #fff;
    display: flex;
    text-align: left;
    flex-direction: column;
    margin: 10em 0em 25em 15em;
    

    .hello {
        color: #fee12b;
        font-size: clamp(15px, 18px, 25px);
        font-weight: bold;
        margin-left: 5px;
    }

    .name {
        
        font-size: clamp(40px, 8vw, 80px);
        font-weight: bold;
    }

    .intro {
        margin-left: 5px;
    }


    @media (max-width: 768px) {
        margin: 10em 0em 30em 5em;
  }


`;

    export const AboutContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-bottom: 600px;

    `

    export const AboutWrapper = styled.div`
        display: flex;
        flex-direction: flex-start;
        justify-content: center;
        padding: 0 100px;
    `

    export const AboutContentContainer = styled.div`
        background: transparent;
    `
    export const AboutH1 = styled.h1`
        color: #fff;
        font-size: 3.5rem;
        margin-bottom: 30px;
    `
    export const AboutP = styled.p`
        color: #fff;
        text-align: left;
        font-size: 14px;
        line-height: 1.3;
        
    `

    export const ProjectsContainerStyled = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 100px;
    `
    export const ProjectWrapper = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr ;
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
    


