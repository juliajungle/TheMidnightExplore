import React, { useState } from "react";
import styled, { css } from "styled-components";
import record from "../../images/record.png";
import record2 from "../../images/record2.png";

const lightColor = "#c88cc1";
const darkColor = "#b474bd";

const StyledWrapper = styled.div`
  position: absolute;
  top: 100px;
  right: 150px;
`;

const recordStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 150px;
  height: 150px;
  background-size: 150px;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 0 0 5px ${lightColor}, 0 0 0 6px ${darkColor},
    0 0 0 7px ${lightColor}, 0 0 0 8px ${darkColor}, 0 0 0 9px ${lightColor},
    0 0 0 10px ${darkColor}, 0 0 0 11px ${lightColor}, 0 0 0 12px ${darkColor},
    0 0 0 13px ${lightColor}, 0 0 0 14px ${darkColor}, 0 0 0 15px ${lightColor},
    0 0 0 16px ${darkColor}, 0 0 0 17px ${lightColor}, 0 0 0 18px ${darkColor},
    0 0 0 19px ${lightColor}, 0 0 0 20px ${darkColor}, 0 0 0 21px ${lightColor},
    0 0 0 22px ${darkColor}, 0 0 0 23px ${lightColor}, 0 0 0 24px ${darkColor},
    0 0 0 25px ${lightColor}, 0 0 0 26px ${darkColor}, 0 0 0 27px ${lightColor},
    0 0 0 28px ${darkColor}, 0 0 0 29px ${lightColor}, 0 0 0 30px ${darkColor},
    0 0 0 31px ${lightColor}, 0 0 0 32px ${darkColor}, 0 0 0 33px ${lightColor},
    0 0 0 34px ${darkColor}, 0 0 0 35px ${lightColor}, 0 0 0 36px ${darkColor},
    0 0 0 37px ${lightColor}, 0 0 38px ${darkColor}, 0 0 0 39px ${lightColor},
    0 0 0 40px ${darkColor}, 0 0 0 41px ${lightColor}, 0 0 0 42px ${darkColor},
    0 0 0 43px ${lightColor}, 0 0 0 44px ${darkColor}, 0 0 0 45px ${lightColor},
    0 0 0 46px ${darkColor}, 0 0 0 47px ${lightColor}, 0 0 0 48px ${darkColor},
    0 0 0 49px ${lightColor}, 0 0 0 50px ${darkColor}, 0 0 0 51px ${lightColor},
    0 0 0 52px ${darkColor}, 0 0 0 53px ${lightColor}, 0 0 0 54px ${darkColor},
    0 0 0 55px ${lightColor}, 0 0 0 56px ${darkColor}, 0 0 0 57px ${lightColor},
    0 0 0 58px ${darkColor}, 0 0 0 59px ${lightColor}, 0 0 0 60px ${darkColor},
    0 0 0 61px ${lightColor}, 0 0 0 62px ${darkColor}, 0 0 0 63px ${lightColor},
    0 0 0 64px ${darkColor}, 0 0 0 65px ${lightColor}, 0 0 0 66px ${darkColor},
    0 0 0 67px ${lightColor}, 0 0 0 68px ${darkColor}, 0 0 0 69px ${lightColor},
    0 0 0 70px ${darkColor}, 0 0 0 71px ${lightColor}, 0 0 72px ${darkColor},
    0 0 0 73px ${lightColor};
  border-radius: 50%;

  @keyframes play {
    0% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(1deg);
    }
  }
`;

const StyledRecordFront = styled.div`
 ${recordStyles}
  background-image: url(${record});
  z-index: ${(props) => (props.isFlipped ? 0 : 2)};
  transition: z-index 0.5s ease;
  animation: ${(props) =>
    props.isWaiting ? `none` : `play 10s 0s infinite linear`};
  animation-direction: reverse;

`;

const StyledRecordBack = styled.div`
  ${recordStyles}
  background-image: url(${record2});
  animation: ${(props) =>
    props.isWaiting ? `none` : `play 10s 0s infinite linear`};
 
`;

const StyledFlipper = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  transition: 0.6s;
  transform: ${(props) => (props.isFlipped ? `scaleX(-1)` : `scaleX(1)`)};
  cursor: pointer;
`;

const StyledFlipContainer = styled.div`
  perspective: 1000px;
`;

const StyledLink = styled.a`
  position: absolute;
  top: -70px;
  left: -70px;
  width: 295px;
  height: 295px;
  display: block;
  border-radius: 100%;
`;

export const Record = () => {
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
      <StyledLink
        href="https://merch.ambientinks.com/collections/themidnight/products/preorder-monsters-lp"
        target="_blank"
        rel="noopener noreferrer"
      ></StyledLink>
      <StyledFlipContainer>
        <StyledFlipper isFlipped={isFlipped}>
          <StyledRecordFront
            isWaiting={isWaiting}
            isFlipped={isFlipped}
            onClick={handleClick}
          />
          <StyledRecordBack isWaiting={isWaiting} onClick={handleClick} />
        </StyledFlipper>
      </StyledFlipContainer>
    </StyledWrapper>
  );
};
