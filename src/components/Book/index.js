import React, { useState, useRef, Fragment } from "react";

import {
  StyledWrapper,
  StyledParagraph,
  StyledFront,
  StyledBack,
  StyledPage1,
  StyledPage2,
  StyledPage3,
  StyledPage4,
  StyledPage5,
  StyledPage6,
  StyledBook,
  StyledList,
  StyledHeading,
  StyledParagraphReversed,
  StyledListReversed,
} from "./styles";

const transforms = {
  page1: ["-50", "-155"],
  page2: ["-45", "-150"],
  page3: ["-40", "-145"],
  page4: ["-35", "-140"],
  page5: ["-30", "-135"],
  page6: ["-25", "-130"],
};

const getTransform = (page, isOpen, isTurned) => {
  if (isOpen && !isTurned) {
    return transforms[page][0];
  } else if (isOpen && isTurned) {
    return transforms[page][1];
  } else return ``;
};

export const Book = ({ handleClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [turnedPage1, setTurnedPage1] = useState(false);
  const [turnedPage2, setTurnedPage2] = useState(false);
  const [turnedPage3, setTurnedPage3] = useState(false);
  const [turnedPage4, setTurnedPage4] = useState(false);
  const [turnedPage5, setTurnedPage5] = useState(false);
  const [turnedPage6, setTurnedPage6] = useState(false);

  const bookRef = useRef();
  const frontRef = useRef();

  // TODO: tidy this up
  const handleBookClick = (e) => {
    if (
      (isOpen && e.target === bookRef.current) ||
      (isOpen && e.target === frontRef.current) ||
      (isOpen && e.target.localName === "h1")
    ) {
      setIsOpen(false);
    } else if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handlePage1Click = (e) => {
    setTurnedPage1(!turnedPage1);
  };

  const handlePage1BackClick = (e) => {
    if (!turnedPage2) {
      setTurnedPage1(!turnedPage1);
    }
  };

  const handlePage2Click = (e) => {
    if (turnedPage1) {
      setTurnedPage2(!turnedPage2);
    }
  };

  const handlePage2BackClick = (e) => {
    if (turnedPage1 && !turnedPage3) {
      setTurnedPage2(!turnedPage2);
    }
  };

  const handlePage3Click = (e) => {
    if (turnedPage2) {
      setTurnedPage3(!turnedPage3);
    }
  };

  const handlePage3BackClick = (e) => {
    if (turnedPage2 && !turnedPage4) {
      setTurnedPage3(!turnedPage3);
    }
  };

  return (
    <Fragment>
      <StyledBook>
        <StyledWrapper ref={bookRef} onClick={handleBookClick}>
          <StyledFront ref={frontRef} isOpen={isOpen}>
            {" "}
            <StyledHeading>The Age of Intelligent Machines</StyledHeading>
            <StyledHeading>Ray Kurzweil</StyledHeading>
          </StyledFront>
          <StyledPage1
            transformDegrees={getTransform("page1", isOpen, turnedPage1)}
            onClick={handlePage1Click}
            isOpen={isOpen}
          ></StyledPage1>
          <StyledPage1
            onClick={handlePage1BackClick}
            transformDegrees={getTransform("page1", isOpen, turnedPage1)}
            isOpen={isOpen}
            isRight={!turnedPage1}
          >
            {!turnedPage1 && (
              <Fragment>
                <StyledParagraph>
                  Raymond Kurzweil is an American author, inventor and futurist.
                  Kurzweil's first book, The Age of Intelligent Machines, was
                  published in 1990
                </StyledParagraph>

                <StyledParagraph show={!turnedPage1}>
                  Kurzweil famously made (and often correctly) predictions about
                  AI.
                </StyledParagraph>
              </Fragment>
            )}

            {turnedPage1 && (
              <Fragment>
                <StyledListReversed show={turnedPage1}>
                  These are some of those predictions for the early 2000s:
                  <li>
                    Translating telephones allow people to speak to each other
                    in different languages
                  </li>
                  <li>
                    PCs are capable of answering queries by accessing
                    information wirelessly via the Internet
                  </li>
                </StyledListReversed>
              </Fragment>
            )}
          </StyledPage1>
          <StyledPage2
            onClick={handlePage2Click}
            transformDegrees={getTransform("page2", isOpen, turnedPage2)}
            isOpen={isOpen}
          ></StyledPage2>
          <StyledPage2
            onClick={handlePage2BackClick}
            transformDegrees={getTransform("page2", isOpen, turnedPage2)}
            isOpen={isOpen}
            isRight={!turnedPage2}
          >
            {!turnedPage2 && (
              <Fragment>
                <StyledList>
                  Kurweil's next book about AI was The Age of Spiritual Machines
                  (1999). Again he made some interesting predictions. These are
                  some of those he predicted to be true by 2009:
                  <li>
                    Computer displays built into eyeglasses for augmented
                    reality are used
                  </li>
                  <li>
                    Militaries rely heavily on armed unmanned airborne devices
                  </li>
                </StyledList>
                <StyledParagraph>Not bad, right?</StyledParagraph>
              </Fragment>
            )}

            {turnedPage2 && (
              <Fragment>
                <StyledListReversed>
                  {" "}
                  In the same book he also made predictions for 2029. Here are
                  some of those:
                  <li>
                    {" "}
                    Direct brain implants allow users to enter full-immersion
                    virtual reality—with complete sensory stimulation—without
                    any external equipment.
                  </li>
                  <li>
                    {" "}
                    Non-biological intelligence will continue to grow
                    exponentially whereas biological intelligence is effectively
                    fixed in its rate of growth
                  </li>
                </StyledListReversed>
              </Fragment>
            )}
          </StyledPage2>
          <StyledPage3
            onClick={handlePage3Click}
            transformDegrees={getTransform("page3", isOpen, turnedPage3)}
            isOpen={isOpen}
          >
            {" "}
          </StyledPage3>
          <StyledPage3
            onClick={handlePage3BackClick}
            transformDegrees={getTransform("page3", isOpen, turnedPage3)}
            isOpen={isOpen}
            isRight={!turnedPage3}
          >
            {!turnedPage3 && (
              <Fragment>
                <StyledList>
                  <li> Reverse engineering of the human brain completed</li>
                  <li>
                    {" "}
                    Most communication occurs between humans and machines as
                    opposed to human-to-human.
                  </li>
                  <li>
                    {" "}
                    Artificial Intelligences will have to be built with an off
                    switch
                  </li>
                  <li>
                    {" "}
                    Artificial Intelligences claim to be conscious and openly
                    petition for recognition of the fact.
                  </li>
                </StyledList>
                <StyledParagraph>Pretty crazy stuff!</StyledParagraph>
              </Fragment>
            )}
            {turnedPage3 && (
              <Fragment>
                <StyledParagraphReversed>
                  He also wrote The Singularity Is Near about his view on the
                  future of humanity with the exponentially increasing progress
                  in technology.
                </StyledParagraphReversed>
                <StyledParagraphReversed>
                  For more about the theory of the singularity check out Vernor
                  Vinge and his 1993 essay The Coming Technological Singularity.
                </StyledParagraphReversed>
              </Fragment>
            )}
          </StyledPage3>
          <StyledPage4
            transformDegrees={getTransform("page4", isOpen, turnedPage4)}
            isOpen={isOpen}
          ></StyledPage4>
          <StyledPage4
            transformDegrees={getTransform("page4", isOpen, turnedPage4)}
            isOpen={isOpen}
            isRight={!turnedPage4}
          >
            {" "}
            {!turnedPage4 && (
              <Fragment>
                <StyledParagraph>
                  We hope that you've enjoyed this little insight into the world
                  of Ray Kurzweil.
                </StyledParagraph>
                <StyledParagraph>
                  That's probably enough reading for now!
                </StyledParagraph>
              </Fragment>
            )}
          </StyledPage4>
          <StyledPage5
            transformDegrees={getTransform("page5", isOpen, turnedPage5)}
            isOpen={isOpen}
          >
            <p>page 5</p>
          </StyledPage5>
          <StyledPage5
            transformDegrees={getTransform("page5", isOpen, turnedPage5)}
            isOpen={isOpen}
          >
            <p>page 5 back</p>
          </StyledPage5>
          <StyledPage6
            transformDegrees={getTransform("page6", isOpen, turnedPage6)}
            isOpen={isOpen}
          >
            <p>page 6</p>
          </StyledPage6>
          <StyledPage6
            transformDegrees={getTransform("page6", isOpen, turnedPage6)}
            isOpen={isOpen}
          >
            <p>page 6 back</p>
          </StyledPage6>
          <StyledBack isOpen={isOpen}>
            <StyledHeading>The Age of Intelligent Machines</StyledHeading>
            <StyledHeading>Ray Kurzweil</StyledHeading>
          </StyledBack>
        </StyledWrapper>
      </StyledBook>
    </Fragment>
  );
};
