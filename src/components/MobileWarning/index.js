import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import styled from "styled-components";
import bedroom1 from "../../images/bedroom1cropped.jpg";

const StyledWrapper = styled.div`
  position: fixed;
  width: 90%;
  top: 10%;
  opacity: 0.9;
  background-color: black;
  background-image: radial-gradient(#f906f18f, black 120%);
  box-shadow: 0px 0px 30px #ff5edb;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;

  :after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    background: repeating-linear-gradient(
      #00000012,
      #00000012 1px,
      transparent 1px,
      transparent 2px
    );
  }
`;

const StyledParagraph = styled.p`
  font-family: "VT323";
  text-shadow: #f7f6f2 1px 0 10px;
  color: white;
  font-size: 22px;
  margin-top: 0;
  padding-top: 20px;
`;

const StyledLink = styled.a`
  font-family: "VT323";
  text-shadow: #f7f6f2 1px 0 10px;
  color: white;
  font-size: 22px;
  margin-top: 0;
  display: block;
  width: fit-content;
  background-color: white;
  color: #6b3175;
  text-decoration: none;
  margin-top: 10px;
`;

const Wrapper = styled.div`
  background-image: url(${bedroom1});
  background-size: cover;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
`;

const StyledSpanBlinker = styled.span`
  @keyframes typing-blinker {
    to {
      visibility: hidden;
    }
  }
  opacity: 1;
  margin-bottom: -2px;
  border-left: 15px solid #a73489;
  animation: typing-blinker 0.9s steps(2, start) infinite;
`;
const string1 = `Uh oh, it looks like you might be away from your personal computer.
We work best with Comtek computers but any IBM PC or Macintosh
should do.`;

const string2 = `Get connected and we will see you online!`;

const string3 = `In the meantime, here are some cool web pages to check out:`;

export const MobileWarning = () => {
  const [sentence1, setSentence1] = useState("");
  const [sentence2, setSentence2] = useState("");
  const [sentence3, setSentence3] = useState("");
  const [count, setCount] = useState(0);
  const [nextSentence, setNextSentence] = useState(false);
  const [lastSentence, setLastSentence] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

  const typeWriter = (setFunction, sentence, string) => {
    setFunction(`${sentence}${string.charAt(count)}`);
  };

  useEffect(() => {
    if (!nextSentence && count < string1.length) {
      setCount(count + 1);
      setTimeout(() => typeWriter(setSentence1, sentence1, string1), 70);
    }
    if (count === string1.length) {
      setCount(0);
      setNextSentence(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sentence1]);

  useEffect(() => {
    if (nextSentence) {
      if (count < string2.length) {
        setCount(count + 1);
        setTimeout(() => typeWriter(setSentence2, sentence2, string2), 70);
      }
    }
    if (count === string2.length) {
      setCount(0);
      setLastSentence(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sentence2, nextSentence]);

  useEffect(() => {
    if (lastSentence) {
      if (count < string3.length) {
        setCount(count + 1);
        setTimeout(() => typeWriter(setSentence3, sentence3, string3), 70);
      }
    }
    if (count === string3.length) {
      setTimeout(() => setShowLinks(true), 50);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sentence3, lastSentence]);

  return (
    <Wrapper>
      <StyledWrapper>
        <StyledParagraph>
          {">"} {sentence1}{" "}
          {!nextSentence && <StyledSpanBlinker>&#32;</StyledSpanBlinker>}
        </StyledParagraph>
        {nextSentence && (
          <StyledParagraph>
            {">"} {sentence2}{" "}
            {!lastSentence && <StyledSpanBlinker>&#32;</StyledSpanBlinker>}
          </StyledParagraph>
        )}

        {lastSentence && (
          <StyledParagraph>
            {">"} {sentence3}{" "}
            {!showLinks && <StyledSpanBlinker>&#32;</StyledSpanBlinker>}
            {showLinks && (
              <Fragment>
                <StyledLink href="https://www.themidnightofficial.com/#tour">
                  Tour
                </StyledLink>
                <StyledLink href="https://merch.ambientinks.com/collections/themidnight/featured">
                  Store
                </StyledLink>
              </Fragment>
            )}
          </StyledParagraph>
        )}
      </StyledWrapper>
    </Wrapper>
  );
};
