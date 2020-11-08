import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Bedroom } from "./Bedroom";

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
      transform: scale(6) translate(-130px, -100px);
      opacity: 0;
    }
  }

  animation: intro 10s ease-in;
  animation-fill-mode: forwards;
`;

const App = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 11000);
  }, []);

  return (
    <div>
      {isLoading && (
        <StyledApp>
          <StyledImage src="sunset.png"></StyledImage>
        </StyledApp>
      )}
      {!isLoading && <Bedroom />}
    </div>
  );
};

export default App;
