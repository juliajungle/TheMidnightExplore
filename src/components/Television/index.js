import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import MutedContext from "../../context/MutedContext";
import Canvas from "./Canvas";
import {
  TVButton,
  ChannelButton,
  ChannelButtonContainer,
  TVButtonContainer,
} from "../Shared/ModalButtons";
import { Loading } from "../Shared/Loading";
import tv from "../../images/tv.png";
import horror from "../../images/horror.png";
import { GameCanvas } from "../Game/GameCanvas";
import { Fragment } from "react";

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
      width: 70%;
      top: 42%;
      left: 70px;
    }
  }

  animation: horror 2s ease-out;
  animation-fill-mode: forwards;
`;

const StyledIframe = styled.iframe`
  position: absolute;
  z-index: -1;
  top: 34px;
  left: 35px;
  width: 370px;
`;

const StyledWrapper = styled.div`
  position: absolute;
  z-index: -1;
  top: 40px;
  left: 42px;
  background-color: ${(props) => props.backgroundColor};
  width: 361px;
  height: 302px;
  box-shadow: inset 0px 0px 10px 0px #fff;
`;

const StyledTVWrapper = styled.div`
  position: absolute;
  width: 440px;
  height: 400px;
  background-image: url(${tv});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 1%;
`;

const StyledLoaderWrapper = styled.div`
  position: absolute;
  z-index: -1;
  top: 56px;
  left: 70px;
  width: 300px;
  height: 140px;
`;

export const Television = ({ handleClick, width, channelChoice = 1 }) => {
  console.log("width", width);
  const { muted, toggleMuted } = useContext(MutedContext);
  const [backgroundColor, setBackgroundColor] = useState("black");
  const [channel, setChannel] = useState(channelChoice);
  const [videoMuted] = useState(muted);
  const [isLoading, setIsLoading] = useState(true);
  const changeChannel = (value) => {
    // mute video if channel is YT or Horror Show
    if ((value === 2 || value === 1) && !videoMuted && !muted) {
      toggleMuted();
    }

    if (value === 3 && !videoMuted && muted) {
      toggleMuted();
    }

    if (value === 1) {
      setBackgroundColor("#8b9ee0");
    } else {
      setBackgroundColor("black");
    }

    if (value === 2) {
      setIsLoading(true);
    }

    setChannel(value);
  };

  useEffect(() => {
    if (channel === 1) {
      setBackgroundColor("#8b9ee0");
    } else {
      setBackgroundColor("black");
    }

    if ((channel === 2 || channel === 1) && !videoMuted) {
      toggleMuted();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      // unmute video if it mute state changed using tv
      if (!videoMuted && muted) {
        toggleMuted();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [muted]);

  const hideLoader = () => {
    setIsLoading(false);
  };

  return (
    <StyledTVWrapper width={width}>
      <StyledWrapper width={width} backgroundColor={backgroundColor} />

      {channel === 1 && (
        <div>
          <a
            href="https://merch.ambientinks.com/collections/themidnight/featured"
            target="_blank"
            rel="noopener noreferrer"
          >
            <StyledImage alt="Horror Show" src={horror} />
          </a>

          <audio src="./ghost.wav" autoPlay>
            Your browser does not support the
            <code>audio</code> element.
          </audio>
          <Canvas width={width} />
        </div>
      )}

      {channel === 2 && (
        <Fragment>
          <StyledLoaderWrapper height="306" width="366">
            <Loading isLoading={isLoading} height="306" width="175" />
          </StyledLoaderWrapper>
          <StyledIframe
            id="ytplayer"
            type="text/html"
            height="308"
            src="https://www.youtube.com/embed/eH3giaIzONA?autoplay=1"
            frameborder="0"
            allow="autoplay"
            autoplay="1"
            responsiveWidth={width}
            onLoad={hideLoader}
          ></StyledIframe>
        </Fragment>
      )}
      {channel === 3 && <GameCanvas />}

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
