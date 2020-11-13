import React, { useState, useEffect } from "react";
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
  // background-color: rgba(0, 0, 0, 0.8);
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

export const Bedroom = ({ loadingTime, animationTime }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hint, setHint] = useState(false);
  const [currentItem, setItem] = useState();
  const [area, setArea] = useState(1);
  const [isLoading, setLoading] = useState(true);
  const [isZoomed, setZoomed] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, loadingTime);
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
    setZoomWidth("1000");
    setZoomed(true);
  };

  const zoomOut = () => {
    setZoomWidth(width);
    setZoomed(false);
  };

  return (
    <StyledApp ref={ref}>
      <ImageMap
        handleClick={handleClick}
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
      <BedroomImage
        imageName={`bedroom${area}`}
        animationTime={animationTime}
        width={zoomWidth}
      />
      {isOpen && <StyledOverlay />}

      <Modal
        isOpen={isOpen}
        handleClick={handleClick}
        item={currentItem}
        width="410px"
      />
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
