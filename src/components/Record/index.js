import React, { useState } from "react";
import styled, { css } from "styled-components";
import record from "../../images/record.png";
import record2 from "../../images/record2.png";
import { Loading } from "../Shared/Loading";

const lightColor = "#191919";
const darkColor = "black";

const StyledWrapper = styled.div`
  position: absolute;
  top: 100px;
`;

const recordStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 110px;
  height: 110px;
  background-size: 110px;
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
    0 0 0 37px ${lightColor}, 0 0 0 38px ${darkColor}, 0 0 0 39px ${lightColor},
    0 0 0 40px ${darkColor}, 0 0 0 41px ${lightColor}, 0 0 0 42px ${darkColor},
    0 0 0 43px ${lightColor}, 0 0 44px ${darkColor}, 0 0 0 45px ${lightColor},
    0 0 0 46px ${darkColor}, 0 0 0 47px ${lightColor}, 0 0 0 48px ${darkColor},
    0 0 0 49px ${lightColor}, 0 0 0 50px ${darkColor}, 0 0 0 51px ${lightColor},
    0 0 0 52px ${darkColor}, 0 0 0 53px ${lightColor}, 0 0 0 54px ${darkColor},
    0 0 0 55px ${lightColor}, 0 0 0 56px ${darkColor}, 0 0 0 57px ${lightColor},
    0 0 0 58px ${darkColor}, 0 0 0 59px ${lightColor}, 0 0 0 60px ${darkColor},
    0 0 0 61px ${lightColor}, 0 0 0 62px ${darkColor}, 0 0 0 63px ${lightColor},
    0 0 0 64px ${darkColor}, 0 0 0 65px ${lightColor}, 0 0 0 66px ${darkColor},
    0 0 0 67px ${lightColor}, 0 0 0 68px ${darkColor}, 0 0 0 69px ${lightColor},
    0 0 0 70px ${darkColor}, 0 0 0 71px ${lightColor}, 0 0 0 72px ${darkColor},
    0 0 0 73px ${lightColor}, 0 0 0 74px ${darkColor}, 0 0 0 75px ${lightColor},
    0 0 0 76px ${darkColor}, 0 0 0 77px ${lightColor}, 0 0 0 78px ${darkColor},
    0 0 0 79px ${lightColor}, 0 0 0 80px ${darkColor}, 0 0 0 81px ${lightColor},
    0 0 82px ${darkColor}, 0 0 0 83px ${lightColor}, 0 0 84px ${darkColor};
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
    props.isFlipped ? `none` : `play 10s 1s infinite linear`};
  animation-direction: reverse;

`;

const StyledRecordBack = styled.div`
  ${recordStyles}
  background-image: url(${record2});
  animation: ${(props) =>
    props.isFlipped ? `play 10s 1s infinite linear` : `none`};
 
`;

const StyledFlipper = styled.div`
  position: relative;
  width: 110px;
  height: 110px;
  transition: 0.6s;
  transform: ${(props) => (props.isFlipped ? `scaleX(-1)` : `scaleX(1)`)};
  cursor: pointer;
`;

const StyledFlipContainer = styled.div`
  perspective: 1000px;
`;

const StyledIframe = styled.iframe`
  border-color: transparent; //none;
  border-radius: 5px;
  opacity: ${(props) => (props.isLoading ? 0 : 1)};
  transition: opacity 2s ease-in 0.5s;
`;

const StyledIframeContainer = styled.div`
  position: absolute;
  top: -100px;
  left: 300px;
  width: 300px;
  height: ${(props) => (props.isLoading ? 140 : 380)}px;

  background-color: ${(props) =>
    props.isLoading ? `black` : `transparent`}; //#9c083cb8;
  border-radius: 5px;
  transition: all 1s ease-in;
`;

export const Record = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const hideLoader = () => {
    setIsLoading(false);
  };
  return (
    <StyledWrapper>
      <StyledFlipContainer>
        <StyledFlipper isFlipped={isFlipped}>
          <StyledRecordFront isFlipped={isFlipped} onClick={handleClick} />
          <StyledRecordBack isFlipped={isFlipped} onClick={handleClick} />
        </StyledFlipper>
      </StyledFlipContainer>
      <StyledIframeContainer isLoading={isLoading}>
        <Loading width="175" height="110" isLoading={isLoading} />
        <StyledIframe
          src="https://open.spotify.com/embed/playlist/7hSeJtbd3urlrbJDsO1BWA"
          width="300"
          height="380"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
          isLoading={isLoading}
          onLoad={hideLoader}
        ></StyledIframe>
      </StyledIframeContainer>
    </StyledWrapper>
  );
};
