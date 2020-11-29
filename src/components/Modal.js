import React from "react";
import styled from "styled-components";
import { ChatRoom } from "./ChatRoom/index";

import { Television } from "./Television/index";
import { AI } from "./AI/AI";
import { NoticeBoard } from "./NoticeBoard/Board";
import { Game } from "./Game/Game";

/* Modal size is 440 400 or 367 333 */
const StyledModal = styled.div`
  position: fixed;
  z-index: 100;
  width: 440px;
  border-radius: 5%;
  display: block;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 500px) {
    width: 375px;
  }
`;

export const Modal = ({ isOpen, closeModal, item }) => {
  return (
    <div>
      {isOpen && (
        <StyledModal>
          {item === "tv" && <Television handleClick={closeModal} />}
          {item === "monitor" && <ChatRoom handleClick={closeModal}></ChatRoom>}
          {item === "ai" && <AI handleClick={closeModal} />}
          {item === "noticeboard" && <NoticeBoard handleClick={closeModal} />}
          {item === "game" && <Game handleClick={closeModal} />}
        </StyledModal>
      )}
    </div>
  );
};
