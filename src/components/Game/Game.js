import React from "react";
import styled from "styled-components";
import { GameCanvas } from "./GameCanvas";
import { TVButton, TVButtonContainer } from "../Shared/ModalButtons";
import tv from "../../images/tv.png";

const StyledWrapper = styled.div`
  width: 100%;
  height: ${(props) => `${Math.min(380, props.responsiveWidth * 0.9)}px`};
  background-image: url(${tv});
  background-color: black;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  borer-radius: 1%;
`;

export const Game = ({ handleClick, width }) => {
  return (
    <StyledWrapper responsiveWidth={width}>
      <GameCanvas />
      <TVButtonContainer>
        <TVButton handleClick={handleClick} />
      </TVButtonContainer>
    </StyledWrapper>
  );
};
