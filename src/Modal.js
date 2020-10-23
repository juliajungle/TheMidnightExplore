import React from "react";
import styled from "styled-components";
import Canvas from "./Canvas";

const modalStyles = `
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 200px;
  top: 60px;
  width: 410px; 
  height: 320px; 
  overflow: auto; /* Enable scroll if needed */
  background-color: transparent;
  border-radius: 5%;
  box-shadow: -1px 0px 18px 3px #d31e91;
`;

const StyledModal = styled.div`
  ${modalStyles}
  display: block;
`;

const StyledImage = styled.img`
  position: absolute;
  top: 130px;
  left: 170px;
  width: 40px;
  height: auto;
  border-radius: 7px;
  box-shadow: -2px 1px 20px 7px #5b4c6b5e;
  opacity: 0.6;

  @keyframes horror {
    0% {
      width: 100px;
    }

    100% {
      width: 300px;
      top: 100px;
      left: 50px;
    }
  }

  animation: horror 2s ease-out;
  animation-fill-mode: forwards;
`;

const StyledButton = styled.button`
  border-radius: 100%;
  width: 20px;
  height: 20px;
  position: absolute;
  bottom: 10px;
  left: 200px;
  background-image: ;
  background: url(./button.jpg);
  background-size: contain;
  cursor: pointer;
`;

export const Modal = ({ isOpen, handleClick }) => {
  return (
    <div>
      {isOpen && (
        <StyledModal>
          <a
            href="https://store-uk.themidnightofficial.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <StyledImage alt="Horror Show" src="horror.jpg" />{" "}
          </a>

          <Canvas />
          <StyledButton onClick={handleClick}></StyledButton>
        </StyledModal>
      )}
    </div>
  );
};
