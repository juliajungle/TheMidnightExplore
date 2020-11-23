import React from "react";
import styled from "styled-components";
import { COLORS } from "../../const";

const StyledZoomButton = styled.button`
  opacity: 0.8;

  color: ${(props) => props.backgroundColor};
  box-sizing: border-box;
  border-radius: 10%;
  width: 25px;
  cursor: pointer;
  font-size: 18px;
  background-color: white;
  margin-right: 5px;
  border: transparent;
  box-shadow: #aa1389 0px 0px 7px 5px;

  :disabled {
    color: ${(props) => props.disabledColor};
    cursor: auto;
    opacity: 0.5;
    box-shadow: none;
    :hover {
      color: ${(props) => props.disabledColor};
      opacity: 0.5;
    }
  }
  :hover {
    color: ${(props) => props.hoverColor};
    opacity: 1;
  }
`;
export const ZoomButton = ({ handleClick, text, disabled }) => {
  return (
    <StyledZoomButton
      onClick={handleClick}
      disabled={disabled}
      backgroundColor={COLORS.pink}
      disabledColor={COLORS.lightGrey}
      hoverColor={COLORS.lightPink}
    >
      {text}{" "}
    </StyledZoomButton>
  );
};
