import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import {Footercontainer,Footerlink,Footerlinkcontainer,Footerlinkitems,FooterlinkTitle,FooterWrap,Footerlinkwrapper,SocialMedia,
SocialLogo,Socialiconlink,Socialmediawrap,WebsiteRights,Socialicons} from './Footerelement';

const Footer = () => {
    return (
       <Footercontainer>
       <FooterWrap>
       <Footerlinkcontainer>
       <Footerlinkwrapper>
       <Footerlinkitems>
       <FooterlinkTitle>About us </FooterlinkTitle>
       <Footerlink to='/signin'>How it works</Footerlink>
       <Footerlink to='/signin'>Testimonials</Footerlink>
       <Footerlink to='/signin'>Careers</Footerlink>
       <Footerlink to='/signin'>Investors</Footerlink>
       <Footerlink to='/signin'>Terms of Service</Footerlink>
      
       </Footerlinkitems>
       </Footerlinkwrapper>
       </Footerlinkcontainer>
       <SocialMedia>
       <Socialmediawrap>
       <SocialLogo to='/'>
       Home
       </SocialLogo>
       <WebsiteRights>
       logo {new Date().getFullYear()}
       All Rights reserved.</WebsiteRights>
      
       <Socialicons>
       <Socialiconlink href="https://www.facebook.com/angel.urmi0098" target="_blank" aria-label="Facebook">
       <FaFacebook/>
       </Socialiconlink>

       <Socialiconlink href="/" target="_blank" aria-label="Youtube">
       <FaYoutube/>
       </Socialiconlink>

       <Socialiconlink href="https://www.linkedin.com/in/mobashwira-urmi-2694661b2/" target="_blank" aria-label="Linkedin">
       <FaLinkedin/>
       </Socialiconlink>

       <Socialiconlink href="https://github.com/milford116" target="_blank" aria-label="github">
       <FaGithub/>
       </Socialiconlink>


       </Socialicons>
       </Socialmediawrap>
       </SocialMedia>
       </FooterWrap>
       </Footercontainer>
    )
}

export default Footer
