import React from "react";
import { LevaPanel, useControls, useCreateStore } from "leva";

import { CodeBlock } from "./CodeBlock";
import { Flex, Box } from "@components/UI";

export const CodeLive = ({ code, language }) => {
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

  return (
    <Flex
      data-mdx="pre-container"
      css={{
        background: "$grey100",

        padding: "$4 $4",
        flexDirection: "column",
        "@sm": {
          flexDirection: "row",
        },
        "@md": {
          flexDirection: "column",
        },
        "@lg": {
          flexDirection: "row",
        },
      }}
    >
      <Flex
        css={{
          order: 1,
          width: "100%",
          alignItems: "center",
          "@sm": {
            maxWidth: "300px",
            order: 2,
          },
        }}
      >
        <LevaPanel store={store} fill titleBar={false} />
      </Flex>
      <Box
        css={{
          order: 1,
          width: "100%",
          flex: "1",
          marginTop: "$4",
          "@sm": {
            order: 1,
            marginTop: "$0",
            paddingRight: "$4",
          },
        }}
      >
        <CodeBlock language={language} code={code} />
      </Box>
    </Flex>
  );
};
