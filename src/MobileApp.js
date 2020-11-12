import React, { useState, useEffect } from "react";
import styled from "styled-components";
import useDimensions from "react-use-dimensions";
import { BedroomImage, MobileImageMap } from "./components/ImageMap";
import { MobileModal } from "./components/Modal";
import { NavigationButton } from "./components/Buttons/NavigationButton";
import { getNavigationCoords } from "./utils/coordinatesCalc";

// TODO: Add a hint button that moves the user to the area where there is something?
// Could use a randomiser to show one or show each one in sequence?
const StyledOverlay = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.7;
  top: 0;
`;

export const MobileApp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setItem] = useState();
  const [area, setArea] = useState(1);

  // get size of screen
  const [ref, { x, y, width, height }] = useDimensions();
  console.log({ width }, { height });

  const handleClick = (e) => {
    const currentItem = e.target.alt;
    setItem(currentItem);
    setIsOpen(!isOpen);
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
    1000,
    `bedroom${area}`
  );

  return (
    <div ref={ref}>
      <BedroomImage imageName={`bedroom${area}`} width="1000" />
      {isOpen && <StyledOverlay />}

      <MobileImageMap
        handleClick={handleClick}
        x={x}
        y={y}
        width="1000"
        imageName={`bedroom${area}`}
      />

      <MobileModal
        isOpen={isOpen}
        handleClick={handleClick}
        item={currentItem}
      />

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
    </div>
  );
};
