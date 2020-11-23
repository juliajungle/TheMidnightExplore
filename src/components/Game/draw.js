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

  return floorPaths;
};
