import React from "react";
import styled from "styled-components";
import disks from "../../images/disks.png";

const StyledDisks = styled.img`
  position: absolute;
  width: 300px;
  left: 70px;
  top: 50px;
`;

export const Disks = () => {
  return <StyledDisks src={disks} alt="Floppy disks" />;
};
