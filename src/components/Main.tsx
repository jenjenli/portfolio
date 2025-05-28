import React, { useEffect, useRef, useState } from 'react';
import { keyframes, styled } from 'styled-components';
import About from './About';

declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

export function Main() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const loadScript = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) return resolve();
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(`Failed to load script: ${src}`);
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    const loadVanta = async () => {
      try {
        await loadScript('https://cdn.jsdelivr.net/npm/three@0.134.0/build/three.min.js');
        await loadScript('https://cdn.jsdelivr.net/gh/tengbao/vanta/dist/vanta.globe.min.js');

        if (!vantaEffect && window.VANTA?.GLOBE && vantaRef.current) {
          const effect = window.VANTA.GLOBE({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            color: 0xffffff,
            backgroundColor: 0x0d0d0d,
          });
          setVantaEffect(effect);
        }
      } catch (err) {
        console.error('Error loading Vanta:', err);
      }
    };

    loadVanta();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  useEffect(() => {
    if (vantaRef.current) {
      const canvas = vantaRef.current.querySelector('canvas');
      if (canvas) {
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.zIndex = '0';
      }
    }
  }, [vantaEffect]);

  return (
    <MainContainer>
      <MainHeader>
        <BackgroundContainer ref={vantaRef}>
          <TextContainer>
            <SlideRight>Hello, I'm <RedText>Jenny</RedText>.</SlideRight>
            <SlideLeft>I'm a passionate software engineer.</SlideLeft>
            <LearnMoreButton onClick={scrollToAbout}>Learn More</LearnMoreButton>
          </TextContainer>
        </BackgroundContainer>
      </MainHeader>

      <AboutSection ref={aboutRef}>
        <About />
      </AboutSection>
    </MainContainer>
  );
}

// Styled Components

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 0;
`;

const MainHeader = styled.div`
  width: 100%;
  height: 100vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #0d0d0d;
  position: relative;
  overflow: hidden;
`;

const RedText = styled.span`
  color: rgb(255, 77, 90);
`;

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  padding: 2rem;
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const LearnMoreButton = styled.button`
  background: transparent;
  border: 2px solid rgb(255, 77, 90);
  color: white;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 2rem;
  transition: all 0.3s ease;

  &:hover {
    background: rgb(255, 77, 90);
    color: white;
    transform: translateY(-2px);
  }
`;

const slideRight = keyframes`
  0% {
    transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideLeft = keyframes`
  0% {
    transform: translateX(50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const SlideRight = styled.h1`
  animation: ${slideRight} 1s ease-in-out forwards;
  margin: 0.5rem 0;
  font-size: 3rem;
  font-weight: 500;
  text-align: center;
`;

const SlideLeft = styled.h2`
  animation: ${slideLeft} 1s ease-in-out forwards;
  margin: 0.5rem 0;
  font-size: 1.5rem;
  font-weight: 300;
  text-align: center;
`;

const AboutSection = styled.div`
  min-height: 100vh;
  background: white;
  padding: 4rem 2rem;
`;