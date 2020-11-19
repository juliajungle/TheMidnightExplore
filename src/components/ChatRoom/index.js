import React, { useState } from "react";
import styled from "styled-components";

import { MonitorButton, MonitorButtonContainer } from "../Buttons/Buttons";

const StyledWrapper = styled.div`
  z-index: -100;
  position: relative;
  top: 0;
  left: 0;
  box-sizing: border-box;
  border-radius: 20px;
  // border: 10px solid black;
  height: 404px;
  width: 100%;
`;

const StyledImage = styled.img`
  border-radius: 7px;
  position: absolute;
  top: 5%;
  left: 4%;
  width: 94%;
  height: 316px;
`;

const StyledMonitorImage = styled.img`
  position: absolute;
  width: 100%;
  border: solid 4px #514c57;
  border-radius: 10px;
  box-shadow: -1px 0px 18px 3px #d31e91;
`;

const StyledTechLink = styled.a`
  position: relative;
  bottom: 38px;
  left: 21px;
  font-size: 4px;

  color: #deddde;
  -webkit-text-decoration: none;
  text-decoration: none;
  padding: 0 3px;
  margin-left: 8px;
`;

const StyledPlanetImage = styled.img`
  top: -7px;
  position: absolute;
  left: -20px;
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
  width: 95%;
  height: 1000px;
  border-radius: 7px;
  overflow: scroll;
  border: 4px #504f58 solid;
  /* left: 19px; */
  margin-left: 11px;
  margin-top: 24px;
`;

const StyledButton = styled.button`
  position: absolute;
  bottom: 32px;
  left: 59%;
  font-size: 7px;
  color: #535252;

  text-decoration: none;
  border: solid #323131 1px;
  padding: 0 3px;
  cursor: pointer;
`;

const StyledChatRoomLink = styled.a`
  position: absolute;
  top: 306px;
  left: 313px;
  font-size: 5px;
  color: #535252;
  text-decoration: none;
  border: solid #9e9e9e 1px;
  padding: 0 3px;
  box-shadow: #9e9e9e 0px 1px 0px 0px;
  :hover {
    box-shadow: none;
    top: 307px;
  }
`;

export const ChatRoom = ({ handleClick }) => {
  // const [showIframe, setIframe] = useState(true);

  // const handleIframe = () => {
  //   setIframe(true);
  // };

  return (
    <div>
      <StyledWrapper>
        <div>
          <StyledMonitorImage src="monitor.png" />
          <StyledImage src="desktop.png" />
          {/* <StyledButton onClick={handleIframe}>Send</StyledButton> */}
        </div>

        {/* {showIframe && (
          <StyledIframeWrapper>
            <StyledMonitorImage src="monitor.png" />
            <StyledIframe
              src="http://183010165.com/"
              title="Chat with lost boy"
              width="100%"
              height="1000px"
            ></StyledIframe>
          </StyledIframeWrapper>
        )} */}
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
        <StyledPlanetImage src="planet.png" width="20" height="20" />
        {`COMTEK`}
      </StyledTechLink>

      <MonitorButtonContainer>
        {" "}
        <MonitorButton handleClick={handleClick}></MonitorButton>
      </MonitorButtonContainer>
    </div>
  );
};
