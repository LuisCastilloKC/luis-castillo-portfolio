import React from 'react';
import '../App.css'
import { ProjectH1, ProjectH3, ProjectParagraphContainer, ProjectP, ProjectsContainerStyled, ProjectWrapper,ProjectCards } from '../styles/Container';


const Projects = () => {

    return (
        <> 
            <ProjectsContainerStyled id="projects">
            <ProjectH1>Projects</ProjectH1> 
                <ProjectWrapper>
                    <ProjectCards>
                        <ProjectH3>Wallet Zen</ProjectH3>
                        <ProjectParagraphContainer>
                            <ProjectP>Wallet Zen is a budget app enabling users to create a personal financial budget and allow you to add expenses in different category.
                            </ProjectP>
                            <br />
                                <ul> 
                                    <strong>Technology used</strong>
                                    <li>ReactJS</li>
                                    <li>NodeJS</li>
                                    <li>Bootstrap 5</li>
                                    <li>PostgreSQL</li>
                                </ul>
                                <br />
                                <a href="https://github.com/chingu-voyages/v39-bears-team-08" rel="noreferrer" target="_blank">GitHub</a> {"  "}| {" "}
                                <a href="http://wallet-zen.herokuapp.com/" rel="noreferrer" target="_blank">Live Demo</a>
                        </ProjectParagraphContainer>
                    </ProjectCards>
                    <ProjectCards>
                        <ProjectH3>Durante</ProjectH3>
                        <ProjectParagraphContainer>
                            <ProjectP>Durante is a phone book web app ideal for students and working professionals. You can access, store and update your contacts from any device.
                            </ProjectP>
                            <br />
                                <ul> 
                                    <strong>Technology used</strong>
                                    <li>CSS3</li>
                                    <li>HTML5</li>
                                    <li>JavaScript</li>
                                    <li>Ruby on Rails API</li>
                                </ul>
                                <br />
                                <a href="https://github.com/chingu-voyages/v38-toucans-team-01" rel="noreferrer" target="_blank">GitHub</a> {"  "}| {" "}
                                <a href="https://durante-main.herokuapp.com/login.html" rel="noreferrer" target="_blank">Live Demo</a>
                        </ProjectParagraphContainer>
                    </ProjectCards>
                 
                   
                           
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
                                <br />
                                <br />
                                <a href="https://github.com/LuisCastilloKC/mlb_voting_app" rel="noreferrer" target="_blank">GitHub</a> {"  "}| {" "}
                                <a href="http://mlb-voting.herokuapp.com/" rel="noreferrer" target="_blank">Live Demo</a>                          
                        </ProjectParagraphContainer>
                    </ProjectCards>
                  
                         
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
                                <br />
                                <br />
                                <a href="https://github.com/LuisCastilloKC/luis-castillo-portfolio" rel="noreferrer" target="_blank">GitHub</a> {"  "}| {" "}
                                <a href="https://www.luiscastillo.dev" rel="noreferrer" target="_blank">Live Demo</a>
                                     
                        </ProjectParagraphContainer>
                    </ProjectCards>
                   
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

