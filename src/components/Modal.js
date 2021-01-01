import React from "react";
import styled from "styled-components";
import { ChatRoom } from "./ChatRoom/index";

import { Television } from "./Television/index";
import { Book } from "./Book";
import { NoticeBoard } from "./NoticeBoard/Board";
import { Map } from "./Map/Map";
import { Record } from "./Record";

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
`;

export const Modal = ({
  isOpen,
  closeModal,
  item,
  switchModalContent,
  modalOptions,
}) => {
  return (
    <div>
      {isOpen && (
        <StyledModal>
          {item === "tv" && (
            <Television handleClick={closeModal} channelChoice={modalOptions} />
          )}
          {item === "monitor" && <ChatRoom handleClick={closeModal}></ChatRoom>}
          {item === "ai" && <Book handleClick={closeModal} />}
          {item === "noticeboard" && (
            <NoticeBoard
              switchModalContent={switchModalContent}
              handleClick={closeModal}
            />
          )}
          {item === "game" && (
            <Television handleClick={closeModal} channelChoice={3} />
          )}
          {item === "map" && (
            <Map handleClick={closeModal} mapItem={modalOptions} />
          )}
          {item === "record" && <Record handleClick={closeModal} />}
        </StyledModal>
      )}
    </div>
  );
};
