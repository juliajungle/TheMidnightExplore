const itemConfig = {
  bedroom3: {
    tv: {},
    monitor: {},
    ai: {},
    noticeboard: {},
    game: {},
    map: {},
    record: {},
    skateboard: {},
    pizza: {},
    disks: {},
    prom: {
      topXRatio: 0.55,
      topYRatio: 0.5,
      topX2Ratio: 0.594,
      topY2Ratio: 0.5,
      bottomX2Ratio: 0.52,
      bottomY2Ratio: 0.75,
      bottomXRatio: 0.48,
      bottomYRatio: 0.75,
    },
  },
  bedroom2: {
    noticeboard: {
      xRatio: 0.15,
      yRatio: 0.5,
      topXRatio: 0.02,
      topYRatio: 0.42,
      bottomXRatio: 0.28,
      bottomYRatio: 0.65,
    },
    game: {},
    tv: {},
    monitor: {},
    ai: {
      xRatio: 0.12,
      yRatio: 0.23,
      topXRatio: 0.1,
      topYRatio: 0.15,
      bottomXRatio: 0.15,
      bottomYRatio: 0.32,
    },
    map: {},
    record: {
      topXRatio: 0.55,
      topYRatio: 0.72,
      bottomXRatio: 0.68,
      bottomYRatio: 0.82,
    },
    pizza: {},
    skateboard: {},
    disks: {},
    prom: {},
  },
  bedroom1: {
    noticeboard: {
      xRatio: 0.55,
      yRatio: 0.53,
      topXRatio: 0.53,
      topYRatio: 0.5,
      bottomXRatio: 0.615,
      bottomYRatio: 0.6,
    },
    tv: {
      xRatio: 0.28,
      yRatio: 0.47,
      topXRatio: 0.2625,
      topYRatio: 0.4444,
      bottomXRatio: 0.325,
      bottomYRatio: 0.5555,
    },
    monitor: {
      topXRatio: 0.4,
      topYRatio: 0.4444,
      bottomXRatio: 0.46,
      bottomYRatio: 0.56,
    },
    ai: {
      xRatio: 0.54,
      yRatio: 0.4,
      topXRatio: 0.55,
      topYRatio: 0.36,
      bottomXRatio: 0.58,
      bottomYRatio: 0.45,
    },
    game: {
      xRatio: 0.3,
      yRatio: 0.6,
      topXRatio: 0.28,
      topYRatio: 0.75,
      bottomXRatio: 0.38,
      bottomYRatio: 0.8,
    },
    map: {},
    pizza: {
      topXRatio: 0.26,
      topYRatio: 0.82,
      bottomXRatio: 0.37,
      bottomYRatio: 0.89,
    },
    skateboard: {
      topXRatio: 0.61,
      topYRatio: 0.78,
      bottomXRatio: 0.76,
      bottomYRatio: 0.87,
    },
    disks: {
      topXRatio: 0.4,
      topYRatio: 0.6,
      bottomXRatio: 0.44,
      bottomYRatio: 0.67,
    },
    prom: {},
  },
};

const HEIGHT_RATIO = 0.5625;

export const getItemCoords = (width, item, imageName) => {
  const { topXRatio, topYRatio, bottomXRatio, bottomYRatio } = itemConfig[
    imageName
  ][item];
  const height = width * HEIGHT_RATIO;
  const topX = width * topXRatio;
  const topY = height * topYRatio;
  const bottomX = width * bottomXRatio;
  const bottomY = height * bottomYRatio;

  const coordinates = { topX, topY, bottomX, bottomY };
  return coordinates;
};

export const getPolyItemCoords = (width, item, imageName) => {
  const {
    topXRatio,
    topYRatio,
    bottomXRatio,
    bottomYRatio,
    topX2Ratio,
    topY2Ratio,
    bottomX2Ratio,
    bottomY2Ratio,
  } = itemConfig[imageName][item];
  const height = width * HEIGHT_RATIO;
  const topX = width * topXRatio;
  const topY = height * topYRatio;
  const bottomX = width * bottomXRatio;
  const bottomY = height * bottomYRatio;
  const topX2 = width * topX2Ratio;
  const topY2 = height * topY2Ratio;
  const bottomX2 = width * bottomX2Ratio;
  const bottomY2 = height * bottomY2Ratio;

  const coordinates = {
    topX,
    topY,
    bottomX,
    bottomY,
    topX2,
    topY2,
    bottomX2,
    bottomY2,
  };
  return coordinates;
};
