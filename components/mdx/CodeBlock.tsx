import React from "react";
import { tw } from "twind";
import Highlight, { defaultProps, PrismTheme } from "prism-react-renderer";

const codeTheme = {
  plain: {
    color: "#e5e5e5",
  },
  styles: [
    {
      types: ["function", "variable"],
      style: {
        color: "#b8b8b8",
      },
    },
    {
      types: ["comment"],
      style: {
        color: "#d8d8d8",
      },
    },
    {
      types: ["string", "number", "builtin", "variable", "boolean"],
      style: {
        color: "#077BFF",
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

export const CodeBlock = ({ code, language }) => {
  return (
    <Highlight
      {...defaultProps}
      code={code}
      language={language}
      theme={codeTheme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={tw(className)} style={style}>
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
        </pre>
      )}
    </Highlight>
  );
};
