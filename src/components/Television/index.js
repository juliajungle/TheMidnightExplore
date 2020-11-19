import React, { useState } from "react";
import styled from "styled-components";
import Canvas from "./Canvas";
import {
  TVButton,
  ChannelButton,
  ChannelButtonContainer,
  TVButtonContainer,
} from "../Buttons/Buttons";
import { Loading } from "./Loading";

const StyledImage = styled.img`
  position: absolute;
  top: 130px;
  left: 40%;
  height: auto;
  width: 100px;

  @keyframes horror {
    0% {
      width: 100px;
    }

    100% {
      width: 80%;
      top: 125px;
      left: 12%;
    }
  }

  animation: horror 2s ease-out;
  animation-fill-mode: forwards;
`;

const StyledLink = styled.a`
  width: 100%;
`;

const StyledIframe = styled.iframe`
  position: absolute;
  top: -2px;
  left: 0;
  width: 367px;
  border-radius: 5%;
  border-color: #333;
  height: 308px;
  border-width: 5px;
`;

const StyledWrapper = styled.div`
  z-index: -100;
  position: absolute;
  top: 36px;
  left: 20px;
  background-color: #ab8feff5;
  border-radius: 5%;
  box-sizing: border-box;
  width: 90%;
  height: 309px;
  box-shadow: inset 0px 0px 20px 0px #fff;
`;

const StyledTVWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 400px;
  background-image: url(tv.png);
  background-position: center;
`;

export const Television = ({ handleClick }) => {
  const [channel, setChannel] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const changeChannel = (value) => {
    setChannel(value);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <StyledTVWrapper>
      <StyledWrapper>
        {channel === 1 && (
          <div>
            {!isLoading && (
              <StyledLink
                href="https://store-uk.themidnightofficial.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledImage alt="Horror Show" src="horror.png" />
              </StyledLink>
            )}
            <Canvas />
          </div>
        )}
        {isLoading && <Loading />}
        {channel === 2 && (
          <StyledIframe
            id="ytplayer"
            type="text/html"
            // width="100%"
            height="308"
            src="https://www.youtube.com/embed/Xzex-nN2yM0?autoplay=1"
            frameborder="0"
            allow="autoplay"
            autoplay="1"
          ></StyledIframe>
        )}
      </StyledWrapper>
      <ChannelButtonContainer>
        <ChannelButton handleClick={changeChannel} text={1}></ChannelButton>
        <ChannelButton
          handleClick={changeChannel}
          position="40px"
          text={2}
        ></ChannelButton>
      </ChannelButtonContainer>
      <TVButtonContainer>
        <TVButton handleClick={handleClick} />
      </TVButtonContainer>
    </StyledTVWrapper>
  );
};
