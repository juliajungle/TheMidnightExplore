const itemConfig = {
  bedroom3: {
    tv: {},
    monitor: {},
    ai: {},
    noticeboard: {},
    playlister: {
      xRatio: 0.15,
      yRatio: 0.5,
      topXRatio: 0.02,
      topYRatio: 0.42,
      bottomXRatio: 0.28,
      bottomYRatio: 0.65,
    },
    tubetop: {
      xRatio: 0.25,
      yRatio: 0.45,
      topXRatio: 0.2,
      topYRatio: 0.42,
      bottomXRatio: 0.58,
      bottomYRatio: 0.65,
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
    playlister: {},
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
      xRatio: 0.42,
      yRatio: 0.49,
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
    playlister: {},
  },
};

const navigationConfig = {
  bedroom3: {
    backXRatio: 0.78,
    backYRatio: 0.76,
    forwardXRatio: 0.97,
    forwardYRatio: 0.4444,
  },
  bedroom2: {
    backXRatio: 0.97,
    backYRatio: 0.8,
    forwardXRatio: 0.05,
    forwardYRatio: 0.5,
  },
  bedroom1: {
    backXRatio: 0.35,
    backYRatio: 0.47,
    forwardXRatio: 0.58,
    forwardYRatio: 0.85,
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

export const getHintCoords = (width, item, imageName) => {
  const height = width * HEIGHT_RATIO;
  const { xRatio, yRatio } = itemConfig[imageName][item];
  const x = width * xRatio;
  const y = height * yRatio;

  const coordinates = { x, y };
  return coordinates;
};

export const getNavigationCoords = (width, zoomWidth, area) => {
  const height = zoomWidth ? zoomWidth * HEIGHT_RATIO : width * HEIGHT_RATIO;
  const {
    forwardXRatio,
    forwardYRatio,
    backXRatio,
    backYRatio,
  } = navigationConfig[area];

  const forwardX = zoomWidth
    ? zoomWidth * forwardXRatio
    : width * forwardXRatio;
  const forwardY = height * forwardYRatio;
  const backX = zoomWidth ? zoomWidth * backXRatio : width * backXRatio;
  const backY = height * backYRatio;

  const coordinates = { forwardX, forwardY, backX, backY };

  return coordinates;
};
