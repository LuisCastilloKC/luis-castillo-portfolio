import React from 'react';
import { ProjectH1, ProjectH3, ProjectParagraphContainer, ProjectP, ProjectsContainerStyled, ProjectWrapper,ProjectCards } from '../styles/Container';


const Projects = () => {
    return (
        <> 
            
            <ProjectsContainerStyled id="projects">
            <ProjectH1>Projects</ProjectH1> 
                <ProjectWrapper>
                <a href="https://github.com/LuisCastilloKC/luis-castillo-portfolio" rel="noreferrer" target="_blank">            
                    <ProjectCards>
                        <ProjectH3>LuisCastillo PortFolio</ProjectH3>
                        <ProjectParagraphContainer>                      
                            <ProjectP>
                            ReactJS portfolio  a single page to show personal projects and a little about my self.
                            </ProjectP>
                            <br />
                                <ul> 
                                    <strong>Technology used</strong>
                                    <li>RactJS (FrontEnd) </li>
                                    <li>React Scroll</li>
                                    <li>React Icon</li>
                                    <li>Styled Components</li>
                                </ul>      
                        </ProjectParagraphContainer>
                    </ProjectCards>
                    </a>
                <a href="https://github.com/LuisCastilloKC/mlb_voting_app" rel="noreferrer" target="_blank">            
                    <ProjectCards>
                        <ProjectH3>MLB Voting App</ProjectH3>
                        <ProjectParagraphContainer>                         
                            <ProjectP>
                            React and Rails API app to allow users to create polls and vote for each player.
                            </ProjectP>
                            <br />
                                <ul> 
                                    <strong>Technology used</strong>
                                    <li>RactJS (FrontEnd) </li>
                                    <li>Rails (Backend) </li>
                                    <li>Redux</li>
                                    <li>Styled Components</li>
                                </ul>                          
                        </ProjectParagraphContainer>
                    </ProjectCards>
                    </a>
                    <a href="https://github.com/LuisCastilloKC/mlb-scouting-report-sinatra-project" rel="noreferrer" target="_blank"> 
                    <ProjectCards>
                        <ProjectH3>MLB Scouting Report</ProjectH3>
                        <ProjectParagraphContainer>
                            <ProjectP>
                            Sinatra web app that let user create scouting report for a baseball player.
                            </ProjectP>
                            <br />
                                <ul> 
                                    <strong>Technology used</strong>
                                    <li>Sinatra</li>
                                    <li>SQLite 3</li>
                                    <li>ActiveRecord</li>
                                </ul>
                        </ProjectParagraphContainer>
                    </ProjectCards>
                    </a>
                    <a href="https://github.com/LuisCastilloKC/MLB-baseball-card-collection-proj" rel="noreferrer" target="_blank"> 
                    <ProjectCards>
                        <ProjectH3>MLB Collection Card</ProjectH3>
                        <ProjectParagraphContainer>
                            <ProjectP>
                            Ruby on Rails app that stores baseball player collection cards in picture format and let other users comment cards.
                            </ProjectP>
                            <br />
                                <ul> 
                                    <strong>Technology used</strong>
                                    <li>Ruby On Rails </li>
                                    <li>Google Omni Auth</li>
                                    <li>Active Storage</li>
                                    <li>SQL</li>
                                </ul>
                        </ProjectParagraphContainer>
                    </ProjectCards>
                    </a>
                    <a href="https://github.com/LuisCastilloKC/player-log-mlb" rel="noreferrer" target="_blank"> 
                    <ProjectCards>
                        <ProjectH3>Player Log</ProjectH3>
                        <ProjectParagraphContainer>
                            <ProjectP>JavaScript app that allow user to create a team and add individual players to a team.
                            </ProjectP>
                            <br />
                                <ul> 
                                    <strong>Technology used</strong>
                                    <li>Vanilla JavaScript</li>
                                    <li>Rails API (Backend) </li>
                                    <li>CSS3</li>
                                </ul>
                        </ProjectParagraphContainer>
                    </ProjectCards>
                    </a>
                    <a href="https://github.com/LuisCastilloKC/mlb_cli" rel="noreferrer" target="_blank"> 
                    <ProjectCards>
                        <ProjectH3>NY Yakees Player Search (CLI)</ProjectH3>
                        <ProjectParagraphContainer>
                            <ProjectP>A Command-Line Interface built with Ruby. User can search the 40-Man Roster from the NY Yankees.
                            </ProjectP>
                            <br />
                                <ul> 
                                    <strong>Technology used</strong>
                                    <li>Ruby</li>
                                    <li>Yankees API</li>
                                </ul>
                        </ProjectParagraphContainer>
                    </ProjectCards>
                    </a>
                </ProjectWrapper>
            </ProjectsContainerStyled>
        </>
    );
}
export default Projects;

