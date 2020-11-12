import React from "react";
import styled from "styled-components";

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
    // box-shadow: none;
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
