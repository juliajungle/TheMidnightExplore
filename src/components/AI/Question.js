import React, { useState } from "react";
import styled from "styled-components";

import { predictions } from "../../data/questions";

const StyledParagraph = styled.p`
  font-family: "courier";
`;

const StyledSpan = styled.span`
  font-family: "courier";
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
  display: flex;
  flex-direction: column;
  //   flex-wrap: wrap;
  //   align-content: flex-start;
  //   width: 100%;
`;

const StyledLabel = styled.label`
  //   background: #0e0f25;
  //   padding: 5px;
  //   border-radius: 5px;
  //   color: #ff5edb;
  //   font-family: "courier";
  //   cursor: pointer;
  //   height: 20px;
  //   width: 50px;
  //   margin-left: 40px;
  //   :hover {
  //     box-shadow: #ed57cd -1px 2px 7px 4px;
  //   }
  //   :active {
  //     color: #0e0f25;
  //     background: #ff5edb;
  //     box-shadow: none;
  //   }

  position: relative;
  display: inline-block;
  width: 70px;
  height: 34px;
`;
const StyledInput = styled.input`
  position: absolute;
  left: -100vw;

  :checked + .slider {
    background-color: #2196f3;
  }

  :focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  :checked + .slider:before {
    transform: translateX(36px);
    // content: "true";
  }
  :checked + .slider:after {
    // transform: translateX(36px);
    content: "true";
    margin-left: 4px;
    // color: #2196f3;
  }
`;

const StyledQuestion = styled.div`
  width: 100%;
  margin: 10px;
`;

const StlyedSubmit = styled.input`
  display: block;
  height: 23px;
  width: 65px;
  align-self: flex-end;
  margin-right: 20px;
  background-color: black;
  color: white;
  border: 1px solid transparent;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
  :hover {
    background-color: white;
    color: black;
    border-color: black;
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
            <StyledSpan>Toggle true/false --></StyledSpan>
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

          <StlyedSubmit type="submit" value="NEXT >" />
        </StyledWrapper>
      </StyledForm>
    </div>
  );
};
