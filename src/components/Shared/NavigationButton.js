import React from "react";
import styled from "styled-components";
import arrow from "../../images/arrow.png";

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

const StyledArrowButton = styled.button`
  position: fixed;
  top: 50vh;
  left: ${(props) => (props.direction ? `none` : `10px`)};
  right: ${(props) => (props.direction ? `10px` : `10px`)};
  width: 30px;
  height: 30px;
  padding: 0;
  border: none;
  transform: ${(props) =>
    props.direction ? `rotate(90deg)` : `rotate(-90deg)`};
  background-color: transparent;

  background-image: url(${arrow});
  background-repeat: no-repeat;
  background-size: contain;
  cursor: pointer;
  opacity: 0.8;

  :hover {
    opacity: 1;
  }

  :active {
    outline: none;
  }

  :focus {
    outline: none;
  }

  @keyframes arrow-blinker {
    50% {
      opacity: 0.3;
 ,   }
  }
  animation: arrow-blinker 2s linear infinite;
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

export const ArrowButton = ({ handleClick, direction }) => {
  return (
    <StyledArrowButton
      onClick={handleClick}
      direction={direction}
    ></StyledArrowButton>
  );
};
