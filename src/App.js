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
import bedroom1 from "./images/bedroom1.png";

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
  width: 25px;
  height: 25px;
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
    transform: scale(1.3);
    //  background-image: ${(props) =>
      props.muted ? `url(${mutePink})` : `url(${speakerPink})`};
  }
`;

const StyledVideo = styled.video`
  position: absolute;
  width: ${(props) => props.cssWidth}px;
  // width: 100%;
  // height: 100vh;
  height: ${(props) => props.cssWidth * 0.5625}px;
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
  const [previousItem, setPreviousItem] = useState();
  const [modalOptions, setModalOptions] = useState();

  useEffect(() => {
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

  const switchModalContent = (newItem, previousItem, options) => {
    console.log("switch", newItem);

    setPreviousItem(previousItem);
    setModalOptions(options);
    setItem(newItem);
  };

  const closeModal = (e) => {
    if (!previousItem) {
      setIsOpen(!isOpen);
      document.body.style.overflow = "auto";
    } else {
      setItem(previousItem);
      setPreviousItem();
    }
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
        // height={height}
        cssWidth={zoomWidth || width}
      >
        <source src="./monsters-video.mp4" type="video/mp4" />
        <img
          src={bedroom1}
          title="Your browser does not support the <video> tag"
        ></img>
      </StyledVideo>

      <ImageMap
        handleClick={openModal}
        width={zoomWidth || width}
        // height={height}
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
        switchModalContent={switchModalContent}
        channelChoice={modalOptions}
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
