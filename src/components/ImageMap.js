import React from "react";
import styled from "styled-components";

import { getRectCoords } from "../utils/coordinatesCalc";

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
  const { topX, topY, bottomX, bottomY } = getRectCoords(width);

  return (
    <map name="monsters">
      <area
        onClick={handleClick}
        shape="rect"
        coords={`${topX}, ${topY}, ${bottomX} , ${bottomY}`}
        alt="TV"
        href="#"
      />
    </map>
  );
};
