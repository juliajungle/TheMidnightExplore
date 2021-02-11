import React, { useState, Fragment } from "react";
import styled, { css } from "styled-components";
import pizza from "../../images/pizza.png";
import pizzaOpen from "../../images/pizza-open.png";
import pizzaZone from "../../images/pizza-zone.png";

const pizzaStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 450px;
  height: 410px;
  background-position: center;
  background-repeat: no-repeat;
  transition: opacity 0.5s ease-in-out;
  background-size: contain;
  cursor: pointer;
`;

const StyledPizzaOpen = styled.div`
  ${pizzaStyles}
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  background-image: url(${pizzaOpen});
`;

const StyledPizza = styled.div`
  ${pizzaStyles}
  opacity: ${(props) => (props.isOpen ? 0 : 1)};
  background-image: url(${pizza});
`;

const StyledLink = styled.a`
  position: absolute;
  z-index: 10;
  top: 20px;
  left: 205px;
  display: block;
  text-decoration: none;
  :hover p {
    text-shadow: 0 2px 4px white;
  }
`;

const StyledPizzaZoneImage = styled.img`
  position: absolute;
  left: -122px;
  top: 74px;
`;

export const Pizza = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Fragment>
      <Fragment>
        <StyledPizzaOpen isOpen={isOpen} onClick={handleClick}>
          {" "}
          <StyledLink
            href="http://pizza-zone.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <StyledPizzaZoneImage src={pizzaZone} alt="Pizza Zone" />
          </StyledLink>
        </StyledPizzaOpen>
      </Fragment>

      <StyledPizza isOpen={isOpen} onClick={handleClick}></StyledPizza>
    </Fragment>
  );
};
