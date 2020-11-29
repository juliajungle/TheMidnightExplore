import React from "react";
import styled from "styled-components";
import { GameCanvas } from "./GameCanvas";
import { TVButton, TVButtonContainer } from "../Shared/ModalButtons";
import tv from "../../images/tv.png";

const StyledWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 400px;
  background-image: url(${tv});
  background-color: black;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 1%;

  @media (max-width: 500px) {
    height: 341px;
  }
`;

export const Game = ({ handleClick }) => {
  return (
    <StyledWrapper>
      <GameCanvas />
      <TVButtonContainer>
        <TVButton handleClick={handleClick} />
      </TVButtonContainer>
    </StyledWrapper>
  );
};
