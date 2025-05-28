import styled from 'styled-components';
import React from 'react';

export default function About() {
  return (
    <AboutContainer>
      <AboutTitle>About Me</AboutTitle>
      <ContentWrapper>
        <Headshot src="/IMG_1798.JPG" alt="Jenny's Headshot" />
        <AboutText>
          Hey there! I'm a senior at Boston University, majoring in Computer Science and 
          on an exciting journey to become a software engineer. I love building things with 
          code—whether it's a small tool to make life easier or a full-blown app that solves 
          real-world problems. Over the past few years, I've dived into everything from web 
          development to algorithms, and I've had so much fun learning along the way. What 
          draws me to software engineering is the perfect mix of creativity and logic. I'm 
          always curious, always learning, and always looking for new ways to grow. 
          Whether I'm working solo or collaborating with a team, I bring energy, focus, 
          and a genuine enthusiasm for building cool things that make an impact. When I'm 
          not coding, you can probably find me exploring new tech, grabbing coffee with friends,
          or trying to debug life one step at a time ☕💻.
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