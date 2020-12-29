import styled from "styled-components";

export const StyledBook = styled.div`
  position: absolute;
  top: 0;
  left: 200px;
`;

export const StyledHeading = styled.h1`
  margin-left: 10px;
  font-family: "helvetica";
  font-size: 18px;
  font-weight: 200;
  color: white;
  text-align: center;
  margin-top: 40px;
`;

export const StyledParagraph = styled.p`
  margin: 20px 10px;
  font-family: "helvetica";
  font-size: 13px;
`;

export const StyledParagraphReversed = styled.p`
  margin: 12px;
  font-size: 14px;
  font-family: "helvetica";
  transform: rotateY(-180deg) scale(0.9);
  transition: transform 0.5s ease-in-out;
`;

export const StyledList = styled.ul`
  margin: 20px 10px;
  font-size: 12px;
  font-family: "helvetica";
  padding-left: 5px;
  list-style-position: inside;
  li {
    margin: 5px;
  }
`;

export const StyledListReversed = styled.ul`
  margin: 10px;
  font-size: 13px;
  font-family: "helvetica";
  padding-left: 5px;
  list-style-position: inside;
  transform: rotateY(-180deg) scale(0.9);
  transition: transform 0.5s ease-in-out;
  li {
    margin: 5px;
  }
`;

export const StyledWrapper = styled.div`
  transform-style: preserve-3d;
  position: relative;
  height: 300px;
  cursor: pointer;
  backface-visibility: visible;

  > * {
    transform-style: preserve-3d;
    position: absolute;
    width: 200px;
    height: 100%;
    top: 0;
    left: 0;
    transform-origin: left center;
    transition: transform 0.5s ease-in-out, box-shadow 0.35s ease-in-out;

    border-bottom-right-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 1px;
    border-top-left-radius: 1px;
    background: #efefef;
  }
`;

export const StyledFront = styled.div`
  background: #404666;
  //   box-shadow: white 0 0 4px 1px;
  transform: ${(props) =>
    props.isOpen ? `rotateY(-160deg) scale(1.1)` : `none`};
  box-shadow: ${(props) =>
    props.isOpen ? `0 1em 3em 0 rgba(0, 0, 0, .2)` : `none`};

  h1 {
    animation: ${(props) =>
      props.isOpen ? `fadeout 0.5s forwards` : `fadein 1.2s forwards`};
  }

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeout {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const StyledBack = styled.div`
  background: #404666;
  border-left: solid #272a3c 6px;
  transform: ${(props) =>
    props.isOpen ? `rotateY(-20deg) scale(1.1)` : `none`};

  h1 {
    animation: ${(props) =>
      props.isOpen ? `fadeout 1s forwards` : `fadein 1s forwards`};
  }

  @keyframes fadeout {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const StyledPage1 = styled.div`
  transform: ${(props) => `rotateY(${props.transformDegrees}deg) scale(1.1);`};
  box-shadow: ${(props) =>
    props.isOpen ? `0 1em 3em 0 rgba(0, 0, 0, .2)` : `none`};
  background: ${(props) => (props.isRight ? `#f5f5f5` : `#efefef`)};

  p,
  ul {
    animation: fadein 1.5s;
  }

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const StyledPage2 = styled.div`
  transform: ${(props) => `rotateY(${props.transformDegrees}deg) scale(1.1);`};
  box-shadow: ${(props) =>
    props.isOpen ? `0 1em 3em 0 rgba(0, 0, 0, .2)` : `none`};
  background: ${(props) => (props.isRight ? `#f5f5f5` : `#efefef`)};

  p,
  ul {
    animation: fadein 1.5s;
  }

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const StyledPage3 = styled.div`
  transform: ${(props) => `rotateY(${props.transformDegrees}deg) scale(1.1);`};
  box-shadow: ${(props) =>
    props.isOpen ? `0 1em 3em 0 rgba(0, 0, 0, .2)` : `none`};
  background: ${(props) => (props.isRight ? `#f5f5f5` : `#efefef`)};

  p,
  ul {
    animation: fadein 1.5s;
  }

  @keyframes fadein {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const StyledPage4 = styled.div`
  transform: ${(props) => `rotateY(${props.transformDegrees}deg) scale(1.1);`};
  box-shadow: ${(props) =>
    props.isOpen ? `0 1em 3em 0 rgba(0, 0, 0, .2)` : `none`};
  background: ${(props) => (props.isRight ? `#f5f5f5` : `#efefef`)};
`;
export const StyledPage5 = styled.div`
  transform: ${(props) => `rotateY(${props.transformDegrees}deg) scale(1.1);`};
  box-shadow: ${(props) =>
    props.isOpen ? `0 1em 3em 0 rgba(0, 0, 0, .2)` : `none`};
  background: ${(props) => (props.isRight ? `#f5f5f5` : `#efefef`)};
`;

export const StyledPage6 = styled.div`
  transform: ${(props) => `rotateY(${props.transformDegrees}deg) scale(1.1);`};
  box-shadow: ${(props) =>
    props.isOpen ? `0 1em 3em 0 rgba(0, 0, 0, .2)` : `none`};
  background: ${(props) => (props.isRight ? `#f5f5f5` : `#efefef`)};
`;
