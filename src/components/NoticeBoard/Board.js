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
  top: 7%;
  left: 4%;
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
      <a
        href="https://www.google.co.uk/maps/place/Niagara/@40.7254568,-73.9841666,17.64z/data=!4m12!1m6!3m5!1s0x89c2599d513be0ab:0x24e2dbea66c7d90b!2sNiagara!8m2!3d40.7259134!4d-73.9834614!3m4!1s0x89c2599d513be0ab:0x24e2dbea66c7d90b!8m2!3d40.7259134!4d-73.9834614"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledPhotoBooth src="photobooth.png" />
      </a>
      <Pin className="pin" />
    </StyledPhotoBoothWrapper>
  );
};

const PolaroidBorder = styled.div`
  position: absolute;
  top: 8%;
  left: 39%;
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
      <a
        href="https://www.youtube.com/watch?v=eH3giaIzONA"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledPolaroid src="whitney.jpg" />
      </a>
    </PolaroidBorder>
  );
};

const StyledPosterWrapper = styled.div`
  position: absolute;
  top: 40%;
  left: 70%;
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
      <a
        href="https://store-uk.themidnightofficial.com/products/the-midnight-online-tee-black-tmd"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledPoster src="poster.png" />
      </a>
      <Pin className="pin" />
    </StyledPosterWrapper>
  );
};

const StyledNoteWrapper = styled.div`
  position: absolute;
  top: 62%;
  left: 26%;
  width: 135px;
  div {
    position: absolute;
    top: -8px;
    left: 27px;
  }
`;

const StyledNote = styled.img`
  width: 100%;
  transform: rotate(15deg);
`;

const Note = () => {
  return (
    <StyledNoteWrapper>
      {" "}
      <a
        href="https://www.google.co.uk/maps/place/Electro+Spin/@40.5739799,-73.9814127,17z/data=!3m1!4b1!4m5!3m4!1s0x89c24435b42a9da1:0x75752824671ec774!8m2!3d40.5739758!4d-73.979224"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledNote src="endlesssummer.png" />
      </a>
      <Pin className="pin" />
    </StyledNoteWrapper>
  );
};

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 10px;
  top: -5px;
  right: -5px;
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
        <Note></Note>
      </StyledWrapper>

      <ButtonContainer>
        <CloseButton icon="close.svg" handleClick={handleClick} />
      </ButtonContainer>
    </div>
  );
};
