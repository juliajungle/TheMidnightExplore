const itemConfig = {
  tv: {
    xRatio: 0.29,
    yRatio: 0.47,
    topXRatio: 0.2625,
    topYRatio: 0.4444,
    bottomXRatio: 0.325,
    bottomYRatio: 0.5555,
  },
  monitor: {
    xRatio: 0.43,
    yRatio: 0.5,
    topXRatio: 0.4,
    topYRatio: 0.4444,
    bottomXRatio: 0.46,
    bottomYRatio: 0.56,
  },
  ai: {
    xRatio: 0.57,
    yRatio: 0.4,
    topXRatio: 0.55,
    topYRatio: 0.36,
    bottomXRatio: 0.58,
    bottomYRatio: 0.45,
  },
};

const HEIGHT_RATIO = 0.5625;

export const getItemCoords = (width, item) => {
  const { topXRatio, topYRatio, bottomXRatio, bottomYRatio } = itemConfig[item];
  const height = width * HEIGHT_RATIO;
  const topX = width * topXRatio;
  const topY = height * topYRatio;
  const bottomX = width * bottomXRatio;
  const bottomY = height * bottomYRatio;

  const coordinates = { topX, topY, bottomX, bottomY };
  return coordinates;
};

export const getHintCoords = (width, item) => {
  const height = width * HEIGHT_RATIO;
  const { xRatio, yRatio } = itemConfig[item];
  const x = width * xRatio;
  const y = height * yRatio;

  const coordinates = { x, y };
  return coordinates;
};
