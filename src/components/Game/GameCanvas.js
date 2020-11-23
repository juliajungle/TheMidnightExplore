import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { drawGrid } from "./draw";
import robot from "../../images/robot.png";
import robotBackward from "../../images/robot-backward.png";
import robotLeft from "../../images/robot-left.png";
import robotRight from "../../images/robot-right.png";

const StyledImage = styled.img`
  z-index: 100;
`;

const StyledWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin: auto;
  .hidden {
    display: none;
  }
`;

const StyledCanvas = styled.canvas`
  position: absolute;
  background-color: black;
  top: 10%;
  width: 263px;
  border: black solid 10px;
  :focus {
    outline: none;
  }
`;

const StyledStart = styled.div`
  position: absolute;
  z-index: 1;
  color: white;
  top: 35%;
  left: 12%;
  background-color: black;
  padding: 20px;
  width: 165px;
  border: 2px solid #a53479;
  text-align: center;

  span {
    font-family: "Press Start 2P";
    text-shadow: #fc0 1px 0 10px;
  }
`;

const StyledEnd = styled.div`
  position: absolute;
  z-index: 1;
  color: white;
  top: 38%;
  left: 12%;
  background-color: black;
  padding: 20px;
  width: 180px;

  border: 2px solid #a53479;

  span {
    font-family: "Press Start 2P";
    text-shadow: #fc0 1px 0 10px;
  }
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-family: "Press Start 2P";
  text-shadow: #fc0 1px 0 10px;
  animation: blinker 1s linear infinite;
  :focus {
    outline: none;
  }
  :active {
    outline: none;
  }

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`;

export const GameCanvas = () => {
  const [xPosition, setxPosition] = useState(10);
  const [yPosition, setyPosition] = useState(263); //useState(58);
  const [facingDirection, setFacingDirection] = useState("SOUTH");
  const [gameStart, setStartVisible] = useState(true);
  const [giftX, setGiftX] = useState(10);
  const [giftY, setGiftY] = useState(78);
  const [collision, setCollision] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  let animationFrameId;
  const canvasRef = useRef(null);
  const image = useRef();
  const reset = useRef();
  const resetRef = useRef();
  const imageright = useRef();
  const imageleft = useRef();
  const imageback = useRef();
  let floorPaths = [];

  const getRobotImage = (facing) => {
    switch (facing) {
      case "NORTH":
        return imageback.current;
      case "SOUTH":
        return image.current;
      case "EAST":
        return imageright.current;
      case "WEST":
        return imageleft.current;
      default:
        return imageback.current;
    }
  };

  const drawRobot = (ctx) => {
    const img = getRobotImage(facingDirection);
    ctx.drawImage(img, xPosition, yPosition, 15, 30);
  };

  const isFloor = (x, y, context) => {
    return (
      floorPaths.filter((path, index) => {
        return context.isPointInPath(path, x + 10, y + 30);
      }).length > 0
    );
  };

  const isLadder = (x, y) => {
    // ladder 1
    const isLadder1 = x >= 192 && x <= 210 && y >= 189 && y <= 238;
    const isLadder2 = x >= 59 && x <= 157 && y >= 134 && y <= 182;
    const isLadder3 = x >= 192 && x <= 210 && y >= 68 && y <= 117;
    const isLadder4 = x >= 140 && x <= 153 && y >= 12 && y <= 66;
    return isLadder1 || isLadder2 || isLadder3 || isLadder4;
  };

  const setNewPosition = (ctx, xSpeed, ySpeed, direction) => {
    if (isFloor(xPosition + xSpeed, yPosition + ySpeed, ctx)) {
      setxPosition(xPosition + xSpeed);
      setyPosition(yPosition + ySpeed);
      setFacingDirection(direction);
    }
  };

  function drawBall(ctx) {
    const ball = new Path2D();
    ctx.beginPath();
    ball.arc(giftX, giftY, 5, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill(ball);
    ctx.closePath();

    if (ctx.isPointInPath(ball, xPosition, yPosition + 20)) {
      setCollision(true);
    }
  }

  const animateBall = (frameCount) => {
    // move along floor 4
    if (frameCount < 300) {
      setGiftX(giftX + frameCount * 0.93); // 280 = 300 * 0.93
      setGiftY(giftY + frameCount * 0.07); // 100 = 300 * 0.337
    }
    // drop to floor 3
    if (frameCount >= 300 && frameCount < 320) {
      setGiftY(giftY + frameCount * 0.154);
    }

    // move along floor 3 x from 280 to 10
    if (frameCount >= 320 && frameCount < 620) {
      setGiftX(280 - (frameCount - 319) * 0.9);
      setGiftY(giftY + (frameCount + 20) * 0.14);
    }

    // drop to floor 2
    if (frameCount >= 620 && frameCount < 640) {
      setGiftY(giftY + frameCount * 0.19);
    }
    // move along floor 2
    if (frameCount >= 640 && frameCount < 940) {
      setGiftX(giftX + (frameCount - 639) * 0.93);
      setGiftY(200 + (frameCount - 639) * 0.07);
    }
    // drop to floor 1
    if (frameCount >= 940 && frameCount < 945) {
      setGiftY(giftY + frameCount * 0.18);
    }
    // move along floor 1
    if (frameCount >= 945) {
      setGiftX(280 - (frameCount - 944) * 0.9);
      setGiftY(248 + (frameCount - 944) * 0.13);
    }
  };

  const animate = () => {
    let frameCount = 0;

    const render = () => {
      frameCount++;
      // repeat animation loop
      if (frameCount > 1350) {
        frameCount = 0;
      }

      animateBall(frameCount);
      animationFrameId = window.requestAnimationFrame(render);
      window.cancelAnimationFrame(animationFrameId - 1);
    };

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  };

  const drawCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 320, 320);
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    floorPaths = drawGrid(ctx);
    drawRobot(ctx);
    drawBall(ctx);
  };

  const drawJump = (frameCount) => {
    if (frameCount < 30) {
      setyPosition(yPosition - frameCount);
    }

    if (frameCount >= 30) {
      setyPosition(yPosition);
    }
  };

  const jump = () => {
    let frameCount = 0;
    const frame = () => {
      if (frameCount > 50) {
        clearInterval(id);
      } else {
        frameCount++;
        drawJump(frameCount);
      }
    };

    let id = setInterval(frame, 10);
  };

  const move = (e) => {
    setStartVisible(false);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (e.code === "Space") {
      jump();
    }
    if (e.key === "ArrowRight") {
      // floor 1
      if (yPosition > 220) {
        setNewPosition(ctx, 8, -1, "EAST");
      }
      // floor 2
      if (yPosition < 220 && yPosition > 175) {
        setNewPosition(ctx, 13, 1, "EAST");
      }
      // floor 3
      if (yPosition <= 175 && yPosition > 100) {
        setNewPosition(ctx, 8, -1, "EAST");
      }
      // floor 4
      if (yPosition <= 100 && yPosition > 20) {
        setNewPosition(ctx, 13, 1, "EAST");
      }
      // floor 5
      if (yPosition <= 20) {
        setNewPosition(ctx, 5, 0, "EAST");
        setGameWon(true);
      }
    }
    if (e.key === "ArrowDown") {
      if (isLadder(xPosition, yPosition + 2)) {
        setyPosition(yPosition + 2);
        setFacingDirection("SOUTH");
      }
    }
    if (e.key === "ArrowUp") {
      if (isLadder(xPosition, yPosition - 2)) {
        setyPosition(yPosition - 2);
        setFacingDirection("NORTH");
      }
    }
    if (e.key === "ArrowLeft") {
      // floor 1
      if (yPosition > 220) {
        setNewPosition(ctx, -8, 1, "WEST");
      }
      // floor 2
      if (yPosition < 220 && yPosition > 175) {
        setNewPosition(ctx, -13, -1, "WEST");
      }
      // floor 3
      if (yPosition <= 175 && yPosition > 100) {
        setNewPosition(ctx, -8, 1, "WEST");
      }
      // floor 4
      if (yPosition <= 100 && yPosition > 20) {
        setNewPosition(ctx, -13, -1, "WEST");
      }
      // floor 5
      if (yPosition <= 20) {
        setNewPosition(ctx, -5, 0, "WEST");
      }
    }
  };

  const restart = () => {
    setxPosition(10);
    setyPosition(263);
    setGiftX(10);
    setGiftY(78);
    setCollision(false);
    setGameWon(false);
    setFacingDirection("SOUTH");
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.onkeydown = move;
    // canvas.focus();
    if (!collision) {
      drawCanvas();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [xPosition, yPosition, facingDirection, giftX, giftY]);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.onkeydown = move;
    canvas.focus();
    let stopAnimation;
    if (!gameStart) {
      stopAnimation = animate();
    }
    return () => {
      if (stopAnimation) stopAnimation();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameStart, collision]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const resetButton = reset.current;
    const resetWin = resetRef.current;

    if (collision && resetButton) {
      resetButton.focus();
    }
    if (gameWon && resetWin) {
      resetWin.focus();
    }

    if (collision || gameWon) {
      ctx.clearRect(0, 0, 320, 320);
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      floorPaths = drawGrid(ctx);
    }
  }, [collision, gameWon]);

  return (
    <StyledWrapper>
      {gameStart && (
        <StyledStart>
          <span>PRESS ANY KEY TO START</span>
        </StyledStart>
      )}
      {collision && (
        <StyledEnd>
          <span>GAME OVER!</span>
          <StyledButton ref={reset} onClick={restart}>
            {`>`}Play again
          </StyledButton>
        </StyledEnd>
      )}
      {gameWon && (
        <StyledEnd>
          <span>YOU WIN!</span>
          <StyledButton ref={resetRef} onClick={restart}>
            {`>`} Play again
          </StyledButton>
        </StyledEnd>
      )}

      <StyledCanvas tabIndex="0" ref={canvasRef} width={300} height={300} />
      <StyledImage ref={image} src={robot} className="hidden" />
      <StyledImage ref={imageback} src={robotBackward} className="hidden" />
      <StyledImage ref={imageleft} src={robotLeft} className="hidden" />
      <StyledImage ref={imageright} src={robotRight} className="hidden" />
    </StyledWrapper>
  );
};
