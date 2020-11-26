import React, { useEffect, useState, useRef } from "react";
import { drawGrid } from "./draw";
import imageRight from "../../images/tim-right.png";
import imageForward from "../../images/tim-forward.png";
import imageBack from "../../images/tim-back.png";
import imageLeft from "../../images/tim-left.png";
import tylerRight from "../../images/tyler-right.png";
import tylerForward from "../../images/tyler-forward.png";
import tylerBack from "../../images/tyler-back.png";
import tylerLeft from "../../images/tyler-left.png";
import {
  StyledImage,
  StyledWrapper,
  StyledCanvas,
  StyledEnd,
  StyledStart,
  StyledButton,
  MonsterSprite,
  RescueSprite,
  Winner,
  StyledTitle,
  StyledParagraph,
  PlayerButton,
} from "./styles";

export const GameCanvas = () => {
  const [xPosition, setxPosition] = useState(10);
  const [yPosition, setyPosition] = useState(263); //useState(58);
  const [facingDirection, setFacingDirection] = useState("SOUTH");
  const [gameStart, setGameStart] = useState(true);
  const [giftX, setGiftX] = useState(10);
  const [giftY, setGiftY] = useState(78);
  const [collision, setCollision] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [playerName, setPlayerName] = useState("Tim");

  const canvasRef = useRef(null);
  const image = useRef();
  const reset = useRef();
  const resetRef = useRef();
  const imageright = useRef();
  const imageleft = useRef();
  const imageback = useRef();
  const tylerRightRef = useRef();
  const tylerLeftRef = useRef();
  const tylerBackRef = useRef();
  const tylerForwardRef = useRef();
  const playerTim = useRef();
  const playerTyler = useRef();
  let floorPaths = [];

  const getPlayerImage = (facing) => {
    switch (facing) {
      case "NORTH":
        return playerName === "Tim" ? imageback.current : tylerBackRef.current;
      case "SOUTH":
        return playerName === "Tim" ? image.current : tylerForwardRef.current;
      case "EAST":
        return playerName === "Tim"
          ? imageright.current
          : tylerRightRef.current;
      case "WEST":
        return playerName === "Tim" ? imageleft.current : tylerLeftRef.current;
      default:
        return imageback.current;
    }
  };

  const drawPlayer = (ctx) => {
    const img = getPlayerImage(facingDirection);
    ctx.drawImage(img, xPosition, yPosition, 15, 30);
  };

  const isFloor = (x, y, context) => {
    return (
      floorPaths.filter((path, index) => {
        return context.isPointInPath(path, x + 5, y + 30);
      }).length > 0
    );
  };

  const isLadder = (x, y) => {
    const isLadder1 = x >= 192 && x <= 210 && y >= 189 && y <= 238;
    const isLadder2 = x >= 59 && x <= 157 && y >= 134 && y <= 182;
    const isLadder3 = x >= 192 && x <= 210 && y >= 68 && y <= 117;
    const isLadder4 = x >= 138 && x <= 153 && y >= 12 && y <= 67;
    // ladder 1
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
    const gradient = ctx.createRadialGradient(
      giftX,
      giftY,
      0.5,
      giftX,
      giftY,
      7
    );
    gradient.addColorStop(0, "white");
    gradient.addColorStop(1, "#fa068a");

    const ball = new Path2D();
    ctx.beginPath();
    // ctx.arc(giftX, giftY, 7, 0, 2 * Math.PI);
    ball.arc(giftX, giftY, 7, 0, Math.PI * 2);
    // ctx.fillStyle = "#fa068a";
    ctx.fillStyle = gradient;
    // ctx.shadowBlur = 2;
    // ctx.shadowColor = "white";
    ctx.fill(ball);
    ctx.closePath();
    ctx.shadowBlur = 0;
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
    let animationFrameId;

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
    ctx.fillStyle = "#050505f0";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    floorPaths = drawGrid(ctx);
    drawPlayer(ctx);
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
      if (frameCount > 60) {
        clearInterval(id);
      } else {
        frameCount++;
        drawJump(frameCount);
      }
    };

    let id = setInterval(frame, 1);
  };

  const move = (e) => {
    // setGameStart(false);
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

  const stop = () => {
    setFacingDirection("SOUTH");
  };

  const choosePlayer = (e) => {
    if (e.key === "ArrowRight") {
      // set player
      setPlayerName("Tyler");
    } else if (e.key === "ArrowLeft") {
      setPlayerName("Tim");
    } else if (e.key === "Enter") {
      startGame();
    }
  };
  const startGame = (e) => {
    const canvas = canvasRef.current;
    canvas.onkeydown = move;

    setGameStart(false);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.onkeydown = move;
    canvas.onkeyup = stop;
    if (!collision && !gameWon) {
      drawCanvas();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [xPosition, yPosition, facingDirection, giftX, giftY]);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.focus();
    canvas.onkeydown = choosePlayer;

    let stopAnimation;

    if (!gameStart) {
      stopAnimation = animate();
    }
    return () => {
      if (stopAnimation) stopAnimation();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameStart, collision, gameWon]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const resetButton = reset.current;
    const resetWin = resetRef.current;

    if (!gameWon) {
      canvas.focus();
    }

    if (collision && resetButton) {
      resetButton.focus();
    }
    if (gameWon && resetWin) {
      resetWin.focus();
    }

    if (collision || gameWon) {
      ctx.clearRect(0, 0, 320, 320);
      ctx.fillStyle = "rgb(0,0,0)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      floorPaths = drawGrid(ctx);
    }
  }, [collision, gameWon]);

  return (
    <StyledWrapper>
      {gameStart && (
        <StyledStart>
          <StyledTitle>THE MIDNIGHT</StyledTitle>
          <StyledParagraph>SELECT YOUR PLAYER TO START</StyledParagraph>
          <div>
            <PlayerButton
              ref={playerTim}
              onClick={startGame}
              showFocused={() =>
                `${playerName === "Tim" ? "2px solid #fa0835" : "none"}`
              }
            >
              <img src={imageForward} />
            </PlayerButton>

            <PlayerButton
              ref={playerTyler}
              onClick={startGame}
              showFocused={() =>
                `${playerName === "Tyler" ? "2px solid #32a1ce" : "none"}`
              }
            >
              <img src={tylerForward} />
            </PlayerButton>
          </div>
        </StyledStart>
      )}
      {collision && (
        <StyledEnd>
          <StyledParagraph>GAME OVER!</StyledParagraph>
          <StyledButton ref={reset} onClick={restart}>
            {`>`}Play again
          </StyledButton>
        </StyledEnd>
      )}
      {gameWon && (
        <StyledEnd>
          <StyledParagraph>YOU WIN!</StyledParagraph>
          <StyledButton ref={resetRef} onClick={restart}>
            {`>`} Play again
          </StyledButton>
        </StyledEnd>
      )}

      <StyledCanvas tabIndex="0" ref={canvasRef} width={300} height={300} />
      <StyledImage ref={image} src={imageForward} className="hidden" />
      <StyledImage ref={imageback} src={imageBack} className="hidden" />
      <StyledImage ref={imageleft} src={imageLeft} className="hidden" />
      <StyledImage ref={imageright} src={imageRight} className="hidden" />
      <StyledImage
        ref={tylerForwardRef}
        src={tylerForward}
        className="hidden"
      />
      <StyledImage ref={tylerBackRef} src={tylerBack} className="hidden" />
      <StyledImage ref={tylerLeftRef} src={tylerLeft} className="hidden" />
      <StyledImage ref={tylerRightRef} src={tylerRight} className="hidden" />
      <MonsterSprite />
      {!gameWon && <RescueSprite player={playerName} />}
      {gameWon && (
        <div>
          <Winner player={playerName} position="170" />
          <Winner
            player={playerName === "Tim" ? "Tyler" : "Tim"}
            position="130"
          />
        </div>
      )}
    </StyledWrapper>
  );
};
