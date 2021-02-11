import React, { useState } from "react";
import styled from "styled-components";
import { HEIGHT_RATIO } from "../../const";
import lampLight from "../../images/lampon.jpg";

const StyledWrapper = styled.div`
  position: absolute;
`;

const StyledImage = styled.img`
  position: absolute;
  left: 0;
  top: ${(props) => props.y}px;
`;

const StyledButton = styled.button`
  position: absolute;
  left: ${(props) => props.x}px;
  top: ${(props) => props.y}px;
  width: ${(props) => props.width}px;

  height: ${(props) => props.height}px;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

export const Lamp = ({ width }) => {
  const [lampOn, setLampOn] = useState(false);

  const handleClick = () => {
    setLampOn(!lampOn);
  };

  return (
    <StyledWrapper>
      {lampOn && (
        <StyledImage
          src={lampLight}
          y={width * HEIGHT_RATIO * 0.444}
          width={width}
        />
      )}
      <StyledButton
        x={width * HEIGHT_RATIO * 0.21}
        y={width * HEIGHT_RATIO * 0.9}
        width={width * 0.025}
        height={width * 0.025}
        onClick={handleClick}
      ></StyledButton>
    </StyledWrapper>
  );
};
