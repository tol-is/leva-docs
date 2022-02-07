import { LevaPanel } from "leva";
import React from "react";
import NextLink from "next/link";

import { Display1 } from "./Text";
import { CodeCopy } from "./CodeCopy";
import { Box, Flex, Container } from "./UI";
import { PrimaryCta } from "./Actions";

export const HomeIntro = ({ store }) => {
  return (
    <Container size="home" as="section" css={{ position: "relative" }}>
      <Display1 as="h1" css={{ maxWidth: "25ch", color: "$hiContrast" }}>
        The most powerfull parametric GUI for react applications and rich
        interactive experiences.
      </Display1>

      <Flex
        css={{ marginTop: "$8" }}
        direction={{ "@initial": "column", "@xs": "row" }}
      >
        <CodeCopy
          prefix="npm"
          text="npm install leva"
          label="Copy the install snippet to Clipboard"
        />
        <NextLink href="/docs/intro" passHref>
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
