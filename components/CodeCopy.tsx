import React from "react";
import NextLink from "next/link";

import { CopyIcon, CheckIcon } from "@modulz/radix-icons";
import copy from "copy-to-clipboard";

import { Box, Flex } from "./UI";
import { IconButton } from "./Actions";
import { Tooltip } from "./Tooltip";

export const CodeCopy = ({ prefix = null, text, label }) => {
  const [hasCopied, setHasCopied] = React.useState(false);

  return (
    <Box
      css={{
        display: "inline-flex",
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
        {prefix ? `${prefix}: ${text}` : text}
      </Box>
      <Tooltip content="Copy to Clipboard">
        <IconButton
          aria-label={label}
          onClick={() => {
            copy(text);
            setHasCopied(true);
          }}
          css={{
            marginTop: "$semi",
            appearance: "none",
          }}
        >
          {hasCopied ? <CheckIcon /> : <CopyIcon />}
        </IconButton>
      </Tooltip>
    </Box>
  );
};
