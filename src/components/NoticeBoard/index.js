import React, { useState } from "react";
import styled, { css } from "styled-components";
import noticeBoard from "../../images/noticeboard.jpg";
import photobooth from "../../images/photobooth.png";
import poster from "../../images/poster.png";
import endlessSummer from "../../images/endlesssummer.png";
import whitney from "../../images/whitney.jpg";

const buttonStyles = css`
  position: absolute;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  outline: 0;
`;

const StyledWrapper = styled.div`
  z-index: -100;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 400px;
  height: 275px;
  outline: #ca9869 10px solid;
  outline-style: ridge;
  opacity: ${(props) => (props.isLoading ? 0 : 1)};
`;

const StyledImage = styled.img`
  width: 100%;
  height: 275px;
`;

const StyledPhotoBooth = styled.img`
  width: 75px;
  transform: rotate(5deg);
`;

const StyledPhotoBoothWrapper = styled.div`
  position: absolute;
  top: 7%;
  left: 4%;
  div {
    position: absolute;
    top: -1px;
    left: 14px;
  }
`;

const StyledPhotoBoothButton = styled.button`
  ${buttonStyles}
`;

const PhotoBooth = ({ handleContentSwitch }) => {
  const handleClick = () => {
    handleContentSwitch("map", "noticeboard", "niagara");
  };

  return (
    <StyledPhotoBoothWrapper>
      <StyledPhotoBoothButton onClick={handleClick}>
        <StyledPhotoBooth src={photobooth} />
      </StyledPhotoBoothButton>
      <Pin className="pin" />
    </StyledPhotoBoothWrapper>
  );
};

const PolaroidBorder = styled.div`
  position: absolute;
  background-color: white;
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

const StyledPolaroidButton = styled.button`
  ${buttonStyles}
`;

const StyledPolaroidText = styled.p`
  position: absolute;
  top: 70px;
  font-family: "Permanent Marker", cursive;
  font-size: 7px;
  line-height: 7px;
  color: #434242;
`;

const Polaroid = ({ handleContentSwitch }) => {
  const handleClick = () => {
    handleContentSwitch("tv", "noticeboard", 2);
  };
  return (
    <PolaroidBorder>
      <StyledPolaroidButton onClick={handleClick}>
        <StyledPolaroid src={whitney} />
        <StyledPolaroidText>I Wanna Dance With Somebody!</StyledPolaroidText>
      </StyledPolaroidButton>
      <Pin className="pin" />
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
      <StyledPoster src={poster} />
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
  width: 120px;
  transform: rotate(15deg);
`;

const StyledNoteButton = styled.button`
  ${buttonStyles}
`;

const Note = ({ handleContentSwitch }) => {
  const handleClick = () => {
    handleContentSwitch("map", "noticeboard", "electrospin");
  };
  return (
    <StyledNoteWrapper>
      <StyledNoteButton onClick={handleClick}>
        <StyledNote src={endlessSummer} />
      </StyledNoteButton>
      <Pin className="pin" />
    </StyledNoteWrapper>
  );
};

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

export const NoticeBoard = ({ handleClick, switchModalContent }) => {
  const [isLoading, setIsLoading] = useState(true);

  const setLoaded = () => {
    setIsLoading(false);
  };
  return (
    <div>
      <StyledWrapper isLoading={isLoading}>
        <StyledImage src={noticeBoard} onLoad={setLoaded} />
        <PhotoBooth handleContentSwitch={switchModalContent} />
        <Polaroid handleContentSwitch={switchModalContent} />
        <Poster />
        <Note handleContentSwitch={switchModalContent} />
      </StyledWrapper>
    </div>
  );
};
