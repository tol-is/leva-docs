import React from "react";
import { CodeCopy } from "./CodeCopy";
import { DisplayMono, H2, Paragraph } from "./Text";

import { Box, Container } from "./UI";

export const HomeSupport = () => {
  return (
    <Box css={{ background: "$grey100", padding: "$8 $0" }}>
      <Container
        size="home"
        as="section"
        css={{
          position: "relative",
          textAlign: "center",
        }}
      >
        <DisplayMono>Funding</DisplayMono>
        <H2 as="h3" prose={false} css={{ margin: "$2 0 $4 0" }}>
          SupportLeva
        </H2>
        <Paragraph css={{ maxWidth: "38ch", margin: "0 auto" }}>
          If you like this project, please consider helping out. All
          contributions are welcome as well as donations to opencollective, or
          in crypto.
        </Paragraph>
        <Box css={{ margin: "$6 auto 0 auto" }}>
          <CodeCopy
            text="https://opencollective.com/leva"
            label="Open Collective"
          />
        </Box>
        <Box css={{ margin: "0 auto" }}>
          <CodeCopy
            prefix="Bitcoin"
            text="36fuguTPxGCNnYZSRdgdh6Ea94brCAjMbH"
            label="Bitcoin"
          />
        </Box>
        <Box css={{ margin: "0 auto" }}>
          <CodeCopy
            prefix="Ethereum"
            text="0x6E3f79Ea1d0dcedeb33D3fC6c34d2B1f156F2682"
            label="Ethereum"
          />
        </Box>
      </Container>
    </Box>
  );
};
