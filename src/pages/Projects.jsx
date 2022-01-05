import React from 'react';
import { ProjectH1, ProjectH3, ProjectParagraphContainer, ProjectP, ProjectsContainerStyled, ProjectWrapper,ProjectCards } from '../styles/Container';


const Projects = () => {
    return (
        <> 
            <ProjectsContainerStyled>
            <ProjectH1>Projects</ProjectH1> 
                <ProjectWrapper>
                    <ProjectCards>
                        <ProjectH3>My Nutritionist</ProjectH3>
                        <ProjectParagraphContainer>
                            <ProjectP>
                                Project in Progress.... 
                            </ProjectP>
                        </ProjectParagraphContainer>
                    </ProjectCards>
                    <ProjectCards>
                        <ProjectH3>MLB Voting App</ProjectH3>
                        <ProjectParagraphContainer>
                            <ProjectP>
                               This app is been created with RactJS in the front end and Rails-API
                               in the back in.

                               Languages
                               - RactJS (FrontEnd)
                               - Rails (Backend)

                               Library
                               - Redux
                               - Styled Components

                            </ProjectP>
                        </ProjectParagraphContainer>
                    </ProjectCards>
                    <ProjectCards>
                        <ProjectH3>Luis Castillo PortFolio</ProjectH3>
                        <ProjectParagraphContainer>
                            <ProjectP>Project Description go here and more for the project and I knoe ofedhng odf dong odd nodfn undo ndo od dos do ods bodubodubfudbu dou udfb udfbub u
                            </ProjectP>
                        </ProjectParagraphContainer>
                    </ProjectCards>
                    <ProjectCards>
                        <ProjectH3>MLB Scouting Report</ProjectH3>
                        <ProjectParagraphContainer>
                            <ProjectP>Project Description go here and more for the project and I knoe ofedhng odf dong odd nodfn undo ndo od dos do ods bodubodubfudbu dou udfb udfbub u
                            </ProjectP>
                        </ProjectParagraphContainer>
                    </ProjectCards>
                    <ProjectCards>
                        <ProjectH3>MLB Collection Card</ProjectH3>
                        <ProjectParagraphContainer>
                            <ProjectP>Project Description go here and more for the project and I knoe ofedhng odf dong odd nodfn undo ndo od dos do ods bodubodubfudbu dou udfb udfbub u
                            </ProjectP>
                        </ProjectParagraphContainer>
                    </ProjectCards>
                    <ProjectCards>
                        <ProjectH3>Player Log</ProjectH3>
                        <ProjectParagraphContainer>
                            <ProjectP>Project Description go here and more for the project and I knoe ofedhng odf dong odd nodfn undo ndo od dos do ods bodubodubfudbu dou udfb udfbub u
                            </ProjectP>
                        </ProjectParagraphContainer>
                    </ProjectCards>
                    <ProjectCards>
                        <ProjectH3>NY Yakees Player Search (CLI)</ProjectH3>
                        <ProjectParagraphContainer>
                            <ProjectP>Project Description go here and more for the project and I knoe ofedhng odf dong odd nodfn undo ndo od dos do ods bodubodubfudbu dou udfb udfbub u
                            </ProjectP>
                        </ProjectParagraphContainer>
                    </ProjectCards>
                </ProjectWrapper>
            </ProjectsContainerStyled>
        </>
    );
}
export default Projects;

