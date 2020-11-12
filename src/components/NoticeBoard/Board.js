import React from "react";
import styled from "styled-components";
import { Postit } from "./Postit";
import { CloseButton } from "../Buttons/Buttons";

const StyledWrapper = styled.div`
  z-index: -100;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  border-radius: 10px;
  border: 5px solid white;
  height: 320px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 311px;
  border-radius: 7px;
`;

const StyledPhotoBooth = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 75px;
  transform: rotate(5deg);
`;

const StyledPhotoBoothWrapper = styled.div`
  div {
    position: absolute;
    top: 20px;
    left: 31px;
  }
`;

const PhotoBooth = () => {
  return (
    <StyledPhotoBoothWrapper>
      <StyledPhotoBooth src="photobooth.png" />
      <Pin className="pin" />
    </StyledPhotoBoothWrapper>
  );
};

const PolaroidBorder = styled.div`
  position: absolute;
  top: 49px;
  left: 180px;
  width: 75px;
  height: 90px;
  border: solid white 4px;
  div {
    position: absolute;
    top: -7px;
    left: 28px;
  }
`;

const StyledPolaroid = styled.img`
  width: 100%;
  border-color: white;
  border-width: 0 0 15px 0;
  border-style: solid;
`;

const Polaroid = () => {
  return (
    <PolaroidBorder>
      <Pin className="pin" />
      <StyledPolaroid src="whitney.jpg" />
    </PolaroidBorder>
  );
};

const StyledPosterWrapper = styled.div`
  position: absolute;
  top: 106px;
  left: 281px;
  width: 111px;
  div {
    position: absolute;
    top: -1px;
    left: 75px;
  }
`;

const StyledPoster = styled.img`
  width: 100%;
  transform: rotate(-4deg);
`;

const Poster = () => {
  return (
    <StyledPosterWrapper>
      <StyledPoster src="poster.png" />
      <Pin className="pin" />
    </StyledPosterWrapper>
  );
};

const StyledNoteWrapper = styled.div`
  position: absolute;
  top: 201px;
  left: 104px;
  width: 135px;
  div {
    position: absolute;
    top: 3px;
    left: 21px;
  }
`;

const StyledNote = styled.img`
  width: 100%;
  transform: rotate(-3deg);
`;

const Note = () => {
  return (
    <StyledNoteWrapper>
      <StyledNote src="endlesssummer.png" />
      <Pin className="pin" />
    </StyledNoteWrapper>
  );
};

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 10px;
  top: -15px;
  right: -15px;
`;

const StyledPin = styled.div`
  width: 10px;
  height: 10px;
  background-color: #f9284f;
  border-radius: 100%;
  box-shadow: #312f2f 0px 3px 5px 1px;
`;

const Pin = () => {
  return <StyledPin />;
};

export const NoticeBoard = ({ handleClick }) => {
  return (
    <div>
      <StyledWrapper>
        <StyledImage src="noticeboard.jpg" />
        {/* <Postit /> */}
        <PhotoBooth />
        <Polaroid />
        <Poster />
        <Note />
      </StyledWrapper>
      <Pin />
      <ButtonContainer>
        {" "}
        <CloseButton icon="close.svg" handleClick={handleClick} />
      </ButtonContainer>
    </div>
  );
};
