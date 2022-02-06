import { LevaPanel } from "leva";
import React from "react";
import NextLink from "next/link";

import { Span } from "./Text";
import { CodeCopy } from "./CodeCopy";
import { Box, Flex, Container, PrimaryCta } from "./UI";

export const HomeIntro = ({ store }) => {
  return (
    <Container size="home" as="section" css={{ position: "relative" }}>
      <Span
        bold
        as="h1"
        size={{ "@initial": 8, "@sm": 9, "@lg": 10 }}
        css={{ display: "block", maxWidth: "25ch" }}
      >
        The most powerfull parametric GUI for react applications and rich
        interactive experiences.
      </Span>

      <Flex
        css={{ marginTop: "$8" }}
        direction={{ "@initial": "column", "@xs": "row" }}
      >
        <CodeCopy />
        <NextLink href="/docs" passHref>
          <PrimaryCta
            css={{
              marginTop: "$2",
              "@xs": { marginTop: "$0", marginLeft: "$2" },
            }}
          >
            Get Started
          </PrimaryCta>
        </NextLink>
      </Flex>
      <Box
        css={{
          width: "260px",
          margin: "$10 auto 0 auto",
          "@md": {
            marginTop: "$0",
            position: "absolute",
            right: "$8",
            top: "-$5",
          },
          "@lg": {
            right: "$8",
          },
        }}
      >
        <LevaPanel store={store} fill />
      </Box>
    </Container>
  );
};
