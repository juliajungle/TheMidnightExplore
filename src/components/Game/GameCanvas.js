import React, { useEffect, useState, useRef } from "react";
import { mapper } from "./utils";
import Command from "./Command/index.js";
import "./index.css";

export const GameCanvas = () => {
  const [xPosition, setxPosition] = useState(10);
  const [yPosition, setyPosition] = useState(263);
  const [facingDirection, setFacingDirection] = useState("SOUTH");
  // const [position, setPosition] = useState({ x: 1, y: 1, facing: "NORTH" });

  const canvasRef = useRef(null);
  const image = useRef();
  const imageright = useRef();
  const imageleft = useRef();
  const imageback = useRef();
  const floorPaths = [];

  const drawGrid = (context) => {
    // Border

    const borderPath = new Path2D();
    borderPath.moveTo(0, 0);
    borderPath.lineTo(0, 300);
    borderPath.lineTo(300, 300);
    borderPath.lineTo(300, 0);
    borderPath.lineTo(0, 0);
    context.lineWidth = 5;
    context.strokeStyle = "#7704bf";
    context.stroke(borderPath);

    // Floor 1
    const floorPath1 = new Path2D();
    context.beginPath();
    floorPath1.moveTo(0, 300);
    floorPath1.lineTo(300, 260);
    floorPath1.lineTo(300, 250);
    floorPath1.lineTo(0, 290);
    floorPath1.lineTo(0, 300);
    context.closePath();
    context.strokeStyle = "#7704bf";
    context.lineWidth = 4;
    context.stroke(floorPath1);

    floorPaths.push(floorPath1);
    // console.log(floorPaths);
    // console.log("floorPath1", context.isPointInPath(floorPath1, 157, 274));

    // Floor 2
    const floorPath2 = new Path2D();
    context.beginPath();
    floorPath2.moveTo(0, 200);
    floorPath2.lineTo(280, 220);
    floorPath2.lineTo(280, 230);
    floorPath2.lineTo(0, 210);
    floorPath2.lineTo(0, 200);
    context.closePath();
    context.strokeStyle = "#7704bf";
    context.lineWidth = 4;
    context.stroke(floorPath2);
    floorPaths.push(floorPath2);

    // Floor 3
    const floorPath3 = new Path2D();
    context.beginPath();
    floorPath3.moveTo(20, 165);
    floorPath3.lineTo(300, 130);
    floorPath3.lineTo(300, 140);
    floorPath3.lineTo(20, 175);
    floorPath3.lineTo(20, 165);
    context.closePath();
    context.strokeStyle = "#7704bf";
    context.lineWidth = 4;
    context.stroke(floorPath3);
    floorPaths.push(floorPath3);

    // Floor 4
    const floorPath4 = new Path2D();
    context.beginPath();
    floorPath4.moveTo(0, 80);
    floorPath4.lineTo(280, 100);
    floorPath4.lineTo(280, 110);
    floorPath4.lineTo(0, 90);
    floorPath4.lineTo(0, 80);
    context.closePath();
    context.strokeStyle = "#7704bf";
    context.stroke(floorPath4);
    floorPaths.push(floorPath4);

    // Floor 5
    const floorPath5 = new Path2D();
    context.beginPath();
    floorPath5.moveTo(100, 50);
    floorPath5.lineTo(200, 50);
    floorPath5.lineTo(200, 40);
    floorPath5.lineTo(100, 40);
    floorPath5.lineTo(100, 50);
    context.closePath();
    context.strokeStyle = "#7704bf";
    context.stroke(floorPath5);
    floorPaths.push(floorPath5);

    // Floor 1 ladder
    context.beginPath();
    context.moveTo(210, 270);
    context.lineTo(210, 212);
    context.moveTo(197, 274);
    context.lineTo(197, 212);
    // rungs
    context.moveTo(197, 260);
    context.lineTo(210, 260);
    context.moveTo(197, 250);
    context.lineTo(210, 250);
    context.moveTo(197, 240);
    context.lineTo(210, 240);
    context.moveTo(197, 230);
    context.lineTo(210, 230);
    context.lineWidth = 2;
    context.strokeStyle = "grey";
    context.stroke();

    // Floor 2 ladder
    context.beginPath();
    context.moveTo(60, 209);
    context.lineTo(60, 157);
    context.moveTo(73, 210);
    context.lineTo(73, 155);
    // rungs
    context.moveTo(60, 200);
    context.lineTo(73, 200);
    context.moveTo(60, 190);
    context.lineTo(73, 190);
    context.moveTo(60, 180);
    context.lineTo(73, 180);
    context.moveTo(60, 170);
    context.lineTo(73, 170);
    context.lineWidth = 2;
    context.strokeStyle = "grey";
    context.stroke();

    // Floor 3 ladder
    context.beginPath();
    context.moveTo(210, 147);
    context.lineTo(210, 98);
    context.moveTo(197, 147);
    context.lineTo(197, 98);
    // rungs
    context.moveTo(210, 137);
    context.lineTo(197, 137);
    context.moveTo(210, 127);
    context.lineTo(197, 127);
    context.moveTo(210, 117);
    context.lineTo(197, 117);
    context.moveTo(210, 107);
    context.lineTo(197, 107);
    context.lineWidth = 2;
    context.strokeStyle = "grey";
    context.stroke();

    // Floor 4 ladder
    context.beginPath();
    context.moveTo(140, 42);
    context.lineTo(140, 96);
    context.moveTo(153, 42);
    context.lineTo(153, 96);
    // rungs
    context.moveTo(153, 52);
    context.lineTo(140, 52);
    context.moveTo(153, 62);
    context.lineTo(140, 62);
    context.moveTo(153, 72);
    context.lineTo(140, 72);
    context.moveTo(153, 82);
    context.lineTo(140, 82);
    context.lineWidth = 2;
    context.strokeStyle = "grey";
    context.stroke();
  };

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

  const drawRobot = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    // console.log("drawRobot", { yPosition });
    // const { width, height } = getRobotSize();

    const img = getRobotImage(facingDirection);

    // const { x, y } = mapper({ xPosition, yPosition });
    // console.log({ x, y });
    ctx.clearRect(0, 0, 320, 320);
    drawGrid(ctx);
    // console.log("drawRobot", img, x, y, width, height);
    ctx.drawImage(img, xPosition, yPosition, 15, 30);
    // console.log("after", img, x, y, width, height);
  };

  const isValidMove = (x, y) => {
    // console.log()
    return x >= 0 && x <= 290 && y >= 0 && y <= 290;
  };

  const isFloor = (x, y, context) => {
    // ladder 1
    // return x >= 0 && x <= 290 && y >= 220 && y <= 290;
    console.log(x, y);
    console.log("isFloor", context.isPointInPath(floorPaths[0], 150, 275));
    return (
      floorPaths.filter((path, index) => {
        // console.log(path, context.isPointInPath(path, 0, 300));
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
  ////// Arrow keys //////

  const move = (e) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    console.log(e.key, xPosition, yPosition);
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

  useEffect(() => {
    console.log("mount");
    const canvas = canvasRef.current;
    // const ctx = canvas.getContext("2d");
    // canvas.onkeydown = move;
    // drawGrid(ctx);
    // drawRobot();
  }, []);

  const updatePosition = (position) => {
    const { x, y, facing } = position;
    console.log({ position });
    setxPosition(x);
    setyPosition(y);
    setFacingDirection(facing);
  };

  useEffect(() => {
    console.log("componentDidUpdate", {
      facingDirection,
      xPosition,
      yPosition,
    });

    const canvas = canvasRef.current;
    // const ctx = canvas.getContext("2d");
    canvas.onkeydown = move;

    drawRobot();
  }, [xPosition, yPosition, facingDirection]);

  return (
    <div className="wrapper">
      {/* <Command
        updatePosition={updatePosition}
        xPosition={xPosition}
        yPosition={yPosition}
        facing={facingDirection}
      /> */}
      <canvas
        // onKeyPress={() => console.log("fired")}
        tabIndex="0"
        ref={canvasRef}
        width={300}
        height={300}
      />
      <img ref={image} src="robot.png" className="hidden" />
      <img ref={imageback} src="robot-backward.png" className="hidden" />
      <img ref={imageleft} src="robot-left.png" className="hidden" />
      <img ref={imageright} src="robot-right.png" className="hidden" />
    </div>
  );
};
