// 800, 450 = coords="210,200,260,250"
export const getRectCoords = (width) => {
  // tv: topX: 26.25%, topY: 44.44%, bottomX: 32.5%, 55.55%

  const height = width * 0.5625;
  const topX = width * 0.2625;
  const topY = height * 0.4444;
  const bottomX = width * 0.325;
  const bottomY = height * 0.55555;

  const coordinates = { topX, topY, bottomX, bottomY };
  return coordinates;
};

export const getHintCoords = (width) => {
  const height = width * 0.5625;
  const x = width * 0.29;
  const y = height * 0.47;

  const coordinates = { x, y };
  return coordinates;
};
