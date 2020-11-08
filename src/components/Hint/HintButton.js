import React from "react";
import styled from "styled-components";

// Icon by Kit of Parts
const HintSVG = () => {
  return (
    <svg
      fill="#c21a95"
      width="30px"
      height="30px"
      id="Outlined"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title />
      <g id="Fill">
        <path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z" />
        <path d="M18,7H14a3,3,0,0,0-3,3v2h2V10a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v1.17a1,1,0,0,1-.29.71l-2.83,2.83A3,3,0,0,0,15,16.83V20h2V16.83a1,1,0,0,1,.29-.71l2.83-2.83A3,3,0,0,0,21,11.17V10A3,3,0,0,0,18,7Z" />
        <circle cx="16" cy="24" r="2" />
      </g>
    </svg>
  );
};

const Circle = () => (
  <svg fill="#c21a95" width="30px" height="30px" viewBox="0 0 32 32">
    <path d="M16,2A14,14,0,1,0,30,16,14,14,0,0,0,16,2Zm0,26A12,12,0,1,1,28,16,12,12,0,0,1,16,28Z" />
  </svg>
);

const StyledHintButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  border-radius: 10%;
  background-color: white;
  box-shadow: #aa1389 0px 0px 7px 5px;
  :focus {
    outline: none;
    border: none;
  }
  :active {
    box-shadow: none;
  }
`;

export const HintButton = ({ handleClick }) => {
  return (
    <StyledHintButton onClick={handleClick}>
      <HintSVG />
    </StyledHintButton>
  );
};

const StyledNavigationButton = styled.button`
  position: absolute;
  background: ${(props) => props.icon || 0}px;
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;
  width: 10px;
  height: 10px;
  padding: 0;
  border-radius: 100%;
  background-color: transparent;
  box-shadow: #aa1389 0px 0px 7px 3px;
  cursor: pointer;
  opacity: 0.3;
  :focus {
    outline: none;
    border: none;
  }
  :active {
    box-shadow: none;
  }
  :hover {
    opacity: 1;
  }

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
  animation: blinker 1s linear infinite;
`;

export const NavigationButton = ({ handleClick, x, y }) => {
  return (
    <StyledNavigationButton
      x={x}
      y={y}
      onClick={handleClick}
    ></StyledNavigationButton>
  );
};

// export const BackButton = ({ handleClick, x, y }) => {
//   return (
//     <StyledNavigationButton
//       x={x}
//       y={y}
//       onClick={handleClick}
//     ></StyledNavigationButton>
//   );
// };
