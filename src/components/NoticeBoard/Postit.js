import React from "react";
import styled from "styled-components";

const StyledPostit = styled.div`
  position: absolute;
  top: 10px;
  left: 130px;
  box-sizing: border-box;
  height: 45px;
  width: 45px;
  font-size: 12px;
  padding: 2px;
  font-family: monospace;
  background-color: #f7f79b;
  box-shadow: #353333 0px 3px 4px 1px;
`;

export const Postit = ({ handleClick }) => {
  return <StyledPostit>Notes</StyledPostit>;
};
