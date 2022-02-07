import React from "react";

import Link from "next/link";

import { styled } from "@styles/stitches.config";
import { Anchor } from "./Actions";

const StyledFooter = styled("header", {
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
    <StyledFooter>
      <Anchor href="/">MADE BY OSS</Anchor>
    </StyledFooter>
  );
};
