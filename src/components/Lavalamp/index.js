import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import lavaLamp from "../../images/lavalamp.png";
import lavaLamp2 from "../../images/lavalamp2.png";
import lavaLampPurple from "../../images/lavalamp-purple.png";
import lavaLamp2Purple from "../../images/lavalamp2-purple.png";

const StyledWrapper = styled.div`
  position: absolute;
  top: ${(props) => props.cssTop}px;
  left: ${(props) => props.cssLeft}px;
  z-index: 10;
  width: ${(props) => props.cssWidth}px;
  height: ${(props) => props.cssHeight}px;
  cursor: pointer;
`;

const StyledLamp = styled.div`
  position: absolute;
  background-image: url(${(props) => props.lampImage});
  background-size: contain;
  background-repeat: no-repeat;
  width: ${(props) => props.cssWidth}px;
  height: ${(props) => props.cssHeight}px;
`;

const StyledLava = styled.div`
  filter: url("#goo");
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;

  clip-path: ${(props) => props.clip};
`;

const blobStyles = css`
  border-radius: 50%;
  position: absolute;
`;

const StyledBlob1 = styled.div`
  ${blobStyles}
  width: calc(15% * 1.4);
  height: 15%;
  left: 45%;
  bottom: -15%;
  background: ${(props) =>
    props.changeColor
      ? `linear-gradient(-45deg,#c34bf0, #7106d3)`
      : `linear-gradient(-45deg, #fc69c1, #c9408a)`};
  animation: blob-one ease-in-out 14s infinite;

  @keyframes blob-one {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-700%);
    }
  }
`;

const StyledBlob2 = styled.div`
  ${blobStyles}
  width: calc(22% * 1.4);
  height: 22%;
  right: 14%;
  bottom: -15%;
  background: ${(props) =>
    props.changeColor
      ? `linear-gradient(-45deg, #c34bf0, #7106d3)`
      : `linear-gradient(-45deg, #fc69c1, #c9408a)`};

  animation: blob-two ease-in-out 16s infinite;
  @keyframes blob-two {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-420%);
    }
  }
`;

const StyledBlob3 = styled.div`
  ${blobStyles}
  width: calc(32% * 1.4);
  height: 32%;
  bottom: -15%;
  left: 14%;
  background: ${(props) =>
    props.changeColor
      ? `linear-gradient(-45deg, #c34bf0, #7106d3)`
      : `linear-gradient(-45deg, #fc69c1, #c9408a)`};

  animation: blob-three ease-in-out 20s infinite;
  @keyframes blob-three {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-305%);
    }
  }
`;

export const LavaLamp = ({ width, areaName }) => {
  const [clickCount, setClickCount] = useState(0);
  const [image, setImage] = useState(lavaLamp);
  const [clip, setClip] = useState("polygon(34% 0, 66% 0, 99% 97%, 1% 97%)");

  useEffect(() => {
    if (areaName === "area2") {
      setImage(lavaLamp2);
      setClip("polygon(34% 0, 65% 0, 99% 97%, 1% 97%);");
    }
  }, [areaName]);

  useEffect(() => {
    if (clickCount === 1) {
      if (areaName === "area2") {
        setImage(lavaLamp2);
      } else {
        setImage(lavaLamp);
      }
    }
    if (clickCount === 2) {
      if (areaName === "area2") {
        setImage(lavaLamp2Purple);
      } else {
        setImage(lavaLampPurple);
      }
    }
    if (clickCount === 3) {
      setClickCount(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickCount]);

  const positions = {
    area2: {
      x: width * 0.2785,
      y: width * 0.14 * 0.5625,
      width: width * 0.029,
      height: width * 0.114 * 0.5625,
    },
    area3: {
      x: width * 0.064,
      y: width * 0.2 * 0.5625,
      width: width * 0.026,
      height: width * 0.099 * 0.5625,
    },
  };

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };
  return (
    <StyledWrapper
      cssTop={positions[areaName].y}
      cssLeft={positions[areaName].x}
      onClick={handleClick}
      cssWidth={positions[areaName].width}
      cssHeight={positions[areaName].height}
    >
      {clickCount > 0 && (
        <StyledLamp
          lampImage={image}
          cssWidth={positions[areaName].width}
          cssHeight={positions[areaName].height}
        >
          <StyledLava clip={clip}>
            <StyledBlob1 changeColor={clickCount === 2} />
            <StyledBlob2 changeColor={clickCount === 2} />
            <StyledBlob3 changeColor={clickCount === 2} />
          </StyledLava>
        </StyledLamp>
      )}

      <svg
        width={positions[areaName].width}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
    </StyledWrapper>
  );
};
