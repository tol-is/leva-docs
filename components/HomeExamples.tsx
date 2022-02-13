import React from "react";
import { CodeCopy } from "./CodeCopy";
import { Display2, DisplayMono, H2, Paragraph } from "./Text";

import { Box, Container } from "./UI";

export const HomeExamples = () => {
  return (
    <Container as="section" css={{ position: "relative" }}>
      <DisplayMono>Examples</DisplayMono>
      <Display2 as="h2" css={{ margin: "$2 0 $4 0", maxWidth: "30ch" }}>
        Perhaps a horizontal scroll with inline examples?
      </Display2>
    </Container>
  );
};
