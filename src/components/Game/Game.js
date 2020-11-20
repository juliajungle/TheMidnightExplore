import React from "react";
import styled from "styled-components";
import { GameCanvas } from "./GameCanvas";

const StyledWrapper = styled.div`
  width: 320px;
  height: 320px;
`;

export const Game = ({ handleClick }) => {
  return (
    <div>
      <StyledWrapper>
        <GameCanvas />
      </StyledWrapper>
    </div>
  );
};
