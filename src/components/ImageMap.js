import React from "react";
import styled from "styled-components";

import { MAP_AREAS } from "../const";
import { getItemCoords } from "../utils/coordinatesCalc";
import bedroom2 from "../images/bedroom2.jpg";
import bedroom3 from "../images/bedroom3.jpg";
import bedroom1 from "../images/pixel.png"; // transparent image to cover video for map

const StyledImage = styled.img`
  position: absolute;
  width: ${(props) => props.cssWidth};
  // width: auto;
  height: ${(props) => props.cssHeight}px;
`;

const getBedroomImage = (imageName) => {
  if (imageName === "bedroom2") {
    return bedroom2;
  } else if (imageName === "bedroom3") {
    return bedroom3;
  } else if (imageName === "bedroom1") {
    return bedroom1;
  }
};

const StyledArea = styled.area`
  cursor: pointer;
  display: block;
`;

export const BedroomImage = ({ imageName, width }) => {
  return (
    <StyledImage
      src={getBedroomImage(imageName)}
      alt="Monsters wallpaper"
      useMap="#monsters"
      cssWidth={() => (width ? `${width}px` : "100%")}
      cssHeight={width * 0.5625}
    />
  );
};

export const ImageMap = ({ handleClick, width, imageName, link }) => {
  const areas = MAP_AREAS[imageName].map((area) => {
    const { topX, topY, bottomX, bottomY } = getItemCoords(
      width,
      area,
      imageName
    );
    return (
      <StyledArea
        key={area}
        onClick={handleClick}
        shape="rect"
        coords={`${topX}, ${topY}, ${bottomX} , ${bottomY}`}
        alt={area}
        href={link}
      />
    );
  });

  return <map name="monsters">{areas}</map>;
};
