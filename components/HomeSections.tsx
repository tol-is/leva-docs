import { LevaPanel, useControls, useCreateStore } from "leva";
import React from "react";

import { ChevronRightIcon } from "@modulz/radix-icons";

import { styled } from "@styles/stitches.config";

import { DisplayMono, H3, H4, H5, Paragraph, VisuallyHidden } from "./Text";
import { Box, Container, Flex, Grid } from "./UI";
import { Anchor } from "./Actions";
import { Carousel } from "./Carousel";

const DemoColumnOne = () => {
  const store = useCreateStore();
  useControls(
    {
      myNumber: 4,
      myFooColor: "#fff",
      vec3: {
        x: 0,
        y: 2,
        z: 1.5,
      },
    },
    { store: store }
  );

  return <LevaPanel store={store} fill titleBar={false} />;
};

const DemoColumnTwo = () => {
  const store = useCreateStore();
  useControls(
    {
      myNumber: 4,
      myFooColor: "#fff",
      vec3: {
        x: 0,
        y: 2,
        z: 1.5,
      },
    },
    { store: store }
  );

  return <LevaPanel store={store} fill titleBar={false} />;
};

const DemoColumnThree = () => {
  const store = useCreateStore();
  useControls(
    {
      myNumber: 4,
      myFooColor: "#fff",
      vec3: {
        x: 0,
        y: 2,
        z: 1.5,
      },
    },
    { store: store }
  );

  return <LevaPanel store={store} fill titleBar={false} />;
};

const SectionLink = styled(Anchor, {
  display: "inline-block",
  "&:before": {
    content: "",
    zIndex: 8,
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  "& > span": {
    position: "relative",
    zIndex: 10,
  },
  "& svg": {
    transition: "all 0.1s ease-out",
  },
  "&:hover svg, &:focus svg": {
    transform: "translateX(50%)",
  },
});

const SectionBlock = ({ title, label, description, href, children }) => {
  return (
    <Flex
      as="article"
      direction="column"
      css={{
        minWidth: "280px",
        gap: "$4",
        position: "relative",
        justifyContent: "flex-start",
      }}
    >
      <H5 as="h2">{title}</H5>

      <Box css={{ maxWidth: "320px", position: "relative", zIndex: 12 }}>
        {children}
      </Box>

      <Paragraph>{description}</Paragraph>
      <div>
        <SectionLink href={href}>
          <Box css={{ display: "flex", alignItems: "center" }}>
            <Box css={{ marginBottom: "$semi", marginRight: "$4" }}>
              <VisuallyHidden>Go to</VisuallyHidden> {label}
            </Box>
            <ChevronRightIcon />
          </Box>
        </SectionLink>
      </div>
    </Flex>
  );
};

export const HomeSections = () => {
  return (
    <Container layout="home" as="section">
      <Carousel>
        <Flex
          css={{
            gap: "$10",
            flexWrap: "nowrap",
            "> * ": {
              flex: "1",
            },
          }}
        >
          <SectionBlock
            href="/docs/intro"
            title="input Types"
            label="input Types"
            description="Leva is designed with simplicity in mind, for a minimal learning curve,
        and the best possible developer experience."
          >
            <DemoColumnOne />
          </SectionBlock>

          <SectionBlock
            href="/docs/intro"
            title="Fully Customizable"
            label="Customizations"
            description=" Comes with a ton of options and configurations and a fully
            customizable theme, down to the last detail."
          >
            <DemoColumnOne />
          </SectionBlock>

          <SectionBlock
            href="/docs/intro"
            title="Build your own plugins"
            label="Plugins"
            description="Full typed API, enables developers to build custom leva components
            and solve every possible use-case."
          >
            <DemoColumnOne />
          </SectionBlock>
        </Flex>
      </Carousel>
    </Container>
  );
};
