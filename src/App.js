import React, { useState } from "react";
import styled from "styled-components";
import useDimensions from "react-use-dimensions";
import { ImageMap, Image } from "./components/ImageMap";
import { Modal } from "./components/Modal";
import { Filter } from "./components/Filter";
import { HintButton } from "./components/Hint";

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
  const [hint, setHint] = useState(false);
  const [currentItem, setItem] = useState();

  const [ref, { x, y, width, height }] = useDimensions();

  const handleClick = (e) => {
    console.log(e.target.alt);
    const currentItem = e.target.alt;
    setItem(currentItem);
    setIsOpen(!isOpen);
  };

  const showHint = () => {
    setHint(true);
    setTimeout(() => {
      setHint(false);
    }, 500);
  };

  return (
    <StyledApp ref={ref}>
      {hint && <Filter width={width} height={height} />}
      <Image />
      {isOpen && <StyledOverlay />}
      <ImageMap handleClick={handleClick} x={x} y={y} width={width} />
      <Modal isOpen={isOpen} handleClick={handleClick} item={currentItem} />
      <HintButton handleClick={showHint}>Show hint</HintButton>
    </StyledApp>
  );
};

export default App;
