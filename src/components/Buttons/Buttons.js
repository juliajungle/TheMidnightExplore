import React from "react";
import styled, { css } from "styled-components";

// TODO: make generic Button component or styles

const pink = "#c21a95";
const darkPink = "#4f1840";
const darkGrey = "#333233";
const lightGrey = "#c4c4c4";

const StyledButton = css`
  box-sizing: border-box;
  border-radius: 10%;
  cursor: pointer;
  font-size: 18px;
  padding: 0;
`;

const StyledSVGButton = styled.button`
  ${StyledButton}
  height: 30px;
  background-color: black;
  border: 1px solid ${pink};

  :hover {
    border: 1px solid black;
    background-color: white;
  }
`;

const StyledTVButton = styled.button`
  ${StyledButton}
  width: 25px;
  height: 25px;
  background: url(./button.jpg);
  background-size: contain;
`;

const StyledTVButtonContainer = styled.div`
  position: absolute;
  bottom: 3px;
  left: 340px;
`;

const StyledMonitorButton = styled.button`
  ${StyledButton}
  border-radius: 5%;
  width: 20px;
  height: 20px;
  border: 2px grey solid;
  background: url(./button.jpg);
  background-size: contain;
`;

const StyledMonitorButtonContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 340px;
`;

const CloseSVG = ({ fillColor }) => (
  <svg
    id="Close"
    version="1.1"
    width="28px"
    height="28px"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon
      fill={fillColor}
      points="77.6,21.1 49.6,49.2 21.5,21.1 19.6,23 47.6,51.1 19.6,79.2 21.5,81.1 49.6,53 77.6,81.1 79.6,79.2   51.5,51.1 79.6,23 "
    />
  </svg>
);

export const CloseButton = ({ handleClick }) => {
  return (
    <StyledSVGButton onClick={handleClick}>
      <CloseSVG fillColor={pink} />
    </StyledSVGButton>
  );
};

export const MonitorButton = ({ handleClick }) => {
  return <StyledMonitorButton onClick={handleClick}></StyledMonitorButton>;
};

export const MonitorButtonContainer = ({ children }) => {
  return (
    <StyledMonitorButtonContainer>{children}</StyledMonitorButtonContainer>
  );
};

export const TVButton = ({ handleClick }) => {
  return <StyledTVButton onClick={handleClick}></StyledTVButton>;
};

export const TVButtonContainer = ({ children }) => {
  return <StyledTVButtonContainer>{children}</StyledTVButtonContainer>;
};

const StyledChannelButton = styled.button`
  ${StyledButton}
  width: 30px;
  height: 20px;
  background-color: ${darkGrey};
  box-shadow: 0px 2px 0px ${lightGrey};
  display: inline-block;
  margin-right: 10px;
  color: white;
  font-size: 8px;
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

const StyledChatRoomButton = styled.a`
  position: absolute;
  top: 237px;
  left: 228px;
  font-size: 7px;
`;

export const ChatRoomButton = ({ children }) => {
  return <StyledChatRoomButton>{children}</StyledChatRoomButton>;
};

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
