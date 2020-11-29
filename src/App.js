import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import useDimensions from "react-use-dimensions";
import { ImageMap, BedroomImage } from "./components/ImageMap";
import { Modal } from "./components/Modal";
import { HintButton } from "./components/Shared/HintButton";
import { NavigationButton } from "./components/Shared/NavigationButton";
import { ZoomButton } from "./components/Shared/ZoomButton";
import { getNavigationCoords } from "./utils/coordinatesCalc";
import { Hint } from "./components/Hint/Hint";
import speaker from "./images/speaker.png";
import speakerPink from "./images/speaker-pink.png";
import mute from "./images/mute.png";
import mutePink from "./images/mute-pink.png";
import { COLORS } from "./const";

const StyledOverlay = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${COLORS.darkPink};
  opacity: 0.2;
  top: 0;
  left: 0;
`;

const StyledZoomWrapper = styled.div`
  position: fixed;
  left: 12px;
  top: 12px;
`;

const MuteButton = styled.button`
  position: fixed;
  z-index: 100;
  top: ${(props) => props.yPosition}px;
  right: 10px;
  width: 30px;
  height: 30px;
  background-image: ${(props) =>
    props.muted ? `url(${mute})` : `url(${speaker})`};
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
      props.muted ? `url(${mutePink})` : `url(${speakerPink})`};
  }
`;

const StyledVideo = styled.video`
  position: absolute;
  width: ${(props) => props.cssWidth}px;
`;

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hint, setHint] = useState(false);
  const [currentItem, setItem] = useState();
  const [area, setArea] = useState(1);
  const [isZoomed, setZoomed] = useState(false);
  const [muted, setMuted] = useState(true);
  const [modalWidth, setModalWidth] = useState(440);
  const [modalHeight, setModalHeight] = useState(400);

  const [ref, { width, height }] = useDimensions();
  const [zoomWidth, setZoomWidth] = useState(width);

  useEffect(() => {
    // get size of screen - should this be updated\/
    console.log({ width });
    if (width < 500) {
      setModalWidth(350);
      setModalHeight(315);
    }
  }, [width]);
  const openModal = (e) => {
    const currentItem = e.target.alt;
    setItem(currentItem);
    setIsOpen(!isOpen);
    document.body.style.overflow = "hidden";
  };

  const closeModal = (e) => {
    setIsOpen(!isOpen);
    document.body.style.overflow = "auto";
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

  const unMuteVideo = () => {
    setMuted(!muted);
  };

  return (
    <div ref={ref}>
      <MuteButton
        muted={muted}
        onClick={unMuteVideo}
        yPosition={width * 0.57 - 30}
      />
      <StyledVideo
        playsInline
        autoPlay
        loop
        muted={muted}
        cssWidth={zoomWidth || width}
      >
        <source src="./monsters-video.mp4" type="video/mp4" />
      </StyledVideo>

      <ImageMap
        handleClick={openModal}
        width={zoomWidth || width}
        imageName={`bedroom${area}`}
      />

      {hint && (
        <Hint
          width={zoomWidth || width}
          height={height}
          imageName={`bedroom${area}`}
        />
      )}

      <BedroomImage imageName={`bedroom${area}`} width={zoomWidth || width} />

      <Modal
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
        item={currentItem}
        width={modalWidth}
        height={modalHeight}
      />
      {isOpen && <StyledOverlay onClick={closeModal} />}

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
  );
};

export default App;
