import React from "react";
import styled from "styled-components";

import { MonitorButton } from "../Buttons";

const StyledWrapper = styled.div`
  z-index: -100;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  border-radius: 40px;
  border: 40px solid black;
  height: 250px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 240px;
  border-radius: 7px;
`;

const StyledChatRoomLink = styled.a`
  position: absolute;
  top: 239px;
  left: 238px;
  font-size: 8px;
  color: #535252;
  text-decoration: none;
  border: solid #323131 1px;
  padding: 0 3px;
`;

const StyledTechLink = styled.a`
  position: absolute;
  bottom: 10px;
  left: 50px;
  font-size: 8px;
  color: #535252;
  text-decoration: none;
  border: solid #323131 1px;
  padding: 0 3px;
`;

export const ChatRoom = ({ handleClick }) => {
  return (
    <div>
      <StyledWrapper>
        <StyledImage src="chatroom.png" />
      </StyledWrapper>
      <StyledChatRoomLink
        href="http://183010165.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {`Send >`}
      </StyledChatRoomLink>
      <StyledTechLink
        href="http://183010165.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {`Comtek`}
      </StyledTechLink>
      <MonitorButton handleClick={handleClick}></MonitorButton>
    </div>
  );
};
