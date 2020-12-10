import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import MutedContext from "../../Context/MutedContext";
import Canvas from "./Canvas";
import {
  TVButton,
  ChannelButton,
  ChannelButtonContainer,
  TVButtonContainer,
} from "../Shared/ModalButtons";
import { Loading } from "./Loading";
import tv from "../../images/tv.png";
import horror from "../../images/horror.png";
import { GameCanvas } from "../Game/GameCanvas";

const StyledImage = styled.img`
  position: absolute;
  top: 50%;
  left: 38%;
  height: auto;
  width: 100px;

  @keyframes horror {
    0% {
      width: 100px;
    }

    100% {
      width: 80%;
      top: 42%;
      left: 10%;
    }
  }

  animation: horror 2s ease-out;
  animation-fill-mode: forwards;
`;

const StyledIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 308px;
  border: none;
  border-radius: 5px;

  @media (max-width: 500px) {
    width: 312px;
    height: 256px;
  }
`;

const StyledWrapper = styled.div`
  position: absolute;
  top: 10%;
  left: 9%;
  background-color: #8b9ee0;
  border-radius: 5px;
  box-sizing: border-box;
  width: 361px;
  height: 302px;
  box-shadow: inset 0px 0px 20px 0px #fff;

  @media (max-width: 500px) {
    width: 312px;
    height: 256px;
  }
`;

const StyledTVWrapper = styled.div`
  position: absolute;
  width: 440px;
  height: 400px;
  background-image: url(${tv});
  background-color: black;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 1%;

  @media (max-width: 500px) {
    width: 375px;
    height: 341px;
  }
`;

export const Television = ({ handleClick, width, channelChoice = 1 }) => {
  const { muted, toggleMuted } = useContext(MutedContext);

  const [channel, setChannel] = useState(channelChoice);
  const [audioMuted] = useState(muted);
  const [isLoading, setLoading] = useState(true);
  const changeChannel = (value) => {
    // mute video if channel is YT
    if (value === 2 && !audioMuted) {
      toggleMuted();
    }

    setChannel(value);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    if (channel === 2 && !audioMuted) {
      toggleMuted();
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    return () => {
      // unmute video if it mute state changed using tv
      if (!audioMuted && muted) {
        toggleMuted();
      }
    };
  }, [muted]);

  return (
    <StyledTVWrapper width={width}>
      <StyledWrapper width={width}>
        {channel === 1 && (
          <div>
            {!isLoading && (
              <a
                href="https://store-uk.themidnightofficial.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledImage alt="Horror Show" src={horror} />
              </a>
            )}
            <Canvas width={width} />
          </div>
        )}
        {isLoading && <Loading width={width} />}
        {channel === 2 && (
          <StyledIframe
            id="ytplayer"
            type="text/html"
            height="308"
            src="https://www.youtube.com/embed/eH3giaIzONA?autoplay=1"
            frameborder="0"
            allow="autoplay"
            autoplay="1"
            responsiveWidth={width}
          ></StyledIframe>
        )}
        {channel === 3 && <GameCanvas />}
      </StyledWrapper>
      <ChannelButtonContainer>
        <ChannelButton
          handleClick={changeChannel}
          text={1}
          current={channel === 1}
        ></ChannelButton>
        <ChannelButton
          handleClick={changeChannel}
          position="40px"
          text={2}
          current={channel === 2}
        ></ChannelButton>
        <ChannelButton
          handleClick={changeChannel}
          position="83px"
          text={3}
          current={channel === 3}
        ></ChannelButton>
      </ChannelButtonContainer>
      <TVButtonContainer>
        <TVButton handleClick={handleClick} />
      </TVButtonContainer>
    </StyledTVWrapper>
  );
};
