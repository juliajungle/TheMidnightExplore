import React from "react";
import styled from "styled-components";
import { ChatRoom } from "./ChatRoom/index";

import { Television } from "./Television/index";
import { AI } from "./AI/AI";
import { NoticeBoard } from "./NoticeBoard/Board";
import { Game } from "./Game/Game";

const StyledModal = styled.div`
  position: fixed;
  z-index: 100;
  left: ${(props) => Math.max(10, props.responsiveWidth / 2 - 205)}px;
  top: 15%;
  width: ${(props) => Math.min(410, props.responsiveWidth)}px;
  border-radius: 5%;
  display: block;
`;

export const Modal = ({ isOpen, closeModal, item, width }) => {
  return (
    <div>
      {isOpen && (
        <StyledModal responsiveWidth={width}>
          {item === "tv" && (
            <Television width={width} handleClick={closeModal} />
          )}
          {item === "monitor" && (
            <ChatRoom width={width} handleClick={closeModal}></ChatRoom>
          )}
          {item === "ai" && <AI handleClick={closeModal} />}
          {item === "noticeboard" && <NoticeBoard handleClick={closeModal} />}
          {item === "game" && <Game width={width} handleClick={closeModal} />}
        </StyledModal>
      )}
    </div>
  );
};
