import React from 'react';
import { ProjectsContainerStyled, TitleStyled } from '../styles/Container';

const Projects = () => {
    return (
        <> 
            <TitleStyled>Projects</TitleStyled> 
            <ProjectsContainerStyled>
                <div className='pj'>P1</div>
                <div className='pj'>P2</div>
                <div className='pj'>P3</div>
            </ProjectsContainerStyled>
        </>
    );
}
export default Projects;
