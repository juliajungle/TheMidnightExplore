import React from "react";
import { Fragment } from "react";
import styled from "styled-components";
import bedroom1 from "../../images/bedroom1cropped.jpg";

const StyledWrapper = styled.div`
  position: fixed;
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
  padding-top: 40px;
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
  //   background-position: center;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
`;

export const MobileWarning = () => {
  return (
    <Wrapper>
      <StyledWrapper>
        <StyledParagraph>
          Uh oh, it looks like you might be away from your desktop computer. We
          work best with Comtek computers but any PC or Mac should do.{" "}
        </StyledParagraph>
        <StyledParagraph>
          Get connected and we will see you online!
        </StyledParagraph>

        <StyledParagraph>
          In the meantime, here are some cool web pages to check out:
          <StyledLink href="https://www.themidnightofficial.com/#tour">
            Tour
          </StyledLink>
          <StyledLink href="https://merch.ambientinks.com/collections/themidnight/featured">
            Store
          </StyledLink>
        </StyledParagraph>
      </StyledWrapper>
    </Wrapper>
  );
};
