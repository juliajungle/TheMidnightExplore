import React, { useState } from "react";
import styled from "styled-components";

import { CloseButton } from "../Buttons/Buttons";
import { predictions } from "../../data/questions";
import { AISteps } from "./AISteps";

const StyledWrapper = styled.div`
  z-index: -100;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  border: 20px solid black;
  border-radius: 30px;
  background-color: white;
  height: 320px;
  // width: 410px;
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 10px;
  top: -20px;
  right: -20px;
`;

export const AI = ({ handleClick }) => {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [checked, setChecked] = useState(false);

  const questionsLength = Object.entries(predictions).length;

  const onChange = (value) => {
    setChecked(value);
  };
  const startQuestions = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const nextClick = (e, value, answer) => {
    e.preventDefault();
    setStep(step + 1);
    setChecked(false);
    if (answer === value) {
      setScore(score + 1);
    }
  };

  const handleReset = () => {
    setScore(0);
    setStep(1);
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
      <ButtonContainer>
        {" "}
        <CloseButton icon="close.svg" handleClick={handleClick} />
      </ButtonContainer>
    </div>
  );
};
