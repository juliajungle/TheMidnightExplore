import React from "react";
import styled from "styled-components";
import { getHintCoords } from "../utils/coordinatesCalc";

const StyledFilter = styled.svg`
  position: absolute;
`;

export const Filter = ({ width, height }) => {
  const { x, y } = getHintCoords(width, height);
  const adjustedY = y + 10;
  return (
    <StyledFilter width={width} height="100%" version="1.1" xmlns="">
      <filter id="Hint">
        <feGaussianBlur stdDeviation="0.5" result="blur" />

        <feSpecularLighting
          result="spec"
          in="blur"
          specularConstant="1"
          specularExponent="30"
          lighting-color="#c21a95"
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

        <feComposite
          in="SourceGraphic"
          in2="spec"
          operator="arithmetic"
          k1="0"
          k2="1"
          k3="1"
          k4="0"
        />
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
