import React from "react";
import { tw } from "twind";
import Highlight, { defaultProps, PrismTheme } from "prism-react-renderer";

const codeTheme = {
  plain: {
    backgroundColor: "#141619",
    color: "#f8f8f8",
    fontSize: "15px",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
      style: {
        color: "#6c6783",
      },
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ["tag", "operator", "number"],
      style: {
        color: "#e09142",
      },
    },
    {
      types: ["property", "function"],
      style: {
        color: "#9a86fd",
      },
    },
    {
      types: ["tag-id", "selector", "atrule-id"],
      style: {
        color: "#eeebff",
      },
    },
    {
      types: ["attr-name"],
      style: {
        color: "#c4b9fe",
      },
    },
    {
      types: [
        "boolean",
        "string",
        "entity",
        "url",
        "attr-value",
        "keyword",
        "control",
        "directive",
        "unit",
        "statement",
        "regex",
        "at-rule",
        "placeholder",
        "variable",
      ],
      style: {
        color: "#ffcc99",
      },
    },
    {
      types: ["deleted"],
      style: {
        textDecorationLine: "line-through",
      },
    },
    {
      types: ["inserted"],
      style: {
        textDecorationLine: "underline",
      },
    },
    {
      types: ["italic"],
      style: {
        fontStyle: "italic",
      },
    },
    {
      types: ["important", "bold"],
      style: {
        fontWeight: "bold",
      },
    },
    {
      types: ["important"],
      style: {
        color: "#c4b9fe",
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
        <pre
          className={tw("pl-4 pr-3 py-2 border-l-2 border-grey-20", className)}
          style={style}
        >
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
