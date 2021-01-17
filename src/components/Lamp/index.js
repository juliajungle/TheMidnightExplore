import React, { useState } from "react";
import styled from "styled-components";
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
  width: 20px;
  height: 20px;
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
        <StyledImage src={lampLight} y={width * 0.5625 * 0.444} width={width} />
      )}
      <StyledButton
        x={width * 0.5625 * 0.21}
        y={width * 0.5625 * 0.9}
        onClick={handleClick}
      ></StyledButton>
    </StyledWrapper>
  );
};
