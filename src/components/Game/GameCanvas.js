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

import guitar from "./images/sprite-bonus.png";
import keyboard from "./images/bonus-keyboard.png";
import sax from "./images/bonus-sax.png";

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
  StyledBonus,
} from "./styles";

export const GameCanvas = () => {
  const tylerForwardWaitingRef = useRef();
  const timForwardWaitingRef = useRef();

  const [xPosition, setxPosition] = useState(10);
  const [yPosition, setyPosition] = useState(252); //useState(58);
  const [facingDirection, setFacingDirection] = useState("SOUTH");
  const [gameStart, setGameStart] = useState(true);
  const [ballX, setBallX] = useState(10);
  const [ballY, setBallY] = useState(70);
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
  const [isMounted, setIsMounted] = useState(false);
  const [item1Collision, setItem1Collision] = useState(false);
  const [item2Collision, setItem2Collision] = useState(false);
  const [item3Collision, setItem3Collision] = useState(false);

  const [score, setScore] = useState(0);
  const [bonus, setBonus] = useState(0);

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
  const bonusGuitar = useRef();
  const bonusKeyboard = useRef();
  const bonusSax = useRef();
  const [bonusImage1, setBonusImage1] = useState();
  const [bonusImage2, setBonusImage2] = useState();
  const [bonusImage3, setBonusImage3] = useState();
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

  const getBonusImage1 = () => {
    return bonusImage1;
  };
  const getBonusImage2 = () => {
    return bonusImage2;
  };
  const getBonusImage3 = () => {
    return bonusImage3;
  };

  const drawPlayer = (ctx) => {
    const img = getPlayerImage(facingDirection);

    if (img) {
      ctx.drawImage(img, xPosition, yPosition, 22, 33);
    }
  };

  const isFloor = (x, y, context) => {
    if (x > 265) {
      return true;
    }
    return (
      floorPaths.filter((path, index) => {
        return context.isPointInPath(path, x + 5, y + 39);
      }).length > 0
    );
  };

  const isLadder = (x, y) => {
    const isLadder1 = x >= 192 && x <= 210 && y >= 180 && y <= 230;
    const isLadder2 = x >= 50 && x <= 60 && y >= 123 && y <= 170;
    const isLadder3 = x >= 192 && x <= 210 && y >= 60 && y <= 108;
    const isLadder4 = x >= 132 && x <= 143 && y >= 6 && y <= 54;
    // ladder 1
    return isLadder1 || isLadder2 || isLadder3 || isLadder4;
  };

  const setNewPosition = (ctx, xSpeed, ySpeed, direction, jump) => {
    if (jump) {
      setyPosition(yPosition + ySpeed);
      setFacingDirection(direction);
    }
    if (isFloor(xPosition + xSpeed, yPosition + ySpeed, ctx)) {
      setxPosition(xPosition + xSpeed);
      setyPosition(yPosition + ySpeed);
      setFacingDirection(direction);
    }
  };

  function drawItem1(ctx) {
    const item = new Path2D();
    ctx.beginPath();
    item.arc(30, 235, 5, 0, Math.PI * 2);
    ctx.closePath();

    const img = getBonusImage1();

    if (img) {
      ctx.drawImage(img, 24, 225, 11, 20);
    }
    if (ctx.isPointInPath(item, xPosition + 10, yPosition + 20)) {
      setItem1Collision(true);
    }
  }

  function drawItem2(ctx) {
    ctx.rect(240, 160, 20, 30);
    const img = getBonusImage2();

    if (img) {
      ctx.drawImage(img, 240, 170, 20, 11);
    }

    if (ctx.isPointInPath(xPosition + 10, yPosition + 20)) {
      setItem2Collision(true);
    }
  }

  function drawItem3(ctx) {
    const item = new Path2D();
    ctx.beginPath();
    item.arc(265, 50, 10, 0, Math.PI * 2);
    ctx.closePath();

    // ctx.fillStyle = "red";
    // ctx.fill(item);
    const img = getBonusImage3();

    if (img) {
      ctx.drawImage(img, 260, 40, 10, 20);
    }
    if (ctx.isPointInPath(item, xPosition + 10, yPosition + 20)) {
      setItem3Collision(true);
    }
  }

  function drawBall(ctx) {
    const gradient = ctx.createRadialGradient(
      ballX,
      ballY,
      0.5,
      ballX,
      ballY,
      7
    );
    gradient.addColorStop(0, "white");
    gradient.addColorStop(1, "#fa068a");

    const ball = new Path2D();
    ctx.beginPath();
    ball.arc(ballX, ballY, 7, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill(ball);
    ctx.closePath();
    ctx.shadowBlur = 0;
    const collisionBall = new Path2D();
    ctx.beginPath();
    collisionBall.arc(ballX, ballY, 15, 0, Math.PI * 2);

    ctx.closePath();

    if (ctx.isPointInPath(collisionBall, xPosition, yPosition + 17)) {
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
      setBallX(ballX + frameCount * 0.93); // 280 = 300 * 0.93
      setBallY(ballY + frameCount * 0.07); // 100 = 300 * 0.337
    }
    // drop to floor 3
    if (frameCount >= 300 && frameCount < 320) {
      setBallY(ballY + frameCount * 0.16);
    }

    // move along floor 3 x from 280 to 10
    if (frameCount >= 320 && frameCount < 620) {
      setBallX(280 - (frameCount - 319) * 0.9);
      setBallY(120 + (frameCount - 319) * 0.13);
    }

    // drop to floor 2
    if (frameCount >= 620 && frameCount < 640) {
      setBallY(ballY + frameCount * 0.19);
    }
    // move along floor 2
    if (frameCount >= 640 && frameCount < 940) {
      setBallX(ballX + (frameCount - 639) * 0.93);
      setBallY(192 + (frameCount - 639) * 0.07);
    }
    // drop to floor 1
    if (frameCount >= 940 && frameCount < 945) {
      setBallY(ballY + frameCount * 0.18);
    }
    // move along floor 1
    if (frameCount >= 945) {
      setBallX(280 - (frameCount - 944) * 0.9);
      setBallY(242 + (frameCount - 944) * 0.13);
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
    if (!item1Collision) {
      drawItem1(ctx);
    }
    if (!item2Collision) {
      drawItem2(ctx);
    }
    if (!item3Collision) {
      drawItem3(ctx);
    }
  };

  const move = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (e.code === "Space") {
      setNewPosition(ctx, 0, -40, "SOUTH", true);
      setTimeout(() => {
        setNewPosition(ctx, 0, 0, "SOUTH", true);
      }, 200);
    }
    if (e.key === "ArrowRight") {
      // floor 1
      if (yPosition > 220) {
        setNewPosition(ctx, 8, -1, "EAST");
      }
      // floor 2
      if (yPosition < 220 && yPosition > 165 && xPosition < 266) {
        setNewPosition(ctx, 13, 1, "EAST");
        setScore(20 + bonus);
      }
      // floor 3
      if (yPosition <= 165 && yPosition > 95 && xPosition < 266) {
        setNewPosition(ctx, 8, -1, "EAST");
        setScore(40 + bonus);
      }
      // floor 4
      if (yPosition <= 95 && yPosition > 20 && xPosition < 267) {
        setNewPosition(ctx, 13, 1, "EAST");
        setScore(60 + bonus);
      }
      // floor 5
      if (yPosition <= 20) {
        setNewPosition(ctx, 5, 0, "EAST");
        setGameWon(true);
        setScore(100);
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
      if (yPosition >= 220) {
        setNewPosition(ctx, -8, 1, "WEST");
      }
      // floor 2
      if (yPosition < 220 && yPosition > 165) {
        setNewPosition(ctx, -13, -1, "WEST");
      }
      // floor 3
      if (yPosition <= 165 && yPosition > 95) {
        setNewPosition(ctx, -8, 1, "WEST");
      }
      // floor 4
      if (yPosition <= 95 && yPosition > 20) {
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
    setyPosition(252);
    setBallX(10);
    setBallY(70);
    setCollision(false);
    setGameWon(false);
    setFacingDirection("SOUTH");
    setStartAnimation(true);
    setItem1Collision(false);
    setItem2Collision(false);
    setItem3Collision(false);
    setScore(0);
  };

  const resetPositions = () => {
    setxPosition(10);
    setyPosition(263);
    setBallX(10);
    setBallY(70);
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
    setBonusImage1(bonusGuitar.current);
    setBonusImage2(bonusKeyboard.current);
    setBonusImage3(bonusSax.current);
  };

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.onkeydown = move;
    canvas.onkeyup = stop;

    // if (isMounted) {
    if (!collision && !gameWon) {
      drawCanvas();
    }
    // }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [xPosition, yPosition, facingDirection, ballX, ballY, isMounted]);

  useEffect(() => {
    console.log("?");
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
  }, [gameStart, collision, gameWon, startAnimation, isMounted]);

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

  useEffect(() => {
    const bonus1 = item1Collision ? 50 : 0;
    const bonus2 = item2Collision ? 50 : 0;
    const bonus3 = item3Collision ? 50 : 0;

    setBonus(bonus1 + bonus2 + bonus3);
  }, [item1Collision, item2Collision, item3Collision]);

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
            {`>`}PLAY AGAIN
          </StyledButton>
        </StyledEnd>
      )}
      {gameWon && (
        <StyledEnd>
          <StyledParagraph>YOU WIN!</StyledParagraph>
          <StyledButton ref={resetRef} onClick={restart}>
            {`>`} PLAY AGAIN
          </StyledButton>
        </StyledEnd>
      )}

      {!gameStart && (
        <StyledBonus>
          <span>SCORE {bonus + score}</span>
          <span>BONUS {bonus}</span>
        </StyledBonus>
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

      <StyledImage ref={bonusGuitar} src={guitar} className="hidden" />
      <StyledImage ref={bonusKeyboard} src={keyboard} className="hidden" />
      <StyledImage ref={bonusSax} src={sax} className="hidden" />
    </StyledWrapper>
  );
};
