import React, { useState } from "react";
import styled from "styled-components";

import { MonitorButton, MonitorButtonContainer } from "../Buttons/Buttons";

const StyledWrapper = styled.div`
  z-index: -100;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  border-radius: 20px;
  border: 10px solid black;
  height: 280px;
  width: 410px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 260px;
  border-radius: 7px;
`;

// const StyledChatRoomLink = styled.a`
//   position: absolute;
//   top: 241px;
//   left: 233px;
//   font-size: 7px;
//   color: #535252;
//   text-decoration: none;
//   border: solid #323131 1px;
//   padding: 0 3px;
// `;

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

const StyledIframeWrapper = styled.div`
  position: relative;
  max-height: 100%;
  overflow: auto;
  border-radius: 10px;
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 1000px;
  border-radius: 7px;
  overflow: scroll;
  border: 0;
`;

const StyledButton = styled.button`
  position: absolute;
  bottom: 32px;
  left: 233px;
  font-size: 7px;
  color: #535252;

  text-decoration: none;
  border: solid #323131 1px;
  padding: 0 3px;
  cursor: pointer;
`;

export const ChatRoom = ({ handleClick }) => {
  const [showIframe, setIframe] = useState(false);

  const handleIframe = () => {
    setIframe(true);
  };

  return (
    <div>
      <StyledWrapper>
        {!showIframe && (
          <div>
            <StyledImage src="chatroom.png" />
            <StyledButton onClick={handleIframe}>Send</StyledButton>
          </div>
        )}

        {showIframe && (
          <StyledIframeWrapper>
            <StyledIframe
              src="http://183010165.com/"
              title="Chat with lost boy"
              width="100%"
              height="1000px"
            ></StyledIframe>
          </StyledIframeWrapper>
        )}
      </StyledWrapper>
      {/* <StyledChatRoomLink
        href="http://183010165.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {`Send >`}
      </StyledChatRoomLink> */}
      <StyledTechLink
        href="http://183010165.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {`Comtek`}
      </StyledTechLink>

      <MonitorButtonContainer>
        {" "}
        <MonitorButton handleClick={handleClick}></MonitorButton>
      </MonitorButtonContainer>
    </div>
  );
};
