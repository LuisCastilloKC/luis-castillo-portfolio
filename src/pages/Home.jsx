import React from 'react';
import { HomeContainerStyled } from '../styles/Container';


const Home = () => {
    return(
        <HomeContainerStyled>
              <div>
                <h3>Hi, I am</h3> 
                <h1>Luis Castillo</h1>
                <p>A Full-Stack Web Developer</p> 
            </div>
        </HomeContainerStyled>
    );
};

export default Home;