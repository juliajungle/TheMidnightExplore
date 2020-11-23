import React from "react";
import styled from "styled-components";
import logoBackground from "../../images/download.jpeg";

import Canvas from "./Canvas";

const StyledLoading = styled.div`
  position: absolute;
  top: -1px;
  background-image: url(${logoBackground});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: ${(props) => `${Math.min(276, props.width * 0.68)}px`};
  opacity: 0.5;
  border-radius: 4%;
`;
export const Loading = ({ width }) => {
  console.log("loading", width);
  return (
    <StyledLoading width={width}>
      <Canvas width={width} />
    </StyledLoading>
  );
};
