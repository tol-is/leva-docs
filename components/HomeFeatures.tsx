import React from "react";
import { CodeBlock } from "./CodeBlock";
import { Display2, DisplayMono, H1, H2, Paragraph } from "./Text";

import { Box, Container, Grid } from "./UI";

import {
  VerticalTabs,
  VerticalTabsList,
  VerticalTabsTrigger,
  VerticalTabsContent,
} from "./VerticalTabs";

const codeOne = `const data = useControls(
{
  radii: folder({
    xs: "2px",
    sm: "3px",
    lg: "10px",
  }),
  space: folder({
    sm: "6px",
    md: "10px",
    rowGap: "7px",
    colGap: "7px",
  }),
  { 
    store: store
  }
);
`;

const features = [
  {
    title: "No setup necessary",
    description:
      "Call the useControls hook, with your data schema, and Leva will render a beautiful floating panel.",
    code: codeOne,
  },
  {
    title: "Handle complex data shapes",
    description:
      "Combine data stores, use a free-floating panel, or render leva inline. Anything you need to architect your application.",
    code: `
      const a = 2;
    `,
  },
  {
    title: "High Performance",
    description:
      "Built with zustand, Leva can effortlesly handle hundreds of inputs, multiple stores and complex data structures.",
    code: `
      const a = 3;
    `,
  },
];

export const HomeFeatures = () => {
  return (
    <Container as="section" css={{ position: "relative" }}>
      <DisplayMono>Batteries Included</DisplayMono>
      <Display2 as="h2" css={{ margin: "$2 0 $4 0", maxWidth: "30ch" }}>
        With 12 built-in input types, and unlimited flexibility for the most
        complex applications.
      </Display2>

      <Box css={{ display: "none", "@md": { display: "block" } }}>
        <FeaturesTabs />
      </Box>

      <Box css={{ display: "block", "@md": { display: "none" } }}>
        MOBILE Content
      </Box>
    </Container>
  );
};
const FeaturesTabs = () => {
  const [value, setValue] = React.useState("tab0");

  return (
    <VerticalTabs
      defaultValue="tab1"
      orientation="vertical"
      value={value}
      onValueChange={setValue}
      css={{ marginTop: "$9" }}
    >
      <Grid
        columns={2}
        css={{
          display: "grid",
          gridTemplateColumns: "3fr 2fr",
          gap: "$5",
          "@lg": { gap: "$10" },
        }}
      >
        <VerticalTabsList>
          {features.map((feat, index) => (
            <VerticalTabsTrigger
              key={`tab_${index}`}
              value={`tab${index}`}
              title={feat.title}
              active={value === `tab${index}`}
            >
              {feat.description}
            </VerticalTabsTrigger>
          ))}
        </VerticalTabsList>
        <Box>
          {features.map((feat, index) => (
            <VerticalTabsContent
              key={`tab_content_${index}`}
              value={`tab${index}`}
              title={feat.title}
            >
              <CodeBlock language="js" code={feat.code} />
            </VerticalTabsContent>
          ))}
        </Box>
      </Grid>
    </VerticalTabs>
  );
};
