import React, { useState } from "react";
import styled from "styled-components";

import { MonitorButton, MonitorButtonContainer } from "./MonitorButtons";
import { MyChatbot } from "./Chatbot";
import desktop from "../../images/desktop.png";
import planet from "../../images/planet.png";
import monitor from "../../images/monitor.png";

const StyledImage = styled.img`
  border-radius: 9px;
  position: absolute;
  height: 266px;
  z-index: -100;
  top: 18px;
  left: 41px;
  width: 297px;
  background-color: black;
`;

const StyledTechLink = styled.a`
  position: absolute;
  bottom: 19px;
  left: 10%;
  font-size: 4px;

  color: #deddde;
  text-decoration: none;
  padding: 0 3px;
  margin-left: 8px;
`;

const StyledPlanetImage = styled.img`
  top: -7px;
  position: absolute;
  left: -20px;
`;

const StyledChatRoomLink = styled.a`
  position: absolute;
  top: 262px;
  left: 201px;
  font-size: 5px;
  color: #535252;
  text-decoration: none;
  border: solid #9e9e9e 1px;
  padding: 0 3px;
  box-shadow: #9e9e9e 0px 1px 0px 0px;
  :hover {
    box-shadow: none;
    top: 263px;
  }
`;

const StyledDesktopWrapper = styled.div`
  position: absolute;
  left: 10px;
  width: 380px;
  height: 345px;
  // background-color: #4e4954;
  background-image: url(${monitor});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 1%;
  left: 45px;
  @media (max-width: 500px) {
    left: 12px;
  }
`;

const StyledShopLink = styled.a`
  position: absolute;
  top: 70px;
  left: 157px;
  padding: 52px 95px;
`;

const StyledChatbotButton = styled.button`
  position: absolute;
  top: 70px;
  left: 66px;
  padding: 32px 41px;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const ChatRoom = ({ handleClick, width }) => {
  const [showChatbot, setShowChatbot] = useState(false);

  const openChatbot = () => {
    setShowChatbot(true);
  };

  return (
    <StyledDesktopWrapper responsiveWidth={width}>
      {showChatbot && <MyChatbot />}

      {!showChatbot && (
        <div>
          <StyledImage responsiveWidth={width} src={desktop} />
          <StyledShopLink
            href="https://merch.ambientinks.com/collections/themidnight"
            target="_blank"
            rel="noopener noreferrer"
          />
          <StyledChatbotButton onClick={openChatbot} />
          <StyledChatRoomLink
            href="http://183010165.com/"
            target="_blank"
            rel="noopener noreferrer"
            responsiveWidth={width}
          >
            {`Send >`}
          </StyledChatRoomLink>
        </div>
      )}
      <StyledTechLink
        href="http://183010165.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledPlanetImage src={planet} width="20" height="20" />
        {`COMTEK`}
      </StyledTechLink>
      <MonitorButtonContainer>
        {" "}
        <MonitorButton handleClick={handleClick}></MonitorButton>
      </MonitorButtonContainer>
    </StyledDesktopWrapper>
  );
};
