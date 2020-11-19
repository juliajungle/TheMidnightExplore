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
  width: 100%;
  border-radius: 5%;
  border-color: #333;
  height: ${(props) => `${Math.min(286, props.responsiveWidth * 0.68)}px`};
  // height: 308px;
  border-width: 5px;
`;

const StyledWrapper = styled.div`
  z-index: -100;
  position: absolute;
  top: 10%;
  left: 8%;
  background-color: #ab8feff5;
  border-radius: 5%;
  box-sizing: border-box;
  width: 83%;

  // height: 309px;
  height: ${(props) => `${Math.min(288, props.width * 0.68)}px`};
  box-shadow: inset 0px 0px 20px 0px #fff;
`;

const StyledTVWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: ${(props) => `${Math.min(380, props.width * 0.9)}px`};
  background-image: url(tv.png);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Television = ({ handleClick, width }) => {
  const [channel, setChannel] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const changeChannel = (value) => {
    setChannel(value);
    setLoading(true);

    setTimeout(() => {
      // setLoading(false);
    }, 1000);
  };

  return (
    <StyledTVWrapper width={width}>
      <StyledWrapper width={width}>
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
            <Canvas width={width} />
          </div>
        )}
        {isLoading && <Loading width={width} />}
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
            responsiveWidth={width}
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
