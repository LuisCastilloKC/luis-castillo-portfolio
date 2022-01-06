import React from 'react';
import { HomeContainerStyled, HomeContent, HomeH1, HomeP,HomeH3 } from '../styles/Container';
import { FaEnvelope, FaGithub, FaLinkedinIn, FaTwitter} from 'react-icons/fa'
import { SocialMedia } from '../styles/SocialMedia';



const Home = () => {
    return(
    <> 
    <HomeContainerStyled id="/">
        <HomeContent> 
            <HomeH3>Hi, I am</HomeH3>
            <HomeH1>Luis Castillo</HomeH1>
            <HomeP >
            A Full-Stack Web Developer base on New York, USA. 
            I love buildingtools that are user-friendly, simple and delighful.
            </HomeP>
            </HomeContent>
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