import React, { Fragment } from "react";
import styled from "styled-components";
import { HEIGHT_RATIO, LINKS_CONFIG } from "../../const";

const InteractiveLink = styled.a`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  width: ${(props) => props.cssWidth}px;
  height: ${(props) => props.cssHeight}px;

  transform: ${(props) => (props.skew ? `skew(-25deg, 10deg)` : `none`)};
`;

export const Links = ({ area, width }) => {
  const { tux, sash, headphones, sleeve, poster } = LINKS_CONFIG;
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
          cssHeight={width * tux.heightRatio * HEIGHT_RATIO}
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
          cssHeight={width * headphones.heightRatio * HEIGHT_RATIO}
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
          cssHeight={width * sleeve.heightRatio * HEIGHT_RATIO}
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
          cssHeight={width * poster.heightRatio * HEIGHT_RATIO}
        />
      )}
    </Fragment>
  );
};
