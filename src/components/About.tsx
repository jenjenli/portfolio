import styled from 'styled-components';
import React from 'react';

export default function About() {
  return (
    <AboutContainer>
      <AboutTitle>About Me</AboutTitle>
      <ContentWrapper>
        <Headshot src="/IMG_1798.JPG" alt="Jenny's Headshot" />
        <AboutText>
          Hey there! I am currently a senior at Boston University studying Computer Science with a 
          passion for building impactful applications. I love the blend of creativity and 
          logic in software engineering—whether I'm developing web apps, diving into algorithms,
           or collaborating on team projects. When I'm not coding, you'll find me exploring new 
           tech, grabbing matcha with friends, or debugging life one step at a time ☕💻.
        </AboutText>
      </ContentWrapper>
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const AboutTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 3rem;
  color: #333;
  font-weight: 300;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    gap: 4rem;
  }
`;

const Headshot = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 768px) {
    flex-shrink: 0;
  }
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  color: #666;
  max-width: 600px;
`;