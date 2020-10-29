import React, { useState } from "react";
import styled from "styled-components";

import { Button, ChatRoomButton } from "../Buttons";
import { predictions } from "../../data/questions";
import { Question } from "./Question";
import { AISteps } from "./AISteps";

const StyledWrapper = styled.div`
  z-index: -100;
  position: absolute;
  top: -22px;
  left: -15px;
  border-radius: 40px;
  border: 40px solid black;
  width: 360px;
  height: 262px;
  background-color: white;
`;

const StyledParagraph = styled.p`
  font-family: "courier";
  font-size: 14px;
`;

export const AI = ({ handleClick }) => {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [checked, setChecked] = useState(false);

  const questionsLength = Object.entries(predictions).length;

  const onChange = (value) => {
    setChecked(value);
    console.log(">>>", value);
  };
  const startQuestions = (e) => {
    e.preventDefault();
    setStep(step + 1);
    console.log("startQuestions>>>", step);
  };

  const nextClick = (e, value, answer) => {
    e.preventDefault();
    setStep(step + 1);
    console.log("nextClick>>>", value, answer, score);
    setChecked(false);
    if (answer === value) {
      console.log("add to score");
      setScore(score + 1);
    }
  };

  const handleReset = () => {
    setScore(0);
    setStep(1);
    console.log("handleReset", { step }, { score });
  };

  return (
    <div>
      <StyledWrapper>
        <AISteps
          handleReset={handleReset}
          step={step}
          score={score}
          checked={checked}
          questionsLength={questionsLength}
          nextClick={nextClick}
          startQuestions={startQuestions}
          onChange={onChange}
        ></AISteps>
      </StyledWrapper>

      <Button handleClick={handleClick}></Button>
    </div>
  );
};
