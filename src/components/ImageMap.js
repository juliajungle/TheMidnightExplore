import React from "react";
import styled from "styled-components";

import { MAP_AREAS } from "../const";
import { getItemCoords } from "../utils/coordinatesCalc";

const StyledImage = styled.img`
  width: 100%;
  height: auto;

  opacity: 0;

  @keyframes greyscale {
    0% {
      opacity: 0;
      filter: grayscale(1);
    }

    20% {
      opacity: 0.4;
      filter: grayscale(1);
    }

    40% {
      opacity: 0.8;
      filter: grayscale(1);
    }

    50% {
      opacity: 1;
      filter: grayscale(1);
    }

    100% {
      filter: grayscale(0);
      opacity: 1;
    }
  }

  animation: greyscale 6s ease-out;
  animation-fill-mode: forwards;
`;

export const BedroomImage = ({ imageName }) => {
  return (
    <div>
      <StyledImage
        src={`${imageName}.png`}
        alt="Monsters wallpaper"
        useMap="#monsters"
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
