import React from "react";
import styled from "styled-components";
import logoBackground from "../../images/download.jpeg";

import Canvas from "./Canvas";

const StyledLoading = styled.div`
  position: absolute;
  top: -1px;
  background-image: url(${logoBackground});
  background-color: black;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 306px;
  opacity: 0.5;
  border-radius: 4%;

  @media (max-width: 500px) {
    width: 312px;
    height: 260px;
  }
`;
export const Loading = ({ width }) => {
  return (
    <StyledLoading width={width}>
      <Canvas width={width} />
    </StyledLoading>
  );
};
