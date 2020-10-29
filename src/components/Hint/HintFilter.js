import React from "react";
import styled from "styled-components";

import { MAP_AREAS } from "../../const";
import { getHintCoords } from "../../utils/coordinatesCalc";

const StyledFilter = styled.svg`
  position: absolute;
`;

const renderComposites = () => {
  return MAP_AREAS.map((item, index) => {
    if (index > 0) {
      return (
        <feComposite
          in={`hint${index - 1}`}
          // in="SourceGraphic"
          in2={`spec${index}`}
          result={`hint${index}`}
          operator="arithmetic"
          k1="0"
          k2="1"
          k3="1"
          k4="0"
        />
      );
    }
  });
};

const renderSpotLights = (width) => {
  return MAP_AREAS.map((area, index) => {
    const { x, y } = getHintCoords(width, area);
    const adjustedY = y + 10;
    const id = `spec${index}`;
    return (
      <feSpecularLighting
        result={id}
        in="blur"
        specularConstant="1"
        specularExponent="30"
        lightingColor="#c21a95"
        key={x}
      >
        <feSpotLight
          x={x}
          y={adjustedY}
          z="500"
          limitingConeAngle="7"
          pointsAtX={x}
          pointsAtY={adjustedY}
          pointsAtZ="0"
        />
      </feSpecularLighting>
    );
  });
};

export const HintFilter = ({ width }) => {
  const spotLights = renderSpotLights(width);
  const composites = renderComposites();

  return (
    <StyledFilter width={width} height="100%" version="1.1" xmlns="">
      <filter id="Hint">
        <feGaussianBlur stdDeviation="0.5" result="blur" />
        {spotLights}
        <feComposite
          in="SourceGraphic"
          in2="spec0"
          operator="arithmetic"
          k1="0"
          k2="1"
          k3="1"
          k4="0"
        />
        {composites}
      </filter>

      <defs>
        <pattern
          id="image"
          patternUnits="userSpaceOnUse"
          height="100%"
          width={width}
        >
          <image x="0" y="0" width="100%" href="background.png" />
        </pattern>
      </defs>

      <rect
        width={width}
        height="100%"
        fill="url(#image)"
        filter="url(#Hint)"
      />
    </StyledFilter>
  );
};
