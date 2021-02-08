export const drawGrid = (context) => {
  const floorPaths = [];
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
  context.moveTo(210, 260);
  context.lineTo(210, 204);
  context.moveTo(197, 262);
  context.lineTo(197, 204);
  // rungs
  context.moveTo(197, 256);
  context.lineTo(210, 256);
  context.moveTo(197, 246);
  context.lineTo(210, 246);
  context.moveTo(197, 236);
  context.lineTo(210, 236);
  context.moveTo(197, 226);
  context.lineTo(210, 226);
  context.moveTo(197, 216);
  context.lineTo(210, 216);
  context.lineWidth = 2;
  context.strokeStyle = "grey";
  context.stroke();

  // Floor 2 ladder
  context.beginPath();
  context.moveTo(58, 202);
  context.lineTo(58, 150);
  context.moveTo(75, 203);
  context.lineTo(75, 148);
  // rungs
  context.moveTo(58, 200);
  context.lineTo(75, 200);
  context.moveTo(58, 190);
  context.lineTo(75, 190);
  context.moveTo(58, 180);
  context.lineTo(75, 180);
  context.moveTo(58, 170);
  context.lineTo(75, 170);
  context.moveTo(58, 160);
  context.lineTo(75, 160);
  context.lineWidth = 2;
  context.strokeStyle = "grey";
  context.stroke();

  // Floor 3 ladder
  context.beginPath();
  context.moveTo(210, 140);
  context.lineTo(210, 85);
  context.moveTo(197, 142);
  context.lineTo(197, 85);
  // rungs
  context.moveTo(210, 137);
  context.lineTo(197, 137);
  context.moveTo(210, 127);
  context.lineTo(197, 127);
  context.moveTo(210, 117);
  context.lineTo(197, 117);
  context.moveTo(210, 107);
  context.lineTo(197, 107);
  context.moveTo(210, 97);
  context.lineTo(197, 97);
  context.lineWidth = 2;
  context.strokeStyle = "grey";
  context.stroke();

  // Floor 4 ladder
  context.beginPath();
  context.moveTo(146, 30);
  context.lineTo(146, 88);
  context.moveTo(159, 30);
  context.lineTo(159, 90);
  // rungs
  context.moveTo(159, 52);
  context.lineTo(146, 52);
  context.moveTo(159, 62);
  context.lineTo(146, 62);
  context.moveTo(159, 72);
  context.lineTo(146, 72);
  context.moveTo(159, 82);
  context.lineTo(146, 82);
  context.moveTo(159, 42);
  context.lineTo(146, 42);
  context.lineWidth = 2;
  context.strokeStyle = "grey";
  context.stroke();

  return floorPaths;
};
