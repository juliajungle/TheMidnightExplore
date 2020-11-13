import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Bedroom } from "./Bedroom";
import { ANIMATION_CONFIG, ENV } from "./const";

const StyledApp = styled.div`
  width: 100%;
  height: 100%; // transform: scale(1.5);
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 100%;
  @keyframes intro {
    0% {
      transform: scale(1);
    }

    80% {
      opacity: 1;
    }

    90% {
      opacity: 0.8;
    }

    100% {
      transform: scale(6) translate(-12%, -10%);
      opacity: 0;
    }
  }

  animation: intro ${(props) => props.time}s ease-in;
  animation-fill-mode: forwards;
`;

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const { loadingTime, introImage } = ANIMATION_CONFIG[ENV];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, `${loadingTime}`);
  }, []);

  return (
    <div>
      {isLoading && (
        <StyledApp>
          <StyledImage time={introImage} src="sunset.png"></StyledImage>
        </StyledApp>
      )}
      {!isLoading && (
        <Bedroom loadingTime={loadingTime} animationTime={introImage} />
      )}
    </div>
  );
};

export default App;
