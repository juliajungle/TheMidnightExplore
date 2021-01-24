import React from "react";
import styled from "styled-components";
import disks from "../../images/disks.png";

const StyledLink = styled.a`
  position: absolute;
`;

const StyledDisks = styled.img`
  width: 350px;
`;

export const Disks = () => {
  return (
    <StyledLink
      href="http://183010165.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      {" "}
      <StyledDisks src={disks} alt="Floppy disks" />
    </StyledLink>
  );
};
