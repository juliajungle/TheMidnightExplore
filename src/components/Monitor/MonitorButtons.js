import React from "react";
import styled from "styled-components";
import power from "../../images/power.png";

const StyledMonitorButton = styled.button`
  width: 20px;
  height: 20px;
  border: 2px transparent solid;
  background: url(${power});
  border-radius: 100%;
  background-size: 11px;
  background-color: ##514c57;
  box-shadow: #232327 0px 3px 3px 0px;
  background-repeat: no-repeat;
  background-position: 3px center;
  cursor: pointer;

  :hover {
    box-shadow: #232327 0px 1px 1px 0px;
  }
  :active {
    outline: none;
  }
`;

const StyledMonitorButtonContainer = styled.div`
  position: absolute;
  bottom: 22px;
  left: 383px;
`;

export const MonitorButton = ({ handleClick }) => {
  return <StyledMonitorButton onClick={handleClick}></StyledMonitorButton>;
};

export const MonitorButtonContainer = ({ children }) => {
  return (
    <StyledMonitorButtonContainer>{children}</StyledMonitorButtonContainer>
  );
};
