import React, { useState, useEffect, useRef } from "react";
import { useCookies } from "react-cookie";
import styled from "styled-components";
import useDimensions from "react-use-dimensions";
import { ImageMap, BedroomImage } from "./components/ImageMap";
import { Modal } from "./components/Modal";
import { HintButton } from "./components/Buttons/HintButton";
import { NavigationButton } from "./components/Buttons/NavigationButton";
import { ZoomButton } from "./components/Buttons/ZoomButton";
import { getNavigationCoords } from "./utils/coordinatesCalc";
import { Hint } from "./components/Hint/Hint";

const StyledApp = styled.div`
  overflow: ${(props) => (props.isOpen ? "hidden" : "initial")};
  height: ${(props) => (props.isOpen ? "100vh" : "auto")};
`;

const StyledOverlay = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.7;
  top: 0;
`;

const StyledZoomWrapper = styled.div`
  position: fixed;
  left: 12px;
  top: 12px;
`;

const StyledImage = styled.img`
  width: ${(props) => props.cssWidth};
  height: auto;
`;

const StyledVideo = styled.video`
  width: 100%;
`;

const MuteButton = styled.button`
  position: absolute;
  z-index: 100;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  background-image: ${(props) =>
    props.muted ? `url(mute.png)` : `url(speaker.png)`};
  background-position: center;
  background-size: contain;
  border: none;
  background-color: transparent;
  cursor: pointer;

  :focus {
    outline: none;
    border: none;
  }

  :hover {
    background-image: ${(props) =>
      props.muted ? `url(mute-pink.png)` : `url(speaker-pink.png)`};
  }
`;

export const Bedroom = ({ loadingTime, animationTime }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hint, setHint] = useState(false);
  const [currentItem, setItem] = useState();
  const [area, setArea] = useState(1);
  const [isLoading, setLoading] = useState(true);
  const [isZoomed, setZoomed] = useState(false);
  const [muted, setMuted] = useState(true);
  const [cookies, setCookie] = useCookies(["themidnight"]);

  useEffect(() => {
    const videoPlayed = cookies["video_played"];
    console.log({ videoPlayed });
    if (videoPlayed) {
      setLoading(false);
    } else {
      console.log("????");
      setTimeout(() => {
        setLoading(false);
        // setCookie("themidnight", "played");
        setCookie("video_played", "true", { path: "/" });
      }, loadingTime);
    }
  }, []);

  // get size of screen
  const [ref, { width, height }] = useDimensions();
  const [zoomWidth, setZoomWidth] = useState(width);

  const handleClick = (e) => {
    const currentItem = e.target.alt;
    setItem(currentItem);
    setIsOpen(!isOpen);
  };

  const showHint = () => {
    setHint(true);
    setTimeout(() => {
      setHint(false);
    }, 2000);
  };

  const goForward = () => {
    if (area < 3) {
      setArea(area + 1);
    } else {
      setArea(1);
    }
  };

  const goBack = () => {
    if (area > 1) {
      setArea(area - 1);
    } else {
      setArea(3);
    }
  };

  const { forwardX, forwardY, backX, backY } = getNavigationCoords(
    width,
    zoomWidth,
    `bedroom${area}`
  );

  const zoomIn = () => {
    setZoomWidth(Math.min(1920, width * 1.5));
    setZoomed(true);
  };

  const zoomOut = () => {
    setZoomWidth(width);
    setZoomed(false);
  };

  const video = useRef();

  const unMuteVideo = () => {
    setMuted(!muted);
  };

  return (
    <StyledApp ref={ref} isOpen={isOpen}>
      {isLoading && <MuteButton muted={muted} onClick={unMuteVideo} />}
      {isLoading && (
        <video ref={video} playsInline autoPlay muted={muted} width="100%">
          <source src="bedroom.mov" type="video/mp4" />
        </video>
        // <StyledImage width={zoomWidth || width} src="clip2.gif"></StyledImage>
      )}
      {!isLoading && (
        <ImageMap
          handleClick={handleClick}
          width={zoomWidth || width}
          imageName={`bedroom${area}`}
        />
      )}
      {hint && (
        <Hint
          width={zoomWidth || width}
          height={height}
          imageName={`bedroom${area}`}
        />
      )}

      <BedroomImage
        imageName={`bedroom${area}`}
        animationTime={cookies["video_played"] ? 1 : animationTime}
        width={zoomWidth || width}
      />

      <Modal
        isOpen={isOpen}
        handleClick={handleClick}
        item={currentItem}
        width={width}
      />
      {isOpen && <StyledOverlay />}
      {!isLoading && (
        <div>
          {" "}
          <HintButton handleClick={showHint}>Show hint</HintButton>
          <NavigationButton
            handleClick={goBack}
            x={backX}
            y={backY}
          ></NavigationButton>
          <NavigationButton
            handleClick={goForward}
            x={forwardX}
            y={forwardY}
          ></NavigationButton>
          <StyledZoomWrapper>
            <ZoomButton handleClick={zoomIn} text="+" disabled={isZoomed} />
            <ZoomButton handleClick={zoomOut} text="-" disabled={!isZoomed} />
          </StyledZoomWrapper>
        </div>
      )}
    </StyledApp>
  );
};
