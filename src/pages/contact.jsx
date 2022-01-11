import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedinIn, FaTwitter} from 'react-icons/fa' 
import { ContactContainer, 
        ContactH1, 
        ContactWrapper, 
        ContactContent, 
        ConctactH2, 
        ContactP, 
        ContactGitHubIcon, 
        ContactLinkedInIcon, 
        ContactTwitterIcon, 
        ContactEmailIcon,
        ContactLinkContainer } from '../styles/Container';

const Contact = () => {
    return (
        <ContactContainer id="contact">
            <ContactH1>Say Hello</ContactH1>
            <ContactWrapper>
                <ContactContent>
                    <ConctactH2>Lets Connect!</ConctactH2>
                    <ContactP>I'm currently open to work for Front-end Developer, Back-end Developer, Full-Stack Developer. Get in touch 
                        with one of these method to get me.</ContactP>
            <ContactLinkContainer>
                <ContactGitHubIcon> 
                    <a href="https://github.com/LuisCastilloKC" rel="noreferrer" target="_blank"><FaGithub /></a>
                </ContactGitHubIcon>
                <ContactLinkedInIcon> 
                    <a href="https://www.linkedin.com/in/luis-castillokc" rel="noreferrer" target="_blank"><FaLinkedinIn /></a>
                </ContactLinkedInIcon >
                <ContactTwitterIcon> 
                    <a href="https://twitter.com/LuisCastilloKC" rel="noreferrer" target="_blank"><FaTwitter /></a>
                </ContactTwitterIcon>
                <ContactEmailIcon> 
                    <a href="mailto:mr.luiscastillo@gmail.com" rel="noreferrer" target="_blank"><FaEnvelope /></a>
                </ContactEmailIcon>
            </ContactLinkContainer>
                </ContactContent>        
            </ContactWrapper>
        </ContactContainer>
    );
}

export default Contact;