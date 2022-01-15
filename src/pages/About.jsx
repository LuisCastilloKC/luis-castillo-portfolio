import React from 'react';
import { AboutContainerStyled, 
        AboutWrapper, 
        AboutContentContainer, 
        AboutH1, 
        AboutP, 
        LanguageIcon,
        LanguageImage, LanguageImageWrapper, LanguagueNameH2, LanguageP } from '../styles/Container';
import  LanguagesImage from '../img/index';
 

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
                            <LanguagueNameH2>My Stack</LanguagueNameH2>
                            <LanguageP>CSS3 | HTM5 | Git | JavaScript | PostgreSQL | Rails | ReactJS | Redux | Ruby | Styled Component</LanguageP>
                    <LanguageImageWrapper>
                            <LanguageIcon>
                                <LanguageImage src={LanguagesImage.css3Logo} alt={'css3'}/>
                            </LanguageIcon>
                            <LanguageIcon>
                                <LanguageImage src={LanguagesImage.html5Logo} alt={'css3'}/>
                            </LanguageIcon>
                            <LanguageIcon>
                                <LanguageImage src={LanguagesImage.gitLogo} alt={'css3'}/>
                            </LanguageIcon>
                            <LanguageIcon>
                                <LanguageImage src={LanguagesImage.javascriptLogo} alt={'css3'}/>
                            </LanguageIcon>
                            <LanguageIcon>
                                <LanguageImage src={LanguagesImage.postgresqlLogo} alt={'css3'}/>
                            </LanguageIcon>
                            <LanguageIcon>
                                <LanguageImage src={LanguagesImage.railsLogo} alt={'css3'}/>
                            </LanguageIcon>
                            <LanguageIcon>
                                <LanguageImage src={LanguagesImage.reactjsLogo} alt={'css3'}/>
                            </LanguageIcon>
                            <LanguageIcon>
                                <LanguageImage src={LanguagesImage.reduxLogo} alt={'css3'}/>
                            </LanguageIcon>
                            <LanguageIcon>
                                <LanguageImage src={LanguagesImage.rubyLogo} alt={'css3'}/>
                            </LanguageIcon>
                            <LanguageIcon>
                                <LanguageImage src={LanguagesImage.styledcomponentLogo} alt={'css3'}/>
                            </LanguageIcon>
                     </LanguageImageWrapper>
                </AboutWrapper>
            </AboutContainerStyled>

        </>
    );
}
export default About;