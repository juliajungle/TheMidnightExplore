import React, { useState } from "react";
import styled, { css } from "styled-components";
import lavaLamp from "../../images/lavalamp.png";

const StyledWrapper = styled.div`
  position: absolute;
  top: ${(props) => props.cssTop}px; //30%; //70px;
  left: ${(props) => props.cssLeft}px;
  z-index: 100;
  width: ${(props) => props.cssWidth}px;
  height: ${(props) => props.cssHeight}px;
  cursor: pointer;
`;

const StyledLamp = styled.div`
  position: absolute;
  background-image: url(${lavaLamp});
  background-size: contain;
  background-repeat: no-repeat;
  width: ${(props) => props.cssWidth}px;
  height: ${(props) => props.cssHeight}px;
`;

const StyledLava = styled.div`
  filter: url("#goo");
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;

  // clip-path: polygon(27% 2%, 51% 0%, 78% 1%, 98% 99%, 51% 98%, 0% 99%);
  clip-path: polygon(34% 0, 70% 0, 99% 97%, 1% 97%);
`;

const blobStyles = css`
  border-radius: 50%;
  background: #ef4392;
  position: absolute;
`;

const StyledBlob1 = styled.div`
  ${blobStyles}
  width: calc(15% * 1.4);
  height: 15%;
  left: 45%;
  bottom: -15%;

  animation: blob-one ease-in-out 11s infinite;

  @keyframes blob-one {
    0%,
    100% {
      transform: translatey(0);
    }
    50% {
      transform: translatey(-700%);
    }
  }
`;

const StyledBlob2 = styled.div`
  ${blobStyles}
  width: calc(22% * 1.4);
  height: 22%;
  right: 14%;
  bottom: -15%;

  animation: blob-two ease-in-out 13s infinite;
  @keyframes blob-two {
    0%,
    100% {
      transform: translatey(0);
    }
    50% {
      transform: translatey(-420%);
    }
  }
`;

const StyledBlob3 = styled.div`
  ${blobStyles}
  width: calc(32% * 1.4);
  height: 32%;
  bottom: -15%;
  left: 14%;

  animation: blob-three ease-in-out 18s infinite;
  @keyframes blob-three {
    0%,
    100% {
      transform: translatey(0);
    }
    50% {
      transform: translatey(-305%);
    }
  }
`;

export const LavaLamp = ({ width }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    console.log("click");
    setShow(!show);
  };
  return (
    <StyledWrapper
      cssTop={width * 0.2 * 0.5625}
      cssLeft={width * 0.064}
      onClick={handleClick}
      cssWidth={width * 0.026}
      cssHeight={width * 0.099 * 0.5625}
    >
      {show && (
        <StyledLamp cssWidth={width * 0.026} cssHeight={width * 0.099 * 0.5625}>
          <StyledLava>
            <StyledBlob1 />
            <StyledBlob2 />
            <StyledBlob3 />
          </StyledLava>
        </StyledLamp>
      )}

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </StyledWrapper>
  );
};
