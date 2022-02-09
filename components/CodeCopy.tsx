import React from "react";
import NextLink from "next/link";

import { CopyIcon, CheckIcon } from "@modulz/radix-icons";
import copy from "copy-to-clipboard";

import { Box, Flex } from "./UI";
import { IconButton } from "./Actions";
import { Tooltip } from "./Tooltip";

export const CodeCopy = ({
  prefix = null,
  loContrast = false,
  text,
  label,
}) => {
  const [hasCopied, setHasCopied] = React.useState(false);

  return (
    <Box
      css={{
        display: "flex",
        position: "relative",
        background: loContrast ? "$grey80" : "$grey100",
        alignItems: "center",
        padding: "0 $2 0 $3",
        height: "$7",
        maxWidth: "100%",
        overflow: "hidden",
        "@xs": {
          display: "inline-flex",
        },
      }}
    >
      <Box
        as="pre"
        css={{
          fontFamily: "$mono",
          fontSize: "$1",
          lineHeight: 1,
          margin: "0 $2 0 0",
          padding: "$0",
          textAlign: "center",
          width: "100%",
        }}
      >
        {prefix ? `${prefix} ${text}` : text}
      </Box>
      <Box
        css={{
          background: loContrast ? "$grey80" : "$grey100",
          position: "absolute",
          right: "$1",
          "@xs": {
            position: "relative",
          },
        }}
      >
        <Tooltip content="Copy to Clipboard">
          <IconButton
            aria-label={label}
            onClick={() => {
              copy(text);
              setHasCopied(true);
            }}
            css={{
              marginTop: "$semi",
            }}
          >
            {hasCopied ? <CheckIcon /> : <CopyIcon />}
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};
