import React from "react";
import styled from "styled-components";
import { ChatRoom } from "./ChatRoom/index";

import { Television } from "./Television/index";
import { AI } from "./AI/index";
import { NoticeBoard } from "./NoticeBoard/Board";

const StyledModal = styled.div`
  position: fixed;
  z-index: 1;
  left: 28%;
  top: 20%;
  width: 410px;
  height: 320px;
  // overflow: auto;
  background-color: black;
  border-radius: 5%;
  box-shadow: -1px 0px 18px 3px #d31e91;
  display: block;
`;

const StyledMobileModal = styled.div`
  position: fixed;
  z-index: 1;
  left: 5%;
  top: 20%;
  width: 90%;
  height: 320px;
  background-color: black;
  border-radius: 5%;
  box-shadow: -1px 0px 18px 3px #d31e91;
  display: block;
`;

export const Modal = ({ isOpen, handleClick, item, width }) => {
  return (
    <div>
      {isOpen && (
        <StyledModal>
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

export const MobileModal = ({ isOpen, handleClick, item }) => {
  return (
    <div>
      {isOpen && (
        <StyledMobileModal>
          {item === "tv" && <Television handleClick={handleClick} />}
          {item === "monitor" && (
            <ChatRoom handleClick={handleClick}></ChatRoom>
          )}
          {item === "ai" && <AI handleClick={handleClick} />}
          {item === "noticeboard" && <NoticeBoard handleClick={handleClick} />}
        </StyledMobileModal>
      )}
    </div>
  );
};
