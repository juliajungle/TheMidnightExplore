import React from "react";
import styled from "styled-components";

// TODO: make generic Button component or styles

const StyledButton = styled.button`
  border-radius: 10%;
  width: 20px;
  height: 20px;
  position: absolute;
  bottom: 10px;
  left: 340px;
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
  console.log(text);
  return <StyledSubmit type="submit" value={text} />;
};

export const AIButton = ({ handleClick, text }) => {
  console.log("AIButton", text);
  return <StyledAIButton onClick={handleClick}>{text}</StyledAIButton>;
};
