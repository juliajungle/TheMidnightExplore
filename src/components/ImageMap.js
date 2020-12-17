import React from "react";
import styled from "styled-components";

import { MAP_AREAS } from "../const";
import { getItemCoords } from "../utils/coordinatesCalc";

const StyledArea = styled.area`
  cursor: pointer;
  display: block;
`;

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
