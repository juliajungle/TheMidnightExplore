import React from "react";
import styled, { css } from "styled-components";
import power from "../../images/power-light.png";

const StyledButton = css`
  box-sizing: border-box;
  cursor: pointer;
  padding: 0;
  outline: 0;
`;

const StyledSVGButton = styled.button`
  ${StyledButton}
  height: 26px;
  background-color: white;
  border-radius: 1%;
  border: 1px solid white;
  border-radius: 5%;

  :hover {
    transform: scale(1.2);
  }
`;

const StyledTVButton = styled.button`
  ${StyledButton}
  background: url(${power});
  background-repeat: no-repeat;
  background-position: 8px center;
  background-size: contain;
  border-radius: 33%;
  width: 34px;
  height: 17px;
  background-color: #1a1a1a;
  box-shadow: -1px 6px 0px #000000;
  border-color: transparent;
  :focus {
    outline: none;
  }
  :hover {
    box-shadow: -1px 1px 0px #000000;
  }
`;

const StyledTVButtonContainer = styled.div`
  position: absolute;
  bottom: 5%;
  left: 73%;
`;

const CloseSVG = ({ fillColor }) => (
  <svg
    id="Close"
    version="1.1"
    width="24px"
    height="24px"
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
      <CloseSVG fillColor={"black"} />
    </StyledSVGButton>
  );
};

export const TVButton = ({ handleClick }) => {
  return <StyledTVButton onClick={handleClick}></StyledTVButton>;
};

export const TVButtonContainer = ({ children }) => {
  return <StyledTVButtonContainer>{children}</StyledTVButtonContainer>;
};

const StyledChannelButton = styled.button`
  position: absolute;
  left: ${(props) => props.position || 0};
  box-sizing: border-box;
  border-radius: 33%;
  cursor: pointer;
  font-size: 18px;
  padding: 0;
  width: 30px;
  height: 13px;
  background-color: #1a1a1a;
  box-shadow:${(props) =>
    props.current ? `-1px 3px 0px #000000` : `-1px 6px 0px #000000`};
  }
  bottom: ${(props) => (props.current ? -12 : -11)}px;
  }
  display: inline-block;
  margin-right: 10px;
  color: white;
  font-size: 8px;
  border-color: transparent;

  :active {
    bottom: -15px;
    box-shadow: none !important;
    transition: All 250ms ease;
  }
  :focus {
    outline: none;
    border: none;
  }
`;

export const ChannelButton = ({ handleClick, text, position, current }) => {
  return (
    <StyledChannelButton
      current={current}
      position={position}
      onClick={() => handleClick(text)}
    >
      {text}
    </StyledChannelButton>
  );
};

const StyledChannelButtonContainer = styled.div`
  position: absolute;
  bottom: 9%;
  left: 44%;
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
