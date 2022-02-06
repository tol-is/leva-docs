import React from "react";
import NextLink from "next/link";

import { CopyIcon, CheckIcon } from "@modulz/radix-icons";
import copy from "copy-to-clipboard";

import { Box, Flex, IconButton } from "./UI";
import { Tooltip } from "./Tooltip";

export const CodeCopy = () => {
  const [hasCopied, setHasCopied] = React.useState(false);

  return (
    <Flex
      css={{
        background: "$grey100",
        alignItems: "center",
        padding: "0 $2 0 $3",
        height: "$7",
      }}
    >
      <Box
        as="pre"
        css={{
          fontFamily: "$mono",
          fontSize: "$2",
          lineHeight: 1,
          margin: "0 $2 0 0",
          padding: "$0",
        }}
      >
        npm install leva
      </Box>
      <Tooltip content="Copy to Clipboard">
        <IconButton
          aria-label="Copy the install snippet to Clipboard"
          onClick={() => {
            copy("npm install leva");
            setHasCopied(true);
          }}
          css={{
            marginTop: "$1",
            appearance: "none",
          }}
        >
          {hasCopied ? <CheckIcon /> : <CopyIcon />}
        </IconButton>
      </Tooltip>
    </Flex>
  );
};
