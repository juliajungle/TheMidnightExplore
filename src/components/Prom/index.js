import React from "react";
import styled from "styled-components";
import prom from "../../images/prom.jpg";

const StyledLink = styled.a`
  position: absolute;
  z-index: 10;
`;

const StyledImage = styled.img`
  position: absolute;
  left: 75px;
`;

export const Prom = () => {
  return (
    <StyledLink
      href="https://promnight.themidnightofficial.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <StyledImage src={prom} alt="Prom poster" />
    </StyledLink>
  );
};
