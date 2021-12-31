import React from 'react';
import { HomeContainerStyled } from '../styles/Container';
import { FaEnvelope, FaGithub, FaLinkedinIn, FaTwitter} from 'react-icons/fa'
import { SocialMedia } from '../styles/SocialMedia';



const Home = () => {
    return(
    <> 
        <HomeContainerStyled>
              <div>
                <h3>Hi, I am</h3> 
                <h1>Luis Castillo</h1>
                <p>A Full-Stack Web Developer</p> 
            </div>
        </HomeContainerStyled>
        <SocialMedia>
            <div> 
                <a href="https://github.com/LuisCastilloKC" rel="noreferrer" target="_blank"><FaGithub /></a>
            </div>
            <div> 
                <a href="https://www.linkedin.com/in/luis-castillokc" rel="noreferrer" target="_blank"><FaLinkedinIn /></a>
            </div>
            <div> 
                <a href="https://twitter.com/LuisCastilloKC" rel="noreferrer" target="_blank"><FaTwitter /></a>
            </div>
            <div> 
                <a href="mailto:mr.luiscastillo@gmail.com" rel="noreferrer" target="_blank"><FaEnvelope /></a>
            </div>
        </SocialMedia>
    </>
    );
};

export default Home;