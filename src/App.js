import React, { useState } from "react";
import styled from "styled-components";
import { ImageMap, Image } from "./ImageMap";
import { Modal } from "./Modal";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e) => {
    setIsOpen(!isOpen);
  };

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

  return (
    <StyledApp>
      <Image />
      {isOpen && <StyledOverlay />}
      <ImageMap handleClick={handleClick} />
      <Modal isOpen={isOpen} handleClick={handleClick} />
    </StyledApp>
  );
};

export default App;
