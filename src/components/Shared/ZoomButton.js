import React from "react";
import styled from "styled-components";

const StyledZoomButton = styled.button`
  opacity: 1;
  color: black;
  box-sizing: border-box;
  border-radius: 5%;
  width: 20px;
  height: 20px;
  cursor: pointer;
  background-color: white;
  margin-right: 5px;
  border: transparent;

  :focus {
    outline: 0;
  }

  :disabled {
    cursor: auto;
    opacity: 0.5;

    :hover {
      transform: scale(1);
      opacity: 0.5;
    }
  }
  :hover {
    opacity: 1;
    transform: scale(1.2);
  }
`;
export const ZoomButton = ({ handleClick, text, disabled }) => {
  return (
    <StyledZoomButton onClick={handleClick} disabled={disabled}>
      {text}{" "}
    </StyledZoomButton>
  );
};
