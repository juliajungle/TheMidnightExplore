import React from "react";
import styled from "styled-components";
import { Facebook, Instagram, Twitter } from "./icons";

const StyledWrapper = styled.div`
  position: fixed;
  z-index: 100;
  left: 50%;
  margin-left: -300px;
  background: transparent;
  transition: height 0.5s ease-in;

  @media all and (max-width: 699px) {
    left: 0;
    margin: 0;
    width: 100%;
  }
`;

const StyledLinksWrapper = styled.div`
  display: flex;
  width: 600px;
  justify-content: space-around;
  border-radius: 5%;
  transition: height 0.5s ease-in;
  background-color: rgb(255 93 219 / 0.4);

  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;

  :hover {
    background-color: rgb(255 93 219);
  }

  @media all and (max-width: 699px) {
    width: 95%;
    margin: 0 10px;
    background-color: rgb(255 93 219);
  }
`;

const StyledLink = styled.a`
  width: 130px;
  line-height: 25px;
  border: solid #ff5edb 0;
  color: black;
  font-family: "Press Start 2P";
  font-size: 14px;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;

  :hover {
    color: white;
  }

  @media all and (max-width: 699px) {
    font-size: 12px;
  }
`;

const StyledSocialLink = styled.a`
  width: 20px;
  border-radius: 10%;
  transition: line-height 0.5s ease-in, font-size 0.5s ease;
  border: solid #ff5edb 0;
  box-shadow: 0px 0px 30px #ff5edb;
  margin-top: 2px;
`;

const StyledSocialWrapper = styled.div`
  width: 130px;
  display: flex;
  justify-content: space-around;
  @media all and (max-width: 699px) {
    width: 100px;
  }
`;

export const Banner = () => {
  return (
    <StyledWrapper>
      <StyledLinksWrapper>
        {" "}
        <StyledLink
          href="https://www.themidnightofficial.com/#tour"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tour
        </StyledLink>
        <StyledLink
          href="https://merch.ambientinks.com/collections/themidnight/featured"
          target="_blank"
          rel="noopener noreferrer"
        >
          Merch
        </StyledLink>
        <StyledLink
          href="hhttps://www.themidnightofficial.com/contact.php"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </StyledLink>
        <StyledSocialWrapper>
          <StyledSocialLink
            href="https://www.facebook.com/TheMidnightOfficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </StyledSocialLink>
          <StyledSocialLink
            href="https://www.instagram.com/themidnightofficial"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </StyledSocialLink>
          <StyledSocialLink
            href="https://twitter.com/TheMidnightLA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </StyledSocialLink>
        </StyledSocialWrapper>
      </StyledLinksWrapper>
    </StyledWrapper>
  );
};
