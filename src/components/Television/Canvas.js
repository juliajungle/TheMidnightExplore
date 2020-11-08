import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const StyledCanvas = styled.canvas`
  z-index: -100;
  position: absolute;
  top: 0;
  left: 0;
  width: 360px;
  height: 260px;
`;

const Canvas = () => {
  const drawNoise = (ctx) => {
    const { width, height } = ctx.canvas;
    //  The imageData object is filled with transparent black pixels.
    const imageData = ctx.createImageData(width, height);
    console.log(imageData);
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
    let frameCount = 0;
    let animationFrameId;

    const render = () => {
      frameCount++;
      drawNoise(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <StyledCanvas ref={canvasRef} />;
};

export default Canvas;
