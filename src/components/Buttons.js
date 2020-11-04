import React from "react";
import styled from "styled-components";

// TODO: make generic Button component or styles

const pink = "#c21a95";
const darkPink = "#4f1840";

const StyledButton = styled.button`
  box-sizing: border-box;
  border-radius: 10%;
  color: black;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
  font-size: 18px;
  padding: 0;

  :hover {
    color: white;
    background-color: black;
    border: 1px solid white;
  }
`;

const StyledSVGButton = styled.button`
  box-sizing: border-box;
  border-radius: 10%;
  height: 30px;
  background-color: black;
  border: 1px solid ${pink};
  cursor: pointer;
  font-size: 18px;
  padding: 0;

  :hover {
    border: 1px solid black;
    background-color: white;
  }
`;

const StyledIconButton = styled.button`
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  border-radius: 10%;
  border: 1px solid transparent;
  cursor: pointer;
  background: ${(props) => props.icon || 0}px;
  :hover {
    box-shadow: none !important;
    transition: All 250ms ease;
  }
`;

const StyledTVButton = styled.button`
  border-radius: 10%;
  width: 25px;
  height: 25px;
  position: absolute;
  bottom: 6px;
  left: 340px;
  background: url(./button.jpg);
  background-size: contain;
  cursor: pointer;
`;

const StyledMonitorButton = styled.button`
  border-radius: 5%;
  width: 20px;
  height: 20px;
  border: 2px grey solid;
  position: absolute;
  bottom: 10px;
  left: 340px;
  background: url(./button.jpg);
  background-size: contain;
  cursor: pointer;
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

export const Button = ({ handleClick, children }) => {
  return <StyledButton onClick={handleClick}>{children}</StyledButton>;
};

export const CloseButton = ({ handleClick }) => {
  return (
    <StyledSVGButton onClick={handleClick}>
      <CloseSVG fillColor={pink} />
    </StyledSVGButton>
  );
};

// pass icon in here
export const IconButton = ({ handleClick, children, icon }) => {
  return (
    <StyledIconButton icon={icon} onClick={handleClick}>
      {children}
    </StyledIconButton>
  );
};

export const MonitorButton = ({ handleClick }) => {
  return <StyledMonitorButton onClick={handleClick}></StyledMonitorButton>;
};

export const TVButton = ({ handleClick }) => {
  return <StyledTVButton onClick={handleClick}></StyledTVButton>;
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

const StyledChatRoomButton = styled.a`
  position: absolute;
  top: 237px;
  left: 228px;
  font-size: 7px;
`;

export const ChatRoomButton = ({ children }) => {
  return <StyledChatRoomButton>{children}</StyledChatRoomButton>;
};

const AIStyles = `
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
