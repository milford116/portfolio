import React from 'react';
import {  ImgWrap,InfoContainer,InfoWrapper,InfoRow,Column,Column2,TopLine,Heading,Subtitle,BtnWrap,TextWrapper,Img} from './InfoElement'

const InfoSection = ({lightText,lightBg,img,imgStart,buttonLabel,topLine,headLine,darkText,id,description,alt}) => {
    return (
        <>
           <InfoContainer lightBg={lightBg} id ={id} >
           <InfoWrapper>
               <InfoRow imgStart={imgStart}>
                   <Column>
                       <TextWrapper>
                           <TopLine>
                              {topLine}
                           </TopLine>
                           <Heading lightText={lightText}>{headLine}</Heading>
                           <Subtitle darkText={darkText}>{description}</Subtitle>
                           <BtnWrap>
                              
                           </BtnWrap>
                       </TextWrapper>
                   </Column>
                   <Column2>
                       <ImgWrap>
                           <Img src={img} alt={alt}/>
                       </ImgWrap>
                   </Column2>
               </InfoRow>
               </InfoWrapper>
           </InfoContainer> 
        </>
    )
}

export default InfoSection
