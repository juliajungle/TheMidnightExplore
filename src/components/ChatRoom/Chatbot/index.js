import ChatBot from "react-simple-chatbot";
import React from "react";
import "./index.css";
import { ThemeProvider } from "styled-components";

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
};

const bubbleStyle = {
  borderRadius: "none",
  boxShadow: "none",
};

export const MyChatbot = () => {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        inputStyle={inputStyle}
        height="320px"
        width="390px"
        steps={steps}
        hideHeader={true}
        className="lostboy"
        hideBotAvatar={true}
        hideUserAvatar={true}
        bubbleStyle={bubbleStyle}
      />
    </ThemeProvider>
  );
};
