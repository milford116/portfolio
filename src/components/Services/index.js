import React from 'react';
import { Link } from 'react-router-dom';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import {ServiceP,Servicecard,Servicecontainer,Serviceh1,ServiceH2,Servicewrapper,Serviceicon, Servicelink} from './ServiceElement';

const Services = () => {
    return (
        <div id="Services">
          <Servicecontainer>
              <Serviceh1>
                  Our Services..
              </Serviceh1>
              <Servicewrapper>
                  <Servicecard>
                      <Serviceicon src = {Icon1} />
                      <ServiceH2>Weather app</ServiceH2>
                      <ServiceP>Get weather info of any city,check github</ServiceP>
                      <Servicelink href="https://github.com/milford116/Term-project" target="_blank" aria-label="Project">Click here</Servicelink>
                  </Servicecard>

                  <Servicecard>
                      <Serviceicon src = {Icon2} />
                      <ServiceH2>Game Project</ServiceH2>
                      <ServiceP>Java based games,check github</ServiceP>
                      <Servicelink href="https://github.com/milford116/weather" target="_blank" aria-label="game">Click here</Servicelink>
                  </Servicecard>
              </Servicewrapper>
          </Servicecontainer>  
        </div>
    )
}

export default Services
