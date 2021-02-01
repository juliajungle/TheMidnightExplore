import React from "react";
import styled from "styled-components";
import { Facebook, Instagram, Twitter, Spotify } from "./icons";

const StyledWrapper = styled.div`
  position: fixed;
  z-index: 100;
  left: 50%;
  margin-left: -300px;
  background: transparent;

  @media all and (max-width: 699px) {
    left: 0;
    margin: 0;
    width: 100%;
    background-color: rgb(255 93 219);
    padding: 5px 10px;
  }
`;

const StyledLinksWrapper = styled.div`
  display: flex;
  width: 600px;
  justify-content: space-around;
  border-radius: 5%;
  background-color: rgb(255 93 219 / 0.6);

  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;

  :hover {
    background-color: rgb(255 93 219);
  }

  @media all and (max-width: 699px) {
    width: 95%;
    margin: 0;
    background-color: rgb(255 93 219);
    border-radius: 0;
  }
`;

const StyledLink = styled.a`
  width: 130px;
  line-height: 28px;
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
    font-size: 10px;
    flex: 2;
    text-align: left;
  }
`;

const StyledSocialLink = styled.a`
  width: 20px;
  border-radius: 10%;
  border: solid #ff5edb 0;
  box-shadow: 0px 0px 30px #ff5edb;
`;

const StyledSpotifyLink = styled.a`
  width: 22px;
  border-radius: 10%;
  border: solid #ff5edb 0;
  box-shadow: 0px 0px 30px #ff5edb;
`;

const StyledSocialWrapper = styled.div`
  width: 130px;
  display: flex;
  justify-content: space-around;

  @media all and (max-width: 699px) {
    flex: 3;
    align-items: flex-end;
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
          href="https://www.themidnightofficial.com/contact.php"
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
          <StyledSpotifyLink
            href="https://open.spotify.com/artist/2NFrAuh8RQdQoS7iYFbckw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Spotify />
          </StyledSpotifyLink>
        </StyledSocialWrapper>
      </StyledLinksWrapper>
    </StyledWrapper>
  );
};
