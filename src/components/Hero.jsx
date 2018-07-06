import React from 'react';
import styled from 'styled-components';
import micImage from '../assets/microphone.jpeg';
// Import components
import Button from '@material-ui/core/Button';

const StyledHero = styled.div`
  background-image: url(${micImage});
  background-position: center;
  background-size: cover;
  padding: 20vh 7vw 15vh 7vw;
  position: relative;

  .overlay {
    background-color: ${props => props.theme.primary};
    height: 100%;
    left: 0;
    opacity: 0.6;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  .content {
    position: relative;
    z-index: 2;
  }

  h1 {
    color: white;
    font-family: ${props => props.theme.roboto};
    font-size: 2em;
    margin-top: 0;

    @media (min-width: 768px) {
      font-size: 4.5em;
    }
  }

  .hidden-mobile {
    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const Hero = () => (
  <StyledHero>
    <div className="content">
      <h1>
        CollabEvents is your way<br className="hidden-mobile" />to stay
        connected with your group
      </h1>
      <Button variant="contained" color="secondary">
        Learn More
      </Button>
    </div>
    <div className="overlay" />
  </StyledHero>
);

export default Hero;
