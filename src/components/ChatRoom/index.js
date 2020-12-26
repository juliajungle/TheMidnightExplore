import React, { useState } from "react";
import styled from "styled-components";

import { MonitorButton, MonitorButtonContainer } from "./MonitorButtons";
import { MyChatbot } from "./Chatbot";
import desktop from "../../images/desktop.jpg";
import planet from "../../images/planet.png";
import monitor from "../../images/monitor2.png";

const StyledImage = styled.img`
  position: absolute;
  height: 285px;
  z-index: -100;
  top: 24px;
  left: 37px;
  width: 310px;
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
  top: 260px;
  left: 282px;
  font-size: 5px;
  color: #313848;
  text-decoration: none;

  border: solid #24334a4d 1px;
  padding: 1px 3px;
  box-shadow: #48577b 0px 1px 0px 0px;
  font-family: monospace;
  :hover {
    box-shadow: none;
    top: 261px;
  }
`;

const StyledDesktopWrapper = styled.div`
  position: absolute;
  // z-index: -1;
  width: 380px;
  height: 365px;
  // background-color: #4e4954;
  background-image: url(${monitor});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 1%;
  left: 30px;
  @media (max-width: 500px) {
    left: 0;
  }

  :after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 40px;
    left: 41px;
    height: 266px;
    width: 297px;
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

const StyledDesktop = styled.div`
  position: absolute;
  z-index: -1;
  left: 37px;
  top: 23px;
  background-image: radial-gradient(#0000000d 60%, #1b5bff 150%);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.3603816526610645) 30%,
    rgba(27, 91, 255, 0.5228466386554622) 64%,
    rgba(0, 0, 0, 0.9066001400560224) 99%
  );
  opacity: 0.9;
  width: 307px;
  height: 288px;
  border-radius: 5px;
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

          <StyledDesktop></StyledDesktop>
          <StyledChatRoomLink
            href="http://183010165.com/"
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
