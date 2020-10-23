import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border-radius: 10%;
  width: 20px;
  height: 20px;
  position: absolute;
  bottom: 10px;
  left: 340px;
  background-color: red;
  background: url(./button.jpg);
  background-size: contain;
  cursor: pointer;
  :active {
    box-shadow: none !important;
    transition: All 250ms ease;
  }
`;

export const Button = ({ handleClick }) => {
  return <StyledButton onClick={handleClick}></StyledButton>;
};

const StyledChannelButton = styled.button`
  border-radius: 10%;
  width: 30px;
  height: 20px;
  background-color: #333233;
  cursor: pointer;
  box-shadow: 0px 2px 0px #c4c4c4;
  display: inline-block;
  margin-right: 10px;
  bottom: 10px;
  color: white;
  :active {
    bottom: 8px;
    box-shadow: none !important;
    transition: All 250ms ease;
  }
  :focus {
    outline: none;
    border: none;
  }
`;

export const ChannelButton = ({ handleClick, text }) => {
  return (
    <StyledChannelButton onClick={() => handleClick(text)}>
      {text}
    </StyledChannelButton>
  );
};

const StyledChannelButtonContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 240px;
`;

export const ChannelButtonContainer = ({ children }) => {
  return (
    <StyledChannelButtonContainer>{children}</StyledChannelButtonContainer>
  );
};
