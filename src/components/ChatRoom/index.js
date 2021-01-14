import React, { useState } from "react";
import styled from "styled-components";

import { MonitorButton, MonitorButtonContainer } from "./MonitorButtons";
import { MyChatbot } from "./Chatbot";
import desktop from "../../images/desktop.jpg";
import planet from "../../images/planet.png";
import monitor from "../../images/monitor-big2.png";

const StyledImage = styled.img`
  position: absolute;
  z-index: -100;
  top: 40px;
  left: 67px;
  width: 373px;
`;

const StyledTechLink = styled.a`
  position: absolute;
  bottom: 31px;
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
  top: 337px;
  left: 366px;
  font-size: 5px;
  color: #313848;
  text-decoration: none;

  border: solid #24334a4d 1px;
  padding: 1px 3px;
  box-shadow: #48577b 0px 1px 0px 0px;
  font-family: monospace;
  :hover {
    box-shadow: none;
    top: 338px;
  }
`;

const StyledDesktopWrapper = styled.div`
  position: absolute;
  // z-index: -1;
  width: 500px;
  height: 460px;
  // background-color: #4e4954;
  background-image: url(${monitor});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 1%;
  // left: 30px;

  :after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 38px;
    left: 50px;
    height: 340px;
    width: 400px;
    background: repeating-linear-gradient(
      #00000012,
      #00000012 1px,
      transparent 1px,
      transparent 2px
    );
  }
`;

const StyledChatbotButton = styled.button`
  position: absolute;
  top: 70px;
  left: 44px;
  padding: 55px 126px;
  background: transparent;
  border: none;
  cursor: pointer;
  :active {
    outline: 0;
  }
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
          <StyledChatRoomLink
            href="https://www.twitch.tv/themidnightofficial"
            target="_blank"
            rel="noopener noreferrer"
            responsiveWidth={width}
          >
            {`Send >`}
          </StyledChatRoomLink>
          {/* <StyledShopLink
            href="https://merch.ambientinks.com/collections/themidnight"
            target="_blank"
            rel="noopener noreferrer"
          /> */}
          <StyledChatbotButton onClick={openChatbot} />
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
