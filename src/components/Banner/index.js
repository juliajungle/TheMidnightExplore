import React, { useState } from "react";
import styled from "styled-components";
import chevronDown from "../../images/chevron-down.jpg";
import chevronUp from "../../images/chevron-up.jpg";

const StyledWrapper = styled.div`
  position: fixed;
  z-index: 100;
  left: 50%;
  height: ${(props) => (props.isOpen ? `36px` : `25px`)};
  margin-left: -150px;
  background: transparent;
  transition: height 0.5s ease-in;
`;

const StyledLinksWrapper = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-around;
  border-radius: 5%;
  height: ${(props) => (props.isOpen ? `25px` : `0`)};
  transition: height 0.5s ease-in;
`;

const StyledLink = styled.a`
  width: 130px;
  line-height: ${(props) => (props.isOpen ? `25px` : `0`)};
  transition: line-height 0.5s ease-in, font-size 0.5s ease;
  border: solid #ff5edb 0;
  color: black;
  font-family: "Press Start 2P";
  font-size: ${(props) => (props.isOpen ? `14px` : `0`)};
  background-color: #ff5edb;
  box-shadow: 0px 0px 30px #ff5edb;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;

  :hover {
    background-color: white;
  }
`;

const StyledButton = styled.button`
  width: 21px;
  height: 20px;
  margin-left: 140px;
  background-color: white;
  border: 0;
  padding: 0 4px;
  cursor: pointer;
  border-radius: 5%;

  :active {
    outline: none;
    border: none;
  }
  :focus {
    outline: none;
    border: none;
  }
  :hover {
    transform: scale(1.1);
  }
`;

const StyledImage = styled.img`
  width: 13px;
`;
export const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
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
          Store
        </StyledLink>
      </StyledLinksWrapper>

      <StyledButton onClick={handleClick}>
        {isOpen && <StyledImage src={chevronUp} />}
        {!isOpen && <StyledImage src={chevronDown} />}
      </StyledButton>
    </StyledWrapper>
  );
};
