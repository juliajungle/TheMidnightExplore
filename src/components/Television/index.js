import React, { useState } from "react";
import styled from "styled-components";
import Canvas from "./Canvas";
import { TVButton, ChannelButton, ChannelButtonContainer } from "../Buttons";
import { Loading } from "./Loading";

const StyledImage = styled.img`
  position: absolute;
  top: 130px;
  left: 130px;
  height: auto;
  width: 100px;

  @keyframes horror {
    0% {
      width: 100px;
    }

    100% {
      width: 300px;
      top: 100px;
      left: 30px;
    }
  }

  animation: horror 2s ease-out;
  animation-fill-mode: forwards;
`;

const StyledIframe = styled.iframe`
  position: absolute;
  top: -2px;
  left: -2px;
  border-radius: 5%;
  border-color: transparent;
`;

const StyledWrapper = styled.div`
  z-index: -100;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8;
  background-color: #ab8feff5;
  border-radius: 40px;
  border: 25px solid black;
  box-sizing: border-box;
  width: 410px;
  height: 310px;
  box-shadow: inset 0px 0px 20px 0px #fff;
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
    <div>
      <StyledWrapper>
        {channel === 1 && (
          <div>
            {!isLoading && (
              <a
                href="https://store-uk.themidnightofficial.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <StyledImage alt="Horror Show" src="horror.png" />
              </a>
            )}
            <Canvas />
          </div>
        )}
        {isLoading && <Loading />}
        {channel === 2 && (
          <StyledIframe
            id="ytplayer"
            type="text/html"
            width="360"
            height="260"
            src="https://www.youtube.com/embed/Xzex-nN2yM0?autoplay=1"
            frameborder="0"
            allow="autoplay"
            autoplay="1"
          ></StyledIframe>
        )}
      </StyledWrapper>
      <ChannelButtonContainer>
        <ChannelButton handleClick={changeChannel} text={1}></ChannelButton>
        <ChannelButton handleClick={changeChannel} text={2}></ChannelButton>
      </ChannelButtonContainer>
      <TVButton handleClick={handleClick}></TVButton>
    </div>
  );
};
