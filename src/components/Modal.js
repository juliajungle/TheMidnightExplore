import React from "react";
import styled from "styled-components";
import { ChatRoom } from "./ChatRoom/index";

import { Television } from "./Television/index";
import { AI } from "./AI/index";
import { NoticeBoard } from "./NoticeBoard/Board";

const StyledModal = styled.div`
  position: fixed;
  z-index: 1;
  left: ${(props) => Math.max(10, props.width / 2 - 205)}px;
  top: 15%;
  width: ${(props) => Math.min(410, props.width)}px;
  // height: 320px;
  // overflow: auto;
  // background-color: black;
  border-radius: 5%;
  // box-shadow: -1px 0px 18px 3px #d31e91;
  display: block;
`;

export const Modal = ({ isOpen, handleClick, item, width }) => {
  return (
    <div>
      {isOpen && (
        <StyledModal width={width}>
          {item === "tv" && <Television handleClick={handleClick} />}
          {item === "monitor" && (
            <ChatRoom handleClick={handleClick}></ChatRoom>
          )}
          {item === "ai" && <AI handleClick={handleClick} />}
          {item === "noticeboard" && <NoticeBoard handleClick={handleClick} />}
        </StyledModal>
      )}
    </div>
  );
};
