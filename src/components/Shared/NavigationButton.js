import React from "react";
import styled from "styled-components";
import arrow from "../../images/arrow.png";

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

export const ArrowButton = ({ handleClick, direction }) => {
  return (
    <StyledArrowButton
      onClick={handleClick}
      direction={direction}
    ></StyledArrowButton>
  );
};
