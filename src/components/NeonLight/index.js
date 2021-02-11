import React, { useState } from "react";
import styled from "styled-components";
import { HEIGHT_RATIO } from "../../const";
import light from "../../images/light.png";

const StyledWrapper = styled.div`
  position: absolute;
  top: ${(props) => props.cssTop}px; //30%; //70px;
  left: ${(props) => props.cssLeft}px;
  z-index: 10;
  width: ${(props) => props.cssWidth}px;
  height: ${(props) => props.cssHeight}px;
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

const StyledButton = styled.button`
  position: absolute;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
  width: ${(props) => props.width}px;

  height: ${(props) => props.height}px;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

export const NeonLight = ({ width }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <StyledWrapper
      cssTop={width * 0.253 * HEIGHT_RATIO}
      cssLeft={width * 0.5624}
      cssWidth={width * 0.21}
      cssHeight={width * 0.16 * HEIGHT_RATIO}
    >
      {show && <StyledBlinkingImage src={light} cssWidth={width * 0.21} />}
      <StyledButton
        x={width * 0.01}
        y={width * 0.02 * HEIGHT_RATIO}
        width={width * 0.17}
        height={width * 0.13 * HEIGHT_RATIO}
        onClick={handleClick}
      ></StyledButton>
    </StyledWrapper>
  );
};
