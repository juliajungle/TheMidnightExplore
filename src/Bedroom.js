import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useDimensions from "react-use-dimensions";
import { ImageMap, BedroomImage, MobileImageMap } from "./components/ImageMap";
import { Modal } from "./components/Modal";
import { HintFilter } from "./components/Hint/HintFilter";
import { HintButton } from "./components/Buttons/HintButton";
import { NavigationButton } from "./components/Buttons/NavigationButton";
import { getNavigationCoords } from "./utils/coordinatesCalc";
import { MobileApp } from "./MobileApp";

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

export const Bedroom = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hint, setHint] = useState(false);
  const [currentItem, setItem] = useState();
  const [area, setArea] = useState(1);
  const [isLoading, setLoading] = useState(true);
  const [isMobile, setMobile] = useState(false);
  // const [width, setWidth] = useState("100%");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  // get size of screen
  const [ref, { x, y, width, height }] = useDimensions();
  console.log({ width }, { height });

  const handleClick = (e) => {
    const currentItem = e.target.alt;
    setItem(currentItem);
    setIsOpen(!isOpen);
  };

  const showHint = () => {
    setHint(true);
    setTimeout(() => {
      setHint(false);
    }, 500);
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

  // this needs to change on mobile
  const { forwardX, forwardY, backX, backY } = getNavigationCoords(
    width,
    `bedroom${area}`
  );

  const showMobile = () => {
    setMobile(true);
  };

  const ShowMobileVersion = () => {
    return <button onClick={showMobile}>Click me</button>;
  };

  return (
    <StyledApp ref={ref}>
      {!isMobile && (
        <div>
          <ImageMap
            handleClick={handleClick}
            x={x}
            y={y}
            width={width}
            imageName={`bedroom${area}`}
          />
          {hint && (
            <HintFilter
              width={width}
              height={height}
              imageName={`bedroom${area}`}
            />
          )}
          <BedroomImage imageName={`bedroom${area}`} />
          {isOpen && <StyledOverlay />}

          <Modal isOpen={isOpen} handleClick={handleClick} item={currentItem} />
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
              <ShowMobileVersion />
            </div>
          )}
        </div>
      )}
      {isMobile && <MobileApp />}
    </StyledApp>
  );
};
