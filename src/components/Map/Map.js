import React from "react";
import styled, { css } from "styled-components";
import map from "../../images/map.jpg";
import { CloseButton } from "../Shared/ModalButtons";

const StyledWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 400px;
  background-image: url(${map});
  background-color: white;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 1%;
  border: 5px solid white;

  @media (max-width: 500px) {
    height: 341px;
  }
`;

const pinStyles = css`
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #a82f87;
  border-radius: 100%;
  box-shadow: #312f2f 0px 3px 5px 1px;
  cursor: pointer;

  :hover {
    div {
      display: block;
    }
  }
`;

const StyledPin1 = styled.div`
  ${pinStyles}
  left: 179px;
  top: 116px;
`;

const StyledPin2 = styled.div`
  ${pinStyles}
  left: 182px;
  top: 377px;
`;

const StyledLocation = styled.div`
  display: none;
  width: 120px;
  padding: 2px;
  border-radius: 5px;
  background-color: white;
  opacity: 0.6;
  cursor: auto;
`;

const StyledInfo = styled.p`
  font-family: helvetica;
  font-size: 14px;
  padding: 0 2px;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: -18px;
  top: -21px;
`;

export const Map = ({ handleClick, mapItem }) => {
  return (
    <StyledWrapper>
      <ButtonWrapper>
        {" "}
        <CloseButton handleClick={handleClick} />
      </ButtonWrapper>

      {mapItem === "niagara" && (
        <StyledPin1>
          <StyledLocation>
            <StyledInfo>Niagara, Manhattan</StyledInfo>
          </StyledLocation>
        </StyledPin1>
      )}
      {mapItem === "electrospin" && (
        <StyledPin2>
          <StyledLocation>
            <StyledInfo>Electro Spin, Coney Island</StyledInfo>
          </StyledLocation>
        </StyledPin2>
      )}
    </StyledWrapper>
  );
};
