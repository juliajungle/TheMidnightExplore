import styled from "styled-components";
import monstersprite8bit from "./images/monstersprite.png";
import timForward from "./images/tim-sprite.png";
import tylerForward from "./images/tyler-sprite.png";
export const StyledImage = styled.img`
  z-index: 100;
`;

export const StyledWrapper = styled.div`
  position: absolute;
  top: 58px;
  left: 50px;
  width: 341px;
  height: 280px;
  background-color: black;
  margin: auto;
  .hidden {
    display: none;
  }
`;

export const StyledCanvas = styled.canvas`
  background-color: black;
  width: 272px;
  margin: 0 auto;
  display: block;
  :focus {
    outline: none;
  }
`;

export const StyledStart = styled.div`
  position: absolute;
  z-index: 1;
  color: white;
  background-color: black;
  width: 317px;
  width: 317px;
  height: 272px;

  text-align: center;
`;

export const StyledEnd = styled.div`
  position: absolute;
  z-index: 1;
  color: white;
  top: 38%;
  left: 19%;
  background-color: black;
  padding: 20px;
  width: 180px;

  border: 2px solid #fa068a;

  span {
    font-family: "Press Start 2P";
    text-shadow: #f7f6f2 1px 0 10px;
  }
`;

export const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-family: "Press Start 2P";
  text-shadow: #fc0 1px 0 10px;
  animation: blinker 1s linear infinite;
  margin-top: 20px;
  img {
    width: 35px;
  }
  :active {
    outline: none;
    border: none;
  }
  :focus {
    outline: none;
    border: none;
  }

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`;

export const PlayerButton = styled.button`
  background-color: transparent;
  border: ${(props) => props.showFocused};
  color: white;
  font-family: "Press Start 2P";
  text-shadow: #f7f6f2 1px 0 10px;
  animation: blinker 1s linear infinite;
  margin-top: 20px;
  img {
    width: 35px;
  }
  :active {
    outline: none;
    border: none;
  }
  :focus {
    outline: none;
    border: none;
  }

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`;
export const MonsterSprite = styled.div`
  position: absolute;
  top: 48px;
  left: 49px;
  background-image: url(${monstersprite8bit});
  background-size: 30px;
  width: 30px;
  height: 30px;
  animation: move 1s infinite;

  @keyframes move {
    0% {
      background-position: 0 0;
    }
    49% {
      background-position: 0 0;
    }
    50% {
      background-position: 0 30px;
    }
    100% {
      background-position: 0 30px;
    }
  }
`;

export const RescueSprite = styled.div`
  position: absolute;
  top: 5px;
  left: 200px;
  background-image:  ${(props) =>
    props.player === "Tyler" ? `url(${timForward})` : `url(${tylerForward})`};
  }
  background-size: 20px;
  width: 20px;
  height: 30px;
  background-repeat: no-repeat;
  animation: move 1s infinite;
  @keyframes move {
    0% {
      background-position: 0 0;
    }
    49% {
      background-position: 0 0;
    }
    50% {
      background-position: 0 -30px;
    }
    100% {
      background-position: 0 -30px;
    }
  }
`;

export const Winner = styled.div`
  position: absolute;
  top: 5px;
  left: ${(props) => props.position}px;
  background-image:  ${(props) =>
    props.player === "Tyler" ? `url(${timForward})` : `url(${tylerForward})`};
  }
  background-size: 20px;
  width: 20px;
  height: 30px;
  background-repeat: no-repeat;
  background-position: 0 -30px;
`;

export const StyledTitle = styled.p`
  color: #fa058a;
  font-size: 20px;
  text-shadow: #f7f6f2 1px 0 10px;
  font-family: "Press Start 2P";
`;

export const StyledParagraph = styled.p`
  color: #fffff;
  font-size: 14px;
  text-shadow: #f7f6f2 1px 0 10px;
  font-family: "Press Start 2P";
`;
