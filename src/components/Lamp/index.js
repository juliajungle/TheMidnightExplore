import React, { useState } from "react";
import { Fragment } from "react";
import styled from "styled-components";
import lampCover from "../../images/lamp-cover.png";

const StyledWrapper = styled.div`
  position: absolute;
`;

const StyledImage = styled.img`
  position: absolute;
  left: 0; //${(props) => props.x}px;
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

export const Lamp = ({ image, width }) => {
  const [lampOn, setLampOn] = useState(false);

  const handleClick = () => {
    setLampOn(!lampOn);
  };

  return (
    <StyledWrapper>
      <StyledImage
        src={lampCover}
        // x={width * 0.5625 * 0.}
        y={width * 0.5625 * 0.373}
        width={width * 0.158}
        // height={width * 0.5625 * 0.15}
      />
      {lampOn && (
        <Fragment>
          <svg width={width} height={width * 0.5625} version="1.1" xmlns="">
            <filter id="lightMe1">
              <feGaussianBlur stdDeviation="10" result="blur3" />

              <feSpecularLighting
                result="spec3"
                in="blur3"
                specularConstant="1.2"
                specularExponent="10"
                lightingColor="#FFF"
              >
                <feSpotLight
                  x={width * 0.5625 * 0.08}
                  y={width * 0.5625 * 0.5}
                  z="15"
                  limitingConeAngle="24"
                  pointsAtX={width * 0.5625 * 0.4}
                  pointsAtY={width * 0.5625 * 0.7}
                />
              </feSpecularLighting>

              <feComposite
                in="SourceGraphic"
                in2="spec3"
                operator="arithmetic"
                k1="0"
                k2="1"
                k3="1"
                k4="0"
              />
            </filter>

            <defs>
              <pattern
                id="image"
                patternUnits="userSpaceOnUse"
                height={width * 0.5625}
                width={width}
              >
                <image
                  x="0"
                  y="0"
                  height={width * 0.5625}
                  width={width}
                  src={image}
                ></image>
              </pattern>
            </defs>

            <rect
              width={width}
              height={width * 0.5625}
              fill="url(#image)"
              filter="url(#lightMe1)"
            />
          </svg>
        </Fragment>
      )}
      <StyledButton
        x={width * 0.5625 * 0.21}
        y={width * 0.5625 * 0.89}
        onClick={handleClick}
      ></StyledButton>
    </StyledWrapper>
  );
};
