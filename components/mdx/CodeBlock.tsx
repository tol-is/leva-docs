import React from "react";
import Highlight, { defaultProps, PrismTheme } from "prism-react-renderer";
import { styled } from "@styles/stitches.config";

const codeTheme = {
  plain: {
    color: "#e5e5e5",
  },
  styles: [
    {
      types: ["function", "variable"],
      style: {
        color: "#e5e5e5",
      },
    },
    {
      types: ["comment"],
      style: {
        color: "#535a6a",
      },
    },

    {
      types: [
        "keyword",
        "class-name",
        "tag",
        "attr-name",
        "punctuation",
        "operator",
      ],
      style: {
        color: "#e5e5e5",
      },
    },
  ],
} as PrismTheme;

const Pre = styled("pre", {
  fontSize: "$2",
  "@sm": {
    fontSize: "$3",
  },
  lineHeight: 1.3,
  "& .token.string, .token.number, .token.builtin, .token.variable, .token.boolean":
    {
      color: "$accent",
    },
});

export const CodeBlock = ({ code, language }) => {
  return (
    <Highlight
      {...defaultProps}
      code={code}
      language={language}
      theme={codeTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          {tokens.map((line, i) => {
            const { style, ...rest } = getLineProps({ line, key: i });
            return (
              <div
                key={i}
                {...rest}
                style={{
                  ...style,
                }}
              >
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            );
          })}
        </Pre>
      )}
    </Highlight>
  );
};
