import React from "react";

import { styled } from "@styles/stitches.config";

export const Box = styled("div");

export const Container = styled("div", {
  margin: "$0 auto",
  padding: "$0 $4",
  "@md": {
    padding: "$0 $6",
  },
  variants: {
    size: {
      home: {
        maxWidth: "80rem",
      },
      doc: {
        maxWidth: "60rem",
        background: "rgba(0,0,0,1)",
      },
    },
  },
});

export const WrapperPageDoc = styled("div", {
  margin: "$0",
  padding: "$0",
  // maxWidth: "1600px",
  "@md": {
    paddingLeft: "$sidenav",
  },
});

export const Article = ({ children }) => {
  return <article>{children}</article>;
};

export const Main = styled("main", {
  paddingTop: "$12",
  paddingBottom: "$12",

  "@md": {
    paddingTop: "$13",
    paddingBottom: "$13",
  },
});

export const Flex = styled("div", {
  display: "flex",
  variants: {
    direction: {
      column: {
        flexDirection: "column",
      },
      row: {
        flexDirection: "row",
      },
    },
  },
});

export const Grid = styled("div", {
  variants: {
    columns: {
      1: {
        gridTemplateColumns:
          "grid-template-columns: repeat(1, minmax(0px, 1fr));",
      },
      2: {
        gridTemplateColumns:
          "grid-template-columns: repeat(2, minmax(0px, 1fr));",
      },
      3: {
        gridTemplateColumns:
          "grid-template-columns: repeat(3, minmax(0px, 1fr));",
      },
      4: {
        gridTemplateColumns:
          "grid-template-columns: repeat(4, minmax(0px, 1fr));",
      },
      5: {
        gridTemplateColumns:
          "grid-template-columns: repeat(5, minmax(0px, 1fr));",
      },
      6: {
        gridTemplateColumns:
          "grid-template-columns: repeat(6, minmax(0px, 1fr));",
      },
    },
  },
});

export const IconButton = styled("button", {
  background: "transparent",
  border: "none",
  color: "$hiContrast",
  padding: "$1 $2",
});

export const PrimaryCta = styled("a", {
  display: "flex",
  alignItems: "center",
  background: "$accent",
  color: "$hiContrast",
  padding: "$0 $5",
  height: "$7",
  border: "$0",
  fontFamily: "$mono",
  fontSize: "$2",
  lineHeight: 1,
  textDecoration: "none",
  "&:hover": {
    background: "$grey100",
  },
});
