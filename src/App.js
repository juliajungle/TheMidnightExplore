import React, { useState } from "react";
import styled from "styled-components";
import useDimensions from "react-use-dimensions";
import { ImageMap, Image } from "./components/ImageMap";
import { Modal } from "./components/Modal";

const StyledApp = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
`;

const StyledOverlay = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.7;
  top: 0;
`;

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [ref, { x, y, width }] = useDimensions();

  const handleClick = (e) => {
    console.log("click");
    setIsOpen(!isOpen);
  };

  return (
    <StyledApp ref={ref}>
      <Image />
      {isOpen && <StyledOverlay />}
      <ImageMap handleClick={handleClick} x={x} y={y} width={width} />
      <Modal isOpen={isOpen} handleClick={handleClick} />
    </StyledApp>
  );
};

export default App;
