import React, { useState } from "react";
import styled from "styled-components";
import light from "../../images/light.png";

const StyledWrapper = styled.div`
  position: absolute;
  top: ${(props) => props.cssTop}px; //30%; //70px;
  left: ${(props) => props.cssLeft}px;
  z-index: 100;
  width: ${(props) => props.cssWidth}px;
  height: ${(props) => props.cssHeight}px;
  cursor: pointer;
`;

const StyledBlinkingImage = styled.img`
  position: absolute;
  width: ${(props) => props.cssWidth}px;
  transform: skew(-2deg, -2deg);
  animation: imageBlinker 2s ease-in-out infinite;

  @keyframes imageBlinker {
    50% {
      opacity: 0.3;
    }
  }
`;
export const Light = ({ width }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <StyledWrapper
      cssTop={width * 0.253 * 0.5625}
      cssLeft={width * 0.5624}
      onClick={handleClick}
      cssWidth={width * 0.21}
      cssHeight={width * 0.16 * 0.5625}
    >
      {show && <StyledBlinkingImage src={light} cssWidth={width * 0.21} />}
    </StyledWrapper>
  );
};
