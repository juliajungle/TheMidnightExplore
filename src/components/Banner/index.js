import React, { useState } from "react";
import styled from "styled-components";
import { Facebook, Instagram, Twitter } from "./icons";

const StyledWrapper = styled.div`
  position: fixed;
  z-index: 100;
  left: 50%;
  height: ${(props) => (props.isOpen ? `36px` : `25px`)};
  margin-left: -300px;
  background: transparent;
  transition: height 0.5s ease-in;
`;

const StyledLinksWrapper = styled.div`
  display: flex;
  width: 600px;
  justify-content: space-around;
  border-radius: 5%;
  height: ${(props) => (props.isOpen ? `25px` : `0`)};
  transition: height 0.5s ease-in;
  background-color: rgb(255 93 219 / 0.4);

  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;

  :hover {
    background-color: rgb(255 93 219);
  }
`;

const StyledLink = styled.a`
  width: 130px;
  line-height: ${(props) => (props.isOpen ? `25px` : `0`)};
  transition: line-height 0.5s ease-in, font-size 0.5s ease;
  border: solid #ff5edb 0;
  color: black;
  font-family: "Press Start 2P";
  font-size: ${(props) => (props.isOpen ? `14px` : `0`)};
  text-align: center;
  vertical-align: middle;
  text-decoration: none;

  :hover {
    color: white;
  }
`;

const StyledSocialLink = styled.a`
  width: 20px;
  height: ${(props) => (props.isOpen ? `20px` : `0`)};
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
`;

export const Banner = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <StyledWrapper>
      <StyledLinksWrapper isOpen={isOpen}>
        {" "}
        <StyledLink
          href="https://www.themidnightofficial.com/#tour"
          isOpen={isOpen}
          target="_blank"
          rel="noopener noreferrer"
        >
          Tour
        </StyledLink>
        <StyledLink
          href="https://merch.ambientinks.com/collections/themidnight/featured"
          isOpen={isOpen}
          target="_blank"
          rel="noopener noreferrer"
        >
          Merch
        </StyledLink>
        <StyledLink
          href="hhttps://www.themidnightofficial.com/contact.php"
          isOpen={isOpen}
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </StyledLink>
        <StyledSocialWrapper>
          <StyledSocialLink
            href="https://www.facebook.com/TheMidnightOfficial"
            isOpen={isOpen}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </StyledSocialLink>
          <StyledSocialLink
            href="https://www.instagram.com/themidnightofficial"
            isOpen={isOpen}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </StyledSocialLink>
          <StyledSocialLink
            href="https://twitter.com/TheMidnightLA"
            isOpen={isOpen}
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
