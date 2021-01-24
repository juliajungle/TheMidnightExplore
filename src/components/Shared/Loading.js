import React from "react";
import { Fragment } from "react";
import styled from "styled-components";
import logoBackground from "../../images/loading.png";

const StyledLoadingAnimation = styled.div`
  position: absolute;
  top: 110px;
  left: 148px;
  width: 90px;
  padding: 0 5px 2px 7px;

  opacity: ${(props) => (props.isLoading ? 1 : 0)};
  transition: opacity 2s ease-out;

  :after,
  :before {
    content: "";
    position: absolute;
    pointer-events: none;
    border: solid 2px #f71276;
  }

  :after {
    left: 1px;
    right: 1px;
    top: 0;
    bottom: 0;
    border-left: none;
    border-right: none;
  }

  :before {
    top: 2px;
    bottom: 2px;
    left: 0;
    right: 0;
    border-top: none;
    border-bottom: none;
  }
`;

const StyledLoadingPart = styled.div`
  width: 8px;
  height: 8px;
  margin-right: 2px;
  background-color: #f71276;
  display:inline-block;
  opacity: 0;
  animation: loading-blinker 1.5s linear infinite;

  @keyframes loading-blinker {
    0% {
      opacity: 1;
    }
      50% {
      opacity: 1;
    }
      100% {
      opacity: 0;
    }
  }
}

:nth-child(1){
  animation-delay: 0s;
}
:nth-child(2){
  animation-delay: 0.1s;
}
:nth-child(3){
  animation-delay: 0.2s;
}
:nth-child(4){
  animation-delay: 0.3s;
}
:nth-child(5){
  animation-delay: 0.4s;
}
:nth-child(6){
  animation-delay: 0.5s;
}
:nth-child(7){
  animation-delay: 0.6s;
}
:nth-child(8){
  animation-delay: 0.7s;
}
:nth-child(9){
  animation-delay: 0.8s;
}


`;

const StyledLoading = styled.div`
  position: absolute;
  // z-index: -1;
  // top: 36px;
  // left: 37px;
  background-image: url(${logoBackground});
  // background-color: black;
  background-size: contain;
  background-position: top center;
  background-repeat: no-repeat;
  // width: ${(props) => props.width}px;
  width: 100%;
  height: 110px;
  border-radius: 5px;
  opacity: ${(props) => (props.isLoading ? 1 : 0)};
  transition: opacity 2s ease-out;
  margin: auto;
`;
export const Loading = ({ width, height, isLoading }) => {
  console.log({ width });
  return (
    <Fragment>
      <StyledLoadingAnimation isLoading={isLoading}>
        <StyledLoadingPart />
        <StyledLoadingPart />
        <StyledLoadingPart />
        <StyledLoadingPart />

        <StyledLoadingPart />
        <StyledLoadingPart />
        <StyledLoadingPart />
        <StyledLoadingPart />
        <StyledLoadingPart />
      </StyledLoadingAnimation>
      <StyledLoading
        width={width}
        height={height}
        isLoading={isLoading}
      ></StyledLoading>
    </Fragment>
  );
};
