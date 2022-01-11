import React from 'react';
import { AboutContainerStyled, AboutWrapper, AboutContentContainer, AboutH1, AboutP} from '../styles/Container';

const About = () => {
    return (
        <> 
            <AboutContainerStyled id="about">
                    <AboutH1>About Me</AboutH1>
                <AboutWrapper>
                    <AboutContentContainer>
                        <AboutP>
                            I was a student at Flatiron School where I spent 10 months learning the fundamentals 
                            of front-end and back-end web development. I also worked over 10 years in the Retail industry serving
                            satisfield clients. I have now become a Full-Stack Developer with strong understanding in software programming and engineering.
                            Skills extend to both client-side and server-side code. A highly collaborative team player, adept at learning
                            new technology, writing high-quality code, and observing best practices.
                        </AboutP>
                    </AboutContentContainer>
                </AboutWrapper>
            </AboutContainerStyled>
        </>
    );
}
export default About;