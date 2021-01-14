import React, { useEffect, useState } from "react";
import styled from "styled-components";

import bedroom2 from "../images/bedroom2.jpg";
import bedroom3 from "../images/bedroom3.jpg";
import bedroom1 from "../images/pixel.png"; // transparent image to cover video for map
import bedroom1overlay from "../images/bedroom1overlay.jpg";
import bedroom2overlay from "../images/bedroom2overlay.jpg";
import bedroom3overlay from "../images/bedroom3overlay.jpg";
import { Fragment } from "react";

const StyledImage = styled.img`
  position: absolute;
  width: ${(props) => props.cssWidth};
  height: ${(props) => props.cssHeight}px;
`;

const StyledOverlayImage = styled.img`
  position: absolute;
  width: ${(props) => props.cssWidth};
  height: ${(props) => props.cssHeight}px;
  filter: blur(3px);
  transition: opacity ease-in 500ms;
  opacity: ${(props) => (props.hide ? 0 : 1)};
`;

export const BedroomImage = ({ imageName, width }) => {
  const [highResImageLoaded, setHighResImageLoaded] = useState(false);
  const [bedroomImageOverlaySrc, setBedroomImageOverlaySrc] = useState(
    bedroom1overlay
  );
  const [bedroomImageSrc, setBedroomImageSrc] = useState(bedroom1);

  useEffect(() => {
    console.log("useeffect", highResImageLoaded);
    if (imageName === "bedroom2") {
      setBedroomImageOverlaySrc(bedroom2overlay);
      setBedroomImageSrc(bedroom2);
    } else if (imageName === "bedroom3") {
      setBedroomImageOverlaySrc(bedroom3overlay);
      setBedroomImageSrc(bedroom3);
    } else if (imageName === "bedroom1") {
      setBedroomImageOverlaySrc(bedroom1overlay);
      setBedroomImageSrc(bedroom1);
    }

    return () => {
      console.log("return");
      setHighResImageLoaded(false);
    };
  }, [imageName]);

  return (
    <Fragment>
      <StyledImage
        src={bedroomImageSrc}
        alt="Monsters wallpaper"
        useMap="#monsters"
        cssWidth={() => (width ? `${width}px` : "100%")}
        cssHeight={width * 0.5625}
        onLoad={() => {
          console.log("On load: image loaded", highResImageLoaded);
          setHighResImageLoaded(true);
        }}
      />

      <StyledOverlayImage
        src={bedroomImageOverlaySrc}
        useMap="#monsters"
        alt="Monsters wallpaper loading"
        cssWidth={() => (width ? `${width}px` : "100%")}
        cssHeight={width * 0.5625}
        hide={highResImageLoaded}
      />
    </Fragment>
  );
};
