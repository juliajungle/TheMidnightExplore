import React, { useEffect, useState, useRef } from "react";
import { drawGrid } from "./draw";

import tylerRight from "./images/tyler-right.png";
import tylerRight2 from "./images/tyler-right2.png";
import tylerRightStill from "./images/tyler-right-still.png";

import timRight from "./images/tim-right.png";
import timRight2 from "./images/tim-right2.png";
import timRightStill from "./images/tim-right-still.png";

import tylerForward from "./images/tyler-forward.png";
import tylerForwardWaiting from "./images/tyler-forward.png";
import tylerForwardShrug from "./images/tyler-forward-shrug.png";

import timForward from "./images/tim-forward.png";
import timForwardWaiting from "./images/tim-forward.png";
import timForwardShrug from "./images/tim-forward-shrug.png";

import tylerBack from "./images/tyler-back.png";
import tylerClimb from "./images/tyler-climb.png";
import tylerClimb2 from "./images/tyler-climb2.png";

import timBack from "./images/tim-back.png";
import timClimb from "./images/tim-climb.png";
import timClimb2 from "./images/tim-climb2.png";

import tylerLeft from "./images/tyler-left.png";
import tylerLeft2 from "./images/tyler-left2.png";
import tylerLeftStill from "./images/tyler-left-still.png";

import timLeft from "./images/tim-left.png";
import timLeft2 from "./images/tim-left2.png";
import timLeftStill from "./images/tim-left-still.png";

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
  const tylerForwardWaitingRef = useRef();
  const timForwardWaitingRef = useRef();

  const [xPosition, setxPosition] = useState(10);
  const [yPosition, setyPosition] = useState(263); //useState(58);
  const [facingDirection, setFacingDirection] = useState("SOUTH");
  const [gameStart, setGameStart] = useState(true);
  const [giftX, setGiftX] = useState(10);
  const [giftY, setGiftY] = useState(78);
  const [collision, setCollision] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [playerName, setPlayerName] = useState("Tim");
  const [startAnimation, setStartAnimation] = useState(false);
  const [playerImageRight, setPlayerImageRight] = useState();
  const [playerImageLeft, setPlayerImageLeft] = useState();
  const [playerImageBack, setPlayerImageBack] = useState();
  const [playerImageForward, setPlayerImageForward] = useState(
    tylerForwardWaitingRef.current
  );

  const canvasRef = useRef(null);
  const reset = useRef();
  const resetRef = useRef();

  const tylerRightRef = useRef();
  const tylerRight2Ref = useRef();
  const tylerRightStillRef = useRef();

  const timRightRef = useRef();
  const timRight2Ref = useRef();
  const timRightStillRef = useRef();

  const tylerLeftRef = useRef();
  const tylerLeft2Ref = useRef();
  const tylerLeftStillRef = useRef();

  const timLeftRef = useRef();
  const timLeft2Ref = useRef();
  const timLeftStillRef = useRef();

  const tylerBackRef = useRef();
  const tylerClimbRef = useRef();
  const tylerClimb2Ref = useRef();

  const timBackRef = useRef();
  const timClimbRef = useRef();
  const timClimb2Ref = useRef();
  // const tylerForwardWaitingRef = useRef();
  const tylerForwardShrugRef = useRef();
  const timForwardShrugRef = useRef();

  const playerTim = useRef();
  const playerTyler = useRef();

  let floorPaths = [];
  // let animationTurn = 5;

  const getPlayerImage = (facing) => {
    switch (facing) {
      case "NORTH":
        return playerImageBack;
      case "SOUTH":
        return playerImageForward;
      case "EAST":
        return playerImageRight;
      case "WEST":
        return playerImageLeft;
      default:
        return playerImageForward;
    }
  };

  const drawPlayer = (ctx) => {
    const img = getPlayerImage(facingDirection);

    if (img) {
      ctx.drawImage(img, xPosition, yPosition, 22, 33);
    }
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
    ball.arc(giftX, giftY, 7, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill(ball);
    ctx.closePath();
    ctx.shadowBlur = 0;
    if (ctx.isPointInPath(ball, xPosition, yPosition + 20)) {
      setCollision(true);
    }
  }
  let playerCount = 0;
  const animateBall = (frameCount) => {
    if (frameCount % 7 === 0) {
      playerCount++;
    }
    // 1, 2, 3, 4, 5, 6, 7, 8,9

    if (playerCount % 17 === 0) {
      setPlayerImageForward(() =>
        playerName === "Tim"
          ? timForwardShrugRef.current
          : tylerForwardShrugRef.current
      );
    }

    if (playerCount % 4 === 0) {
      setPlayerImageForward(() =>
        playerName === "Tim"
          ? timForwardWaitingRef.current
          : tylerForwardWaitingRef.current
      );
      setPlayerImageRight(() =>
        playerName === "Tim" ? timRightRef.current : tylerRightRef.current
      );
      setPlayerImageLeft(() =>
        playerName === "Tim" ? timLeftRef.current : tylerLeftRef.current
      );
      setPlayerImageBack(() =>
        playerName === "Tim" ? timClimbRef.current : tylerClimbRef.current
      );
    } else if (playerCount % 3 === 0) {
      setPlayerImageRight(() =>
        playerName === "Tim"
          ? timRightStillRef.current
          : tylerRightStillRef.current
      );
      setPlayerImageLeft(() =>
        playerName === "Tim"
          ? timLeftStillRef.current
          : tylerLeftStillRef.current
      );
    } else if (playerCount % 2 === 0) {
      setPlayerImageRight(() =>
        playerName === "Tim" ? timRight2Ref.current : tylerRight2Ref.current
      );
      setPlayerImageLeft(() =>
        playerName === "Tim" ? timLeft2Ref.current : tylerLeft2Ref.current
      );

      setPlayerImageBack(() =>
        playerName === "Tim" ? timClimb2Ref.current : tylerClimb2Ref.current
      );
    } else {
      setPlayerImageRight(() =>
        playerName === "Tim"
          ? timRightStillRef.current
          : tylerRightStillRef.current
      );
      setPlayerImageLeft(() =>
        playerName === "Tim"
          ? timLeftStillRef.current
          : tylerLeftStillRef.current
      );
    }

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

  const requestRef = React.useRef();
  const animate = () => {
    let frameCount = 0;

    const render = () => {
      frameCount++;
      // repeat animation loop
      if (frameCount > 1350) {
        frameCount = 0;
      }

      animateBall(frameCount);
      requestRef.current = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(requestRef.current);
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
        setFacingDirection("NORTH");
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
    setStartAnimation(true);
  };

  const resetPositions = () => {
    setxPosition(10);
    setyPosition(263);
    setGiftX(10);
    setGiftY(78);
  };

  const stop = () => {
    // show sprite
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
    canvas.onkeyup = stop;
    setGameStart(false);
    setStartAnimation(true);
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
    let isCancelled = false;
    const canvas = canvasRef.current;
    canvas.focus();
    canvas.onkeydown = choosePlayer;
    let stopAnimationFunction;
    if (!gameStart) {
      canvas.onkeydown = move;
      canvas.onkeyup = stop;

      if (startAnimation && !isCancelled) {
        setStartAnimation(false);
        stopAnimationFunction = animate();
      }

      if (collision || gameWon) {
        resetPositions();
        window.cancelAnimationFrame(requestRef.current);
        if (stopAnimationFunction) stopAnimationFunction(requestRef.current);
      }
    }
    return () => {
      isCancelled = true;
      if (collision || gameWon) {
        if (stopAnimationFunction) stopAnimationFunction();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameStart, collision, gameWon, startAnimation]);

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
              <img src={timForward} alt="Tim facing forward" />
            </PlayerButton>

            <PlayerButton
              ref={playerTyler}
              onClick={startGame}
              showFocused={() =>
                `${playerName === "Tyler" ? "2px solid #32a1ce" : "none"}`
              }
            >
              <img src={tylerForward} alt="Tyler facing forward" />
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

      <StyledImage
        ref={tylerForwardWaitingRef}
        src={tylerForwardWaiting}
        className="hidden"
      />
      <StyledImage
        ref={tylerForwardShrugRef}
        src={tylerForwardShrug}
        className="hidden"
      />
      <StyledImage
        ref={timForwardWaitingRef}
        src={timForwardWaiting}
        className="hidden"
      />
      <StyledImage
        ref={timForwardShrugRef}
        src={timForwardShrug}
        className="hidden"
      />

      <StyledImage ref={tylerBackRef} src={tylerBack} className="hidden" />
      <StyledImage ref={tylerClimbRef} src={tylerClimb} className="hidden" />
      <StyledImage ref={tylerClimb2Ref} src={tylerClimb2} className="hidden" />

      <StyledImage ref={timBackRef} src={timBack} className="hidden" />
      <StyledImage ref={timClimbRef} src={timClimb} className="hidden" />
      <StyledImage ref={timClimb2Ref} src={timClimb2} className="hidden" />

      <StyledImage ref={tylerLeftRef} src={tylerLeft} className="hidden" />
      <StyledImage ref={tylerLeft2Ref} src={tylerLeft2} className="hidden" />
      <StyledImage
        ref={tylerLeftStillRef}
        src={tylerLeftStill}
        className="hidden"
      />

      <StyledImage ref={timLeftRef} src={timLeft} className="hidden" />
      <StyledImage ref={timLeft2Ref} src={timLeft2} className="hidden" />
      <StyledImage
        ref={timLeftStillRef}
        src={timLeftStill}
        className="hidden"
      />

      <StyledImage ref={tylerRightRef} src={tylerRight} className="hidden" />
      <StyledImage ref={tylerRight2Ref} src={tylerRight2} className="hidden" />
      <StyledImage
        ref={tylerRightStillRef}
        src={tylerRightStill}
        className="hidden"
      />

      <StyledImage ref={timRightRef} src={timRight} className="hidden" />
      <StyledImage ref={timRight2Ref} src={timRight2} className="hidden" />
      <StyledImage
        ref={timRightStillRef}
        src={timRightStill}
        className="hidden"
      />
      <MonsterSprite />
      {!gameWon && <RescueSprite player={playerName} />}
      {gameWon && (
        <div>
          <Winner player={playerName} position="200" />
          <Winner
            player={playerName === "Tim" ? "Tyler" : "Tim"}
            position="170"
          />
        </div>
      )}
    </StyledWrapper>
  );
};
