import React from "react";
import styled, { css } from "styled-components";

const AIStyles = css`
  display: block;
  height: 23px;
  width: auto;
  align-self: flex-end;
  margin-right: 20px;
  background-color: black;
  color: white;
  border: 1px solid transparent;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
  :hover {
    background-color: white;
    color: black;
    border-color: black;
  }
`;

const StyledSubmit = styled.input`
  ${AIStyles}
  margin: auto;
  margin-right: 20px;
`;

const StyledAIButton = styled.button`
  ${AIStyles}
  margin: auto;
  margin-right: 0;
`;

export const AISubmit = ({ text }) => {
  return <StyledSubmit type="submit" value={text} />;
};

export const AIButton = ({ handleClick, text }) => {
  return <StyledAIButton onClick={handleClick}>{text}</StyledAIButton>;
};
