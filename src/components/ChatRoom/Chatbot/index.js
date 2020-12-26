import ChatBot from "react-simple-chatbot";
import React from "react";
import "./index.css";
import styled, { ThemeProvider } from "styled-components";

const clues = [
  'Have you "noticed" anything?',
  "Maybe play a game?",
  "The TV looks interesting...",
];

const clue = clues[Math.floor(Math.random() * clues.length)];

const steps = [
  {
    id: "1",
    message: "Hello! What is your name?",
    trigger: "2",
  },
  {
    id: "2",
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message: "Hi {previousValue}, nice to meet you! Did you get lost?",
    trigger: "4",
  },

  {
    id: "try-again",
    message: "Sorry I don't know what you mean by {previousValue}",
    trigger: "4",
  },
  {
    id: "4",
    user: true,
    trigger: ({ value, steps }) => {
      if (value === "yes") {
        return "5";
      } else {
        return "end-message";
      }
    },
  },
  {
    id: "5",
    message: "Cool! Do you need a clue?",
    trigger: "tip",
  },
  {
    id: "tip",
    user: true,
    trigger: ({ value, steps }) => {
      if (value === "yes") {
        return "clue";
      } else {
        return "end-message";
      }
    },
  },
  {
    id: "clue",
    message: clue,
    end: true,
  },
  {
    id: "end-message",
    message: "Come back if you need help!",
    end: true,
  },
];

const theme = {
  background: "transparent",
  fontFamily: "VT323",
  headerBgColor: "transparent",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#transparent",
  botFontColor: "#fff",
  userBubbleColor: "transparent",
  userFontColor: "pink",
};

const inputStyle = {
  background: "transparent",
  color: "white",
  fontFamily: "VT323",
  textShadow: "#f7f6f2 1px 0 10px",
  fontSize: "12px",
  border: "none",
  padding: "20px",
};

const bubbleStyle = {
  borderRadius: "none",
  boxShadow: "none",
};

const contentStyle = {
  height: "200px",
};

const style = {
  boxShadow: "none",
};

const StyledDiv = styled.div`
  background-color: black;
  background-image: radial-gradient(#1b5bff, black 120%);
  width: 329px;
  height: 290px;
  position: absolute;
  z-index: -1;
  left: 53px;
  top: 47px;
  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.15);
  :after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 302px;
    height: 281px;
    background: repeating-linear-gradient(
      #00000012,
      #00000012 1px,
      transparent 1px,
      transparent 2px
    );
  }
`;

export const MyChatbot = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledDiv></StyledDiv>
      <ChatBot
        inputStyle={inputStyle}
        contentStyle={contentStyle}
        height="290px"
        width="330px"
        steps={steps}
        hideHeader={true}
        className="lostboy"
        hideBotAvatar={true}
        hideUserAvatar={true}
        bubbleStyle={bubbleStyle}
        style={style}
        botDelay="500"
        hideSubmitButton={true}
        placeholder=""
      />
    </ThemeProvider>
  );
};
