import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const StyledCanvas = styled.canvas`
  width: 100%;
  height: ${(props) => `${Math.min(276, props.responsiveWidth * 0.66)}px`};
`;

const Canvas = ({ width }) => {
  const drawNoise = (ctx) => {
    const { width, height } = ctx.canvas;
    //  The imageData object is filled with transparent black pixels.
    const imageData = ctx.createImageData(width, height);
    // Change the pixel colours
    for (let i = 0; i < imageData.data.length; i += 4) {
      imageData.data[i + 0] = 90 * Math.random(); // R value
      imageData.data[i + 1] = 90 * Math.random(); // G value
      imageData.data[i + 2] = 155 * Math.random(); // B value
      imageData.data[i + 3] = 255 * Math.random(); // A value
    }

    ctx.putImageData(imageData, 0, 0);
  };

  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    let animationFrameId;
    const render = () => {
      drawNoise(context);

      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <StyledCanvas ref={canvasRef} responsiveWidth={width} />;
};

export default Canvas;
