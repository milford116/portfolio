import React from 'react';
import Video from '../../videos/video.mp4';
import {HeroContainer,HeroBg,VideoBg,HeroContent,HeroH1,Herop} from './Heroelement';

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoplay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Web Development!!
                </HeroH1>
                <Herop>
                    Contact For Web develop and Embrace New!!!
                </Herop>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
