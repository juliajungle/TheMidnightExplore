import React from "react";
import styled from "styled-components";

import { Question } from "./Question";
import { AIButton } from "../Buttons/Buttons";

const StyledParagraph = styled.p`
  font-family: "courier";
  font-size: 14px;
`;

const StyledList = styled.ul`
  font-family: "courier";
  font-size: 12px;
  padding-left: 0;
  list-style-position: inside;
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
            made (and often correctly) predictions about AI.
          </StyledParagraph>
          <StyledList>
            These are some predictions from The Age of Spiritual Machines (1990)
            for 2009:{" "}
            <li>
              Computer displays built into eyeglasses for augmented reality are
              used
            </li>
            <li>Militaries rely heavily on armed unmanned airborne devices</li>
          </StyledList>
          <StyledParagraph>
            Can you guess which of the following he predicted to be true by
            2029?
          </StyledParagraph>
          <StyledDiv>
            <AIButton handleClick={startQuestions} text="START" />
          </StyledDiv>
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
            <AIButton handleClick={handleReset} text="TRY AGAIN" />
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
