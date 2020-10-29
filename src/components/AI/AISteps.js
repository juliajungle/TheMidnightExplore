import React, { useState } from "react";
import styled from "styled-components";

import { Question } from "./Question";
import { AIButton } from "../Buttons";

const StyledParagraph = styled.p`
  font-family: "courier";
  font-size: 14px;
`;

const StyledQuestion = styled.div`
  margin: 10px;
`;

const StyledLink = styled.a`
  color: #226deb;

  text-decoration: none;
`;

const StyledDiv = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  right: 10px;
`;

export const AISteps = ({
  handleReset,
  step,
  score,
  checked,
  questionsLength,
  nextClick,
  onChange,
  startQuestions,
}) => {
  return (
    <StyledQuestion>
      {step === 0 && (
        <div>
          {" "}
          <StyledParagraph>
            American author, inventor and futurist Raymond Kurzweil famously
            makes (often correct) predictions about AI.
          </StyledParagraph>
          <StyledParagraph>
            As some examples in The Age of Spiritual Machines (1999) he
            predicted the following: "Computer displays built into eyeglasses
            for augmented reality are used" "Militaries rely heavily on armed
            unmanned airborne devices"
          </StyledParagraph>
          <StyledParagraph>
            Can you guess which of these he predicted to be true by 2029?
          </StyledParagraph>
          <AIButton handleClick={startQuestions} text="START" />
        </div>
      )}
      {step > 0 && step <= questionsLength && (
        <Question
          step={step}
          nextClick={nextClick}
          onChange={onChange}
          checked={checked}
        />
      )}
      {step > questionsLength && score < questionsLength && (
        <div>
          <StyledParagraph>
            Not bad. Your score is {score}/{questionsLength}
          </StyledParagraph>
          <StyledDiv>
            {" "}
            <AIButton handleClick={handleReset} text="Try again" />
          </StyledDiv>
        </div>
      )}
      {score === questionsLength && (
        <div>
          <StyledParagraph>
            Well done, you got all the answers correct! You must have special
            predictive powers too!
          </StyledParagraph>
          <StyledParagraph>
            You might be interested in some further{" "}
            <StyledLink
              href="https://www.amazon.co.uk/Ray-Kurzweil/e/B001ILHHDS%3Fref=dbs_a_mng_rwt_scns_share"
              target="_blank"
              rel="noopener noreferrer"
            >
              reading
            </StyledLink>
            .
          </StyledParagraph>
        </div>
      )}
    </StyledQuestion>
  );
};
