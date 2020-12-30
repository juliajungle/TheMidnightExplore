import React from "react";
import styled from "styled-components";

const StyledNavigationButton = styled.button`
  position: absolute;
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;
  width: 10px;
  height: 10px;
  padding: 0;
  border-radius: 100%;
  border-style: solid;
  background-color: transparent;
  box-shadow: #aa1389 0px 0px 7px 3px;
  cursor: pointer;
  opacity: 0.3;
  border-color: white;

  :hover {
    opacity: 1;
    border-style: solid;
  }

  :active {
    outline: none;
  }

  :focus {
    outline: none;
  }

  @keyframes nav-blinker {
    50% {
      opacity: 0;
    }
  }
  animation: nav-blinker 1s linear infinite;
`;

export const NavigationButton = ({ handleClick, x, y }) => {
  return (
    <StyledNavigationButton
      x={x ? x : 0}
      y={y ? y : 0}
      onClick={handleClick}
    ></StyledNavigationButton>
  );
};
