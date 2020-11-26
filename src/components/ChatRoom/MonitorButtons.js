import React from "react";
import styled from "styled-components";
import power from "../../images/power-light.png";

const StyledMonitorButton = styled.button`
  width: 25px;
  height: 20px;
  border: 2px #46414c solid;
  background: url(${power});
  border-radius: 40%;
  background-size: contain;
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
  bottom: 3%;
  left: 69%;
`;

export const MonitorButton = ({ handleClick }) => {
  return <StyledMonitorButton onClick={handleClick}></StyledMonitorButton>;
};

export const MonitorButtonContainer = ({ children }) => {
  return (
    <StyledMonitorButtonContainer>{children}</StyledMonitorButtonContainer>
  );
};
