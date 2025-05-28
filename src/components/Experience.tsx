import styled from 'styled-components';

const MainWrapper = styled.main`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 98%;
    margin: 0 auto;
    background-color: rgba(199, 196, 196, 0.78);
    padding: 2vh 1vw;
`;

const MainTitle = styled.h2`
    margin: 2vw 0;
    text-align: center;
    font-size: calc(2px + 2vw);
    color: rgb(0, 0, 0);
`;

const StyledImage = styled.img`
    align-self: center;
    width: 30%; 
`;

const MainContent = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 0 auto;
`;

const StyledParagraph = styled.p`
    margin: 0 auto;
    font-size: calc(2px + 1vw);
`;
export default function Expereince() {
    return (
        <MainWrapper>
            <MainTitle>Home Page</MainTitle>
            <StyledImage src="/images/IMG_9329.JPG" alt="Image of Jenny" />
            <MainContent id="main">
                <StyledParagraph>
                    My name is Jenny Li. I am currently a junior studying Computer Science at Boston University.
                    In the future, I want to be a Software Engineer and develop web applications to help other people. My hobbies include
                    playing the piano, gaming, and reading.
                    Please explore this page to learn more about me and my experience!
                </StyledParagraph>
            </MainContent>
        </MainWrapper>
    );
}