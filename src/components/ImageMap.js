import React from "react";
import styled from "styled-components";

import { MAP_AREAS } from "../const";
import { getItemCoords } from "../utils/coordinatesCalc";

const StyledImage = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;

export const Image = () => {
  return (
    <StyledImage>
      <img src="background.png" alt="Monsters wallpaper" useMap="#monsters" />
    </StyledImage>
  );
};

export const ImageMap = ({ handleClick, width }) => {
  const areas = MAP_AREAS.map((area) => {
    console.log(area);
    const { topX, topY, bottomX, bottomY } = getItemCoords(width, area);
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
