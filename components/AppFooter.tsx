import React from "react";

import { styled } from "@styles/stitches.config";

import { Anchor } from "./Actions";
import { Container } from "./UI";

const StyledFooter = styled(Container, {
  display: "flex",
  height: "$8",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 10,
  position: "relative",
  "@md": {
    height: "$10",
  },
});

export const AppFooter = () => {
  return (
    <StyledFooter as="footer">
      <Anchor href="/">MADE BY OSS</Anchor>
    </StyledFooter>
  );
};
