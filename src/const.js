export const MAP_AREAS = {
  bedroom3: [],
  bedroom2: ["ai", "noticeboard"],
  bedroom1: ["tv", "monitor", "ai", "noticeboard", "game"],
};

export const ANIMATION_CONFIG = {
  dev: {
    introImage: 0,
    introImageLoading: 0,
    roomLoadingTime: 0,
    roomAnimation: 0,
  },
  prod: {
    introImage: 0, //10,
    introImageLoading: 0, //11000,
    roomLoadingTime: 28500,
    roomAnimation: 28.8,
  },
};

export const ENV = "prod";

export const COLORS = {
  pink: "#c21a95",
  darkPink: "#4f1840",
  lightPink: "#f165cb",
  darkGrey: "#333233",
  lightGrey: "#c4c4c4",
};
