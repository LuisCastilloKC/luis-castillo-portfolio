import React from 'react';
import { HomeContainerStyled } from '../styles/Container';
import { FaEnvelope, FaGithub, FaLinkedinIn, FaTwitter} from 'react-icons/fa'
import { SocialMedia } from '../styles/SocialMedia';



const Home = () => {
    return(
    <> 
        <HomeContainerStyled>
            <div className='hello'>Hi, I am</div>
            <div className='name'>Luis Castillo</div>
            <div className='intro'>
            A Full-Stack Web Developer with passion for creating
            the new technologies 
            </div>
        </HomeContainerStyled>
        <SocialMedia>
            <div className='icon'> 
                <a href="https://github.com/LuisCastilloKC" rel="noreferrer" target="_blank"><FaGithub /></a>
            </div>
            <div className='icon'> 
                <a href="https://www.linkedin.com/in/luis-castillokc" rel="noreferrer" target="_blank"><FaLinkedinIn /></a>
            </div >
            <div className='icon'> 
                <a href="https://twitter.com/LuisCastilloKC" rel="noreferrer" target="_blank"><FaTwitter /></a>
            </div>
            <div className='icon'> 
                <a href="mailto:mr.luiscastillo@gmail.com" rel="noreferrer" target="_blank"><FaEnvelope /></a>
            </div>
        </SocialMedia>
    </>
    );
};

export default Home;