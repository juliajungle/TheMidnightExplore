import React from "react";
import styled from "styled-components";

const StyledImage = styled.div`
  img {
    width: 800px;
    height: auto;
  }
`;

export const Image = () => (
  <StyledImage>
    <img src="background.png" alt="Monsters wallpaper" usemap="#monsters" />
  </StyledImage>
);

export const ImageMap = ({ handleClick }) => {
  return (
    <map name="monsters">
      <area
        onClick={handleClick}
        shape="rect"
        coords="210,200,260,250"
        alt="TV"
        href="#"
      />
    </map>
  );
};
