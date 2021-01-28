import React from "react";
import styled from "styled-components";

import { MAP_AREAS } from "../const";
import { getItemCoords, getPolyItemCoords } from "../utils/coordinatesCalc";

const StyledArea = styled.area`
  cursor: pointer;
  display: block;
  transform: ${(props) => (props.skew ? `skew(-25deg, 10deg)` : `none`)};
`;

export const ImageMap = ({ handleClick, width, imageName, link }) => {
  const areas = MAP_AREAS[imageName].map((area) => {
    if (area === "prom") {
      const {
        topX,
        topY,
        bottomX,
        bottomY,
        topX2,
        topY2,
        bottomX2,
        bottomY2,
      } = getPolyItemCoords(width, area, imageName);

      return (
        <StyledArea
          key={area}
          onClick={handleClick}
          shape="poly"
          coords={`${topX}, ${topY}, ${topX2}, ${topY2},${bottomX2} , ${bottomY2},${bottomX} , ${bottomY},${topX}, ${topY}`}
          alt={area}
          href={link}
        />
      );
    } else {
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
    }
  });

  return <map name="monsters">{areas}</map>;
};
