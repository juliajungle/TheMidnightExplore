import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { MonitorButton, MonitorButtonContainer } from "./MonitorButtons";
import { MyChatbot } from "./Chatbot";
import desktop from "../../images/desktop.jpg";
import planet from "../../images/planet.png";
import monitor from "../../images/monitor.png";
import { Fragment } from "react";

const StyledImage = styled.img`
  position: absolute;
  z-index: -100;
  top: 45px;
  left: 55px;
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
  top: 343px;
  left: 358px;
  font-size: 5px;
  color: #313848;
  text-decoration: none;

  border: solid #24334a4d 1px;
  padding: 1px 3px;
  box-shadow: #48577b 0px 1px 0px 0px;
  font-family: monospace;
  :hover {
    box-shadow: none;
    top: 344px;
  }
`;

const StyledDiscordLink = styled.a`
  position: absolute;
  top: 270px;
  left: 75px;
  width: 32px;
  height: 32px;
`;

const StyledDesktopWrapper = styled.div`
  position: absolute;
  // z-index: -1;
  width: 480px;
  height: 458px;
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
  top: 105px;
  left: 95px;
  padding: 55px 126px;
  background: transparent;
  border: none;
  cursor: pointer;
  :active {
    outline: 0;
  }
`;

const StyledBootup = styled.div`
  position: absolute;
  z-index: -100;
  top: 45px;
  left: 55px;
  padding: 20px 0 0 15px;
  width: 380px;
  height: 343px;
  background-color: black;
  background-image: radial-gradient(#1b5bff, black 120%);
`;

const StyledParagraph = styled.p`
  font-family: "VT323";
  text-shadow: #f7f6f2 1px 0 10px;
  color: white;
  font-size: 12px;
  line-height: 8px;
  margin-top: 0;
  padding-top: 0;
  white-space: pre-line;
`;

const StyledSpanBlinker = styled.span`
  @keyframes typing-blinker {
    to {
      visibility: hidden;
    }
  }
  opacity: 1;
  margin-bottom: -2px;
  border-left: 5px solid white;
  animation: typing-blinker 0.3s steps(2, start) infinite;
`;

const string = `COMTEK (C) 1991 Motherboard, Inc. 
\nBIOS Date 10/11/91 12:00:00 Ver 11.00.12
\nCPU: Intel(R) CPU 330 0 40 MHz
\nSpeed: 40 MHz 
\nInitialising USB Controllers… Done.
\n128MB OK
\nUSB Device(s):  1 Keyboard, 1 Mouse, 1 Hub, 1 Storage Device
\nAuto-detecting USB Mass Storage Devices…
\nDevice #01: USB 2.0 FlashDisk Speed
\n01 USB mass storage devices found and configured.
\n(C) Motherboard, Inc
\n32-0100-00001-001011111111-093909-78287-1AE0V003-Y20C
\nBooting from Hard Disk…`;

export const ChatRoom = ({ handleClick, width }) => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const typeWriter = () => {
    setText(`${text}${string.charAt(count)}`);
  };

  useEffect(() => {
    if (count < string.length) {
      setCount(count + 1);
      setTimeout(() => typeWriter(), 7);
    }
  }, [text]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 6500);
  }, []);

  const openChatbot = () => {
    setShowChatbot(true);
  };

  return (
    <StyledDesktopWrapper responsiveWidth={width}>
      <audio src="./1991_Comtek_Bootup.wav" autoPlay>
        Your browser does not support the
        <code>audio</code> element.
      </audio>
      {isLoading && (
        <Fragment>
          <StyledBootup>
            <StyledParagraph>
              {text} <StyledSpanBlinker>&#32;</StyledSpanBlinker>
            </StyledParagraph>
          </StyledBootup>
        </Fragment>
      )}
      {!isLoading && (
        <Fragment>
          {showChatbot && <MyChatbot />}

          {!showChatbot && (
            <div>
              <StyledImage src={desktop} />
              <StyledChatRoomLink
                href="https://www.twitch.tv/themidnightofficial"
                target="_blank"
                rel="noopener noreferrer"
                responsiveWidth={width}
              >
                {`Send >`}
              </StyledChatRoomLink>
              <StyledChatbotButton onClick={openChatbot} />
              <StyledDiscordLink
                href="https://discord.gg/GxGfN4rm75"
                target="_blank"
                rel="noopener noreferrer"
              />
            </div>
          )}
        </Fragment>
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
