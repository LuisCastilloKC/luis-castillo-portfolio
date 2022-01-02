import React from 'react';
import { AboutContainerStyled } from '../styles/Container';

const About = () => {
    return (
        <AboutContainerStyled>
            <div>
                <h1>About Me</h1>

                <p>
                    I was a student at Flatiron School where I spent 10 months learning the fundamentals <br />
                    of front-end and back-end web development. I also worked over 10 years in the Retail industry <br />serving
                    satisfield clients. I have now become a Full-Stack Developer with strong undesting in software <br />programming and engineering.
                    Skills extend to both client-side and server-side code. A highly collaborative team player, adept <br />at learning
                    new technology, writing high-quality code, and observing best practices.
                </p>
            </div>
        </AboutContainerStyled>
    );
}
export default About;