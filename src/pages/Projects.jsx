import React from 'react';
import { ProjectH1, ProjectH2, ProjectsContainerStyled, ProjectWrapper,ProjectCards } from '../styles/Container';


const Projects = () => {
    return (
        <> 
            <ProjectsContainerStyled>
            <ProjectH1>Projects</ProjectH1> 
                <ProjectWrapper>
                    <ProjectCards>
                        <ProjectH2>Project 1</ProjectH2>                       
                    </ProjectCards>
                    <ProjectCards>
                        <ProjectH2>Project 2</ProjectH2>                       
                    </ProjectCards>
                    <ProjectCards>
                        <ProjectH2>Project 3</ProjectH2>                       
                    </ProjectCards>
                    <ProjectCards>
                        <ProjectH2>Project 4</ProjectH2>                       
                    </ProjectCards>
                </ProjectWrapper>
            </ProjectsContainerStyled>
        </>
    );
}
export default Projects;

