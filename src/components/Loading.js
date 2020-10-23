import React from "react";
import styled from "styled-components";

import Canvas from "./Canvas";

const StyledLoading = styled.div`
  background-image: url(/download.jpeg);
  background-size: cover;
  background-position: center;
  width: 360px;
  height: 260px;
  z-index: -100;
  position: absolute;
  opacity: 0.5;
`;
export const Loading = () => {
  return (
    <StyledLoading>
      <Canvas />
    </StyledLoading>
  );
};
