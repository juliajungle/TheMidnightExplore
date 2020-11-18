import React from "react";
import styled from "styled-components";

import { MAP_AREAS } from "../const";
import { getItemCoords } from "../utils/coordinatesCalc";

const StyledImage = styled.img`
  width: ${(props) => props.cssWidth};
  height: auto;

  opacity: 0;
  visibility: hidden;

  @keyframes greyscale {
    0% {
      opacity: 0;
      visibility: hidden;
      // filter: grayscale(1);
    }

    20% {
      // opacity: 0.4;
      // filter: grayscale(1);
      visibility: hidden;
    }

    40% {
      // opacity: 0.8;
      // filter: grayscale(1);
      visibility: hidden;
    }

    50% {
      // opacity: 1;
      // filter: grayscale(1);
      opacity: 0;
      visibility: hidden;
    }

    99% {
      opacity: 0;
      visibility: hidden;
    }

    100% {
      // filter: grayscale(0);
      opacity: 1;
      visibility: visible;
    }
  }

  animation: greyscale ${(props) => props.animationTime}s linear;
  animation-fill-mode: forwards;
`;

export const BedroomImage = ({ imageName, width, animationTime }) => {
  // console.log(width ? `${width}` : "100%");
  return (
    <div>
      <StyledImage
        src={imageName === "bedroom1" ? "test2.gif" : `${imageName}.png`}
        // src="test2.gif"
        alt="Monsters wallpaper"
        useMap="#monsters"
        cssWidth={() => (width ? `${width}px` : "100%")}
        animationTime={animationTime}
      />
    </div>
  );
};

export const ImageMap = ({ handleClick, width, imageName }) => {
  const areas = MAP_AREAS[imageName].map((area) => {
    const { topX, topY, bottomX, bottomY } = getItemCoords(
      width,
      area,
      imageName
    );
    return (
      <area
        key={area}
        onClick={handleClick}
        shape="rect"
        coords={`${topX}, ${topY}, ${bottomX} , ${bottomY}`}
        alt={area}
        href="#"
      />
    );
  });

  return <map name="monsters">{areas}</map>;
};
