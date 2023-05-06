import React from 'react';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg'
const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  height: calc(100vh - 70px); // 70px is the height of the navbar
`;

const TextWrapper = styled.div`
  width: 50%;
  padding-left: 10%;
`;

const MainText = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: #000000;
  margin-bottom: 1rem;
`;

const SubText = styled.p`
  font-size: 1.5rem;
  color: #4F4F4F;
  margin-bottom: 2rem;
`;

const SVGWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SpanWrapper = styled.span`
    font-size: 4rem;    
    color: black;
    background-color: #eae0fe;
`;
const ButtonWrapper = styled.button`

background-color: #5169f6;
  color: #fff;
  border-radius: 50px;
  font-size: 24px;
  padding: 16px 32px;
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
`;
const Hero = () => {
  return (
    <HeroWrapper>
      <TextWrapper>
        <MainText>Get the best talent with <SpanWrapper className='proof'>proof of work</SpanWrapper></MainText>
        <SubText>Hire from the biggest pre-screened talent pool in the country in 15 minutes.</SubText>
        <ButtonWrapper>Hire now</ButtonWrapper>
      </TextWrapper>
      <SVGWrapper>
      
        <img style={{height:400,width:580}} src="https://img.freepik.com/free-vector/happy-freelancer-with-computer-home-young-man-sitting-armchair-using-laptop-chatting-online-smiling-vector-illustration-distance-work-online-learning-freelance_74855-8401.jpg?w=1060&t=st=1683393695~exp=1683394295~hmac=18cebb35194d28d8c55272774006813dd5e5f066dbfb1eaddc7debcf341e09df" className='img-fluid animated' alt="value"/>
        
      </SVGWrapper>
      
    </HeroWrapper>
  );
};

export default Hero;