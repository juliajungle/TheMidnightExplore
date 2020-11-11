import React from "react";
import styled from "styled-components";

import { predictions } from "../../data/questions";
import { AISubmit } from "../Buttons/Buttons";

const StyledParagraph = styled.p`
  font-family: "courier";
  font-size: 14px;
`;

const StyledSpan = styled.span`
  font-family: "courier";
  font-size: 14px;
  display: inline-block;
  vertical-align: middle;
  margin-top: 10px;
  margin-right: 10px;
`;

const StyledForm = styled.form`
  position: absolute;
  bottom: 10px;
  width: 100%;
`;

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledLabel = styled.label`
  position: relative;
  display: inline-block;
  margin-top: 10px;
  width: 70px;
  height: 34px;
`;
const StyledInput = styled.input`
  position: absolute;
  left: -100vw;

  :checked + .slider {
    background-color: #aa1389;
  }

  :focus + .slider {
    box-shadow: 0 0 1px #aa1389;
  }

  :checked + .slider:before {
    transform: translateX(36px);
  }
  :checked + .slider:after {
    content: "true";
    margin-left: 4px;
  }
`;

const StyledSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  color: white;
  border-radius: 5px;

  :before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 5px;
  }

  :after {
    content: "false";
    margin-top: 8px;
    margin-left: 35px;
    position: absolute;
  }
`;

export const Question = ({ step, nextClick, checked, onChange }) => {
  const predictionNumber = step - 1;
  const prediction = Object.keys(predictions)[predictionNumber];
  const answer = Object.entries(predictions)[predictionNumber][1];

  return (
    <div>
      <StyledParagraph>{prediction}</StyledParagraph>

      <StyledForm onSubmit={(e) => nextClick(e, checked, answer)}>
        <StyledWrapper>
          <div>
            <StyledSpan>
              Do you think this was one of his predictions for 2029?
            </StyledSpan>
            <StyledLabel for="toggle">
              {" "}
              {checked.toString()}
              <StyledInput
                type="checkbox"
                id="toggle"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
              />
              <StyledSlider className="slider">{checked}</StyledSlider>
              {checked.toString()}
            </StyledLabel>
          </div>

          <AISubmit type="submit" text="NEXT >" />
        </StyledWrapper>
      </StyledForm>
    </div>
  );
};
