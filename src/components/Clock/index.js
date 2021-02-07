import React, { useState } from "react";
import styled from "styled-components";
import Countdown from "react-countdown";
import { Fragment } from "react";
import { RealTimeLoader } from "../Shared/Loading";

const startDate = new Date("February 1, 2021 16:00:00");
const completeDate = new Date("April 16, 2021 16:00:00"); // = 3pm GMT
// const testDate = new Date("April 15, 2021 16:00:00");
const totalTime = completeDate - startDate;
const part = totalTime / 9;

const StyledCountdown = styled.div`
  position: absolute;
  width: 300px;
  height: 220px;
  left: 70px;
  top: 50px;
  background-color: black;
  border-radius: 5px;
`;

const StyledDateTimeLabel = styled.span`
  font-family: "VT323";
  text-shadow: #f7f6f2 1px 0 10px;
  color: white;
  font-size: 16px;
`;

const StyledDateTime = styled.span`
  font-family: "VT323";
  text-shadow: #f7f6f2 1px 0 10px;
  color: white;
  font-size: 40px;
`;

const StyledCounterContainer = styled.div`
  position: absolute;
  top: 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 300px;
`;

const StyledItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CompletedContainer = styled.div`
  position: absolute;
  top: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 300px;

  animation: clock-blinker 1s linear infinite;

  @keyframes clock-blinker {
    50% {
      opacity: 0;
    }
  }
`;

export const Clock = () => {
  const [isLoading, setIsLoading] = useState(true);
  // Random component
  const Completionist = () => {
    setIsLoading(false);

    return (
      <CompletedContainer>
        <StyledDateTime>Click here!</StyledDateTime>
      </CompletedContainer>
    );
  };

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const difference = completeDate - today;
    const partsRemaining = Math.floor(difference / part);
    const partsLoaded = 9 - partsRemaining;

    // const testDif = completeDate - testDate;
    // const testPartsRemaining = Math.floor(testDif / part);
    // const testPartsLoaded = 9 - testPartsRemaining;

    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <Fragment>
          <RealTimeLoader
            loadedParts={partsLoaded}
            isLoading={isLoading}
            theme="spotify"
          />
          <StyledCounterContainer>
            {" "}
            <StyledItemContainer>
              <StyledDateTime> {days}</StyledDateTime>
              <StyledDateTimeLabel> DAYS</StyledDateTimeLabel>
            </StyledItemContainer>
            <StyledItemContainer>
              <StyledDateTime> {hours}</StyledDateTime>
              <StyledDateTimeLabel> HOURS</StyledDateTimeLabel>
            </StyledItemContainer>
            <StyledItemContainer>
              <StyledDateTime> {minutes}</StyledDateTime>
              <StyledDateTimeLabel> MINUTES</StyledDateTimeLabel>
            </StyledItemContainer>
            <StyledItemContainer>
              <StyledDateTime> {seconds}</StyledDateTime>
              <StyledDateTimeLabel> SECONDS</StyledDateTimeLabel>
            </StyledItemContainer>
          </StyledCounterContainer>
        </Fragment>
      );
    }
  };
  return (
    <StyledCountdown>
      <Countdown date={completeDate} renderer={renderer} />
    </StyledCountdown>
  );
};
