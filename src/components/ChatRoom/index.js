import React from "react";
import styled from "styled-components";

import { MonitorButton, MonitorButtonContainer } from "./MonitorButtons";
import desktop from "../../images/desktop.png";
import planet from "../../images/planet.png";
import monitor from "../../images/monitor.png";

const StyledImage = styled.img`
  border-radius: 7px;
  position: absolute;
  height: ${(props) => `${Math.min(280, props.responsiveWidth * 0.7)}px`};
  z-index: -100;
  top: 5%;
  left: 4%;
  width: ${(props) => `${Math.min(322, props.responsiveWidth * 0.9)}px`};
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
  top: 75%;
  left: 70%;
  font-size: 5px;
  color: #535252;
  text-decoration: none;
  border: solid #9e9e9e 1px;
  padding: 0 3px;
  box-shadow: #9e9e9e 0px 1px 0px 0px;
  :hover {
    box-shadow: none;
    top: 271px;
  }
`;

const StyledDesktopWrapper = styled.div`
  width: 350px;
  height: ${(props) => `${Math.min(345, props.responsiveWidth * 0.9)}px`};
  background-image: url(${monitor});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  box-shadow: 0px 0px 18px 5px #d31e91;
  border-radius: 5%;
`;

export const ChatRoom = ({ handleClick, width }) => {
  return (
    <StyledDesktopWrapper responsiveWidth={width}>
      {/* <StyledImage responsiveWidth={width} src={desktop} /> */}

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
