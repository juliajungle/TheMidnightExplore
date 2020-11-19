import React from "react";
import styled from "styled-components";

import Canvas from "./Canvas";

const StyledLoading = styled.div`
  position: absolute;
  top: 0;
  background-image: url(/download.jpeg);
  background-size: cover;
  background-position: center;
  width: 100%;
  // height: 308px;
  height: ${(props) => `${Math.min(308, props.width * 0.68)}px`};
  z-index: -100;
  opacity: 0.5;
`;
export const Loading = ({ width }) => {
  return (
    <StyledLoading width={width}>
      <Canvas width={width} />
    </StyledLoading>
  );
};
