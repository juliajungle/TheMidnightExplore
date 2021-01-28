import React, { Fragment } from "react";
import styled from "styled-components";

const linksConfig = {
  tux: {
    topXRatio: 0.49,
    topYRatio: 0.2,
    widthRatio: 0.047,
    heightRatio: 0.16,
  },
  sash: {
    topXRatio: 0.515,
    topYRatio: 0.29,
    widthRatio: 0.03,
    heightRatio: 0.25,
  },
  headphones: {
    topXRatio: 0.49,
    topYRatio: 0.465,
    widthRatio: 0.08,
    heightRatio: 0.1,
  },
  sleeve: {
    topXRatio: 0.537,
    topYRatio: 0.286,
    widthRatio: 0.14,
    heightRatio: 0.15,
  },
  poster: {
    topXRatio: 0.37,
    topYRatio: 0.05,
    widthRatio: 0.16,
    heightRatio: 0.35,
  },
};

const InteractiveLink = styled.a`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  width: ${(props) => props.cssWidth}px;
  height: ${(props) => props.cssHeight}px;

  transform: ${(props) => (props.skew ? `skew(-25deg, 10deg)` : `none`)};
`;

export const Links = ({ area, width }) => {
  const { tux, sash, headphones, sleeve, poster } = linksConfig;
  return (
    <Fragment>
      {area === 3 && (
        <InteractiveLink
          href="https://merch.ambientinks.com/collections/themidnight/"
          target="_blank"
          rel="noopener noreferrer"
          top={tux.topYRatio * width}
          left={tux.topXRatio * width}
          cssWidth={width * tux.widthRatio}
          cssHeight={width * tux.heightRatio * 0.5625}
        />
      )}

      {area === 2 && (
        <InteractiveLink
          href="https://themidnight.bandcamp.com/"
          target="_blank"
          rel="noopener noreferrer"
          top={headphones.topYRatio * width}
          left={headphones.topXRatio * width}
          cssWidth={width * headphones.widthRatio}
          cssHeight={width * headphones.heightRatio * 0.5625}
        />
      )}
      {area === 2 && (
        <InteractiveLink
          href="https://themidnight.lnk.to/monsters"
          target="_blank"
          rel="noopener noreferrer"
          top={sleeve.topYRatio * width}
          left={sleeve.topXRatio * width}
          cssWidth={width * sleeve.widthRatio}
          cssHeight={width * sleeve.heightRatio * 0.5625}
        />
      )}
      {area === 2 && (
        <InteractiveLink
          href="https://www.youtube.com/watch?v=ZNAqwJ7pXmY"
          target="_blank"
          rel="noopener noreferrer"
          top={poster.topYRatio * width}
          left={poster.topXRatio * width}
          cssWidth={width * poster.widthRatio}
          cssHeight={width * poster.heightRatio * 0.5625}
        />
      )}
    </Fragment>
  );
};
