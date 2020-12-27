import React from "react";
import styled from "styled-components";
import logoBackground from "../../images/download.jpeg";

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
`;
export const Loading = ({ width }) => {
  return <StyledLoading width={width}></StyledLoading>;
};
