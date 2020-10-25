import React, { useState } from "react";
import styled from "styled-components";
import Canvas from "./Canvas";
import { Button, ChannelButton, ChannelButtonContainer } from "./Button";
import { Loading } from "./Loading";

const StyledImage = styled.img`
  position: absolute;
  top: 130px;
  left: 160px;
  height: auto;
  border-radius: 7px;
  box-shadow: -2px 1px 20px 7px #5b4c6b5e;
  opacity: 0.6;

  @keyframes horror {
    0% {
      width: 100px;
    }

    100% {
      width: 300px;
      top: 80px;
      left: 30px;
    }
  }

  animation: horror 2s ease-out;
  animation-fill-mode: forwards;
`;

const StyledIframe = styled.iframe`
  border-radius: 5%;
`;

const StyledWrapper = styled.div`
  z-index: -100;
  position: absolute;
  top: -5px;
  left: 0;
  opacity: 0.8;
  background-color: #ab8feff5;
  border-radius: 40px;
  border: 25px solid black;
  width: 360px;
  height: 260px;
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
    }, 2000);
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
                <StyledImage alt="Horror Show" src="horror.jpg" />
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
            src="https://www.youtube.com/embed/Xzex-nN2yM0"
            frameborder="0"
          ></StyledIframe>
        )}
      </StyledWrapper>
      <ChannelButtonContainer>
        <ChannelButton handleClick={changeChannel} text={1}></ChannelButton>
        <ChannelButton handleClick={changeChannel} text={2}></ChannelButton>
      </ChannelButtonContainer>
      <Button handleClick={handleClick}></Button>
    </div>
  );
};
