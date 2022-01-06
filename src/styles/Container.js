import styled from 'styled-components'


    export const HomeContainerStyled = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 30px;
        height: 600px;
        position: relative;
        z-index: 1;
    `;

    export const HomeContent = styled.div`
        z-index: 3;
        max-width: 1200px;
        position: absolute;
        padding: 8px 24px;
        display: flex;
        flex-direction: column;
        align-items: left;

    @media screen and (max-width: 768px){
        font-size: 15px;
        padding: 8px auto 8px auto;

    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    } 
    `

    export const HomeH1 = styled.h1`
        color: #fff;
        font-size: clamp(40px, 8vw, 80px);
        font-weight: bold;

        @media screen and (max-width: 768px){
            font-size: 3rem;
        }

        @media screen and (max-width: 480px){
            font-size: 32px;
        }
    `
    export const HomeH3 = styled.h3`
        color: #fee12b;
        font-size: clamp(15px, 18px, 25px);
        font-weight: bold;
    `
    export const HomeP = styled.p`
        color: #D3D3D3;;
        font-size: 20px;
        max-width: 620px;

        @media screen and (max-width: 768px){
            font-size: 20px;    
        }

        @media screen and (max-width: 480px){
            font-size: 18px;
        }
    `

    export const AboutContainerStyled = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        margin: 0 24px;
    `

    export const AboutWrapper = styled.div`
        display: grid;
        z-index: 1;
        height: 860px;
        width: 100%;
        max-width: 1100px;
        margin-right: auto;
        margin-left: auto;
    `

    export const AboutContentContainer = styled.div`
        display:flex;
        background: transparent;
        margin: 0px 200px 0px 200px;

        @media screen and (max-width: 768px){
            margin: 0px auto 0px auto;    
        }
    `
    export const AboutH1 = styled.h1`
        color: #fff;
        font-size: 3.5rem;
        margin-bottom: 30px;
    `
    export const AboutP = styled.p`
        color: #D3D3D3;
        text-align: left;
        font-size: 20px;
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
    


