import React, { useState } from "react";
import styled, { css } from "styled-components";
import skateboard from "../../images/skateboard.png";
import skateboardBack from "../../images/skateboard-back.png";

const StyledWrapper = styled.div`
  position: absolute;
  top: 100px;
  left: 0;
`;

const skateboardStyles = css`
  backface-visibility: hidden;
  transition: 0.6s;
  transform-style: preserve-3d;

  position: absolute;
  top: 0;
  left: 0;
  width: 500px;
  height: 150px;
  //   background-size: 150px;
  background-position: center;
  background-repeat: no-repeat;
`;

const StyledSkateboardBack = styled.div`
${skateboardStyles}

  background-image: url(${skateboardBack});
  z-index: ${(props) => (props.isFlipped ? 0 : 2)};
  transition: z-index 0.5s ease;
`;

const StyledSkateboard = styled.div`
  ${skateboardStyles}
  transform: ${(props) =>
    props.isFlipped ? `rotateX(0deg)` : `rotateX(180deg)`};
  background-image: url(${skateboard});
`;

const StyledFlipper = styled.div`
  position: relative;
  transition: 0.6s;
  transform-origin: 100% 75px;
	transform-style: preserve-3d;
//   transform: ${(props) => (props.isFlipped ? `scaleX(-1)` : `scaleX(1)`)};
  transform: ${(props) =>
    props.isFlipped ? `rotateX(180deg)` : `rotateX(0deg)`};
  cursor: pointer;
`;

const StyledFlipContainer = styled.div`
  perspective: 1000px;
  width: 500px;
  height: 150px;
`;

const StyledLink = styled.a`
  position: absolute;
  z-index: 10;
  top: 21px;
  left: 205px;
  display: block;
  text-decoration: none;
  :hover p {
    text-shadow: 0 2px 4px white;
  }

  p {
    text-decoration: none;
    color: #444e7a;
    font-size: 26px;
    font-family: "Permanent Marker", cursive;
    text-align: center;
    text-shadow: 0 1px 1px white;
  }
`;

export const Skateboard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const handleClick = () => {
    setIsWaiting(true);
    setIsFlipped(!isFlipped);
    setTimeout(() => {
      setIsWaiting(false);
    }, 1000);
  };
  return (
    <StyledWrapper>
      <StyledFlipContainer>
        <StyledFlipper isFlipped={isFlipped}>
          <StyledSkateboardBack
            isWaiting={isWaiting}
            isFlipped={isFlipped}
            onClick={handleClick}
          />
          <StyledSkateboard isWaiting={isWaiting} onClick={handleClick}>
            <StyledLink
              href="https://merch.ambientinks.com/collections/themidnight/products/preorder-horror-show-skateboard-deck"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p>SHOP</p>
            </StyledLink>
          </StyledSkateboard>
        </StyledFlipper>
      </StyledFlipContainer>
    </StyledWrapper>
  );
};
