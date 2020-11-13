import React from "react";
import styled from "styled-components";

import { getHintCoords } from "../../utils/coordinatesCalc";
import { MAP_AREAS } from "../../const";

const StyledHint = styled.div`
  position: absolute;
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;
  border-radius: 100%;
  background-color: #e406b2;
  opacity: 0.5;
  width: 40px;
  height: 40px;
  z-index: 100;
  box-shadow: #e406b2 0px 0px 8px 9px;
  opacity: 0.5;

  @keyframes blinker {
    50% {
      opacity: 0.1;
    }
  }
  animation: blinker 1.5s linear infinite;
`;

export const Hint = ({ width, imageName }) => {
  return MAP_AREAS[imageName].map((area, index) => {
    const { x, y } = getHintCoords(width, area, imageName);
    return <StyledHint x={x} y={y} />;
  });
};
