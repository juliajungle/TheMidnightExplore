import React, { useState } from "react";
import styled from "styled-components";
import { ChatRoom } from "./ChatRoom";

import { Television } from "./Television";

const StyledModal = styled.div`
  position: fixed;
  z-index: 1;
  left: 28%;
  top: 20%;
  width: 410px;
  height: 320px;
  overflow: auto;
  background-color: black;
  border-radius: 5%;
  box-shadow: -1px 0px 18px 3px #d31e91;
  display: block;
`;

export const Modal = ({ isOpen, handleClick, item }) => {
  console.log(item);
  return (
    <div>
      {isOpen && (
        <StyledModal>
          {item === "tv" && <Television handleClick={handleClick} />}
          {item === "monitor" && (
            <ChatRoom handleClick={handleClick}></ChatRoom>
          )}
        </StyledModal>
      )}
    </div>
  );
};
