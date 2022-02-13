import React from "react";

import { styled } from "@styles/stitches.config";

import { Anchor } from "./Actions";
import { Container } from "./UI";

const StyledFooter = styled("footer", {
  display: "flex",
  height: "$8",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 10,
  position: "relative",
  backgroundColor: "$grey100",
  "@md": {
    height: "$10",
  },
});

export const AppFooter = () => {
  return (
    <StyledFooter>
      <Container>
        <Anchor href="/">MADE BY OSS</Anchor>
      </Container>
    </StyledFooter>
  );
};
