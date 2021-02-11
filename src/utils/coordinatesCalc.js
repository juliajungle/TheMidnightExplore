import { HEIGHT_RATIO, ITEM_CONFIG } from "../const.js";

export const getItemCoords = (width, item, imageName) => {
  const { topXRatio, topYRatio, bottomXRatio, bottomYRatio } = ITEM_CONFIG[
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
  } = ITEM_CONFIG[imageName][item];
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
