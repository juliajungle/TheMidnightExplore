import React from "react";
import styled from "styled-components";
import logoBackground from "../../images/download.jpeg";

import Canvas from "./Canvas";

const StyledLoading = styled.div`
  position: absolute;
  z-index: -1;
  top: 36px;
  left: 37px;
  background-image: url(${logoBackground});
  background-color: black;
  background-size: cover;
  background-position: center;
  width: 366px;
  height: 306px;
  opacity: 0.5;

  @media (max-width: 500px) {
    width: 312px;
    height: 260px;
  }
`;
export const Loading = ({ width }) => {
  return (
    <StyledLoading width={width}>
      {/* <Canvas width={width} /> */}
    </StyledLoading>
  );
};
