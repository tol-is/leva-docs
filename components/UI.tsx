import React from "react";

import { styled } from "@styles/stitches.config";

export const Box = styled("div");

export const Container = styled("div", {
  margin: "$0 auto",
  padding: "$0 $3",
  "@sm": {
    padding: "$0 $4",
  },
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
      },
    },
  },
});

export const WrapperPageDoc = styled("div", {
  margin: "$0",
  padding: "$11 $0",
  // maxWidth: "1600px",
  "@lg": {
    paddingLeft: "$sidenav",
  },
  "@xl": {
    paddingRight: "calc($sidenav / 2)",
  },
});

export const Main = styled("main", { flex: 1 });

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
  display: "grid",
  variants: {
    columns: {
      1: {
        gridTemplateColumns: "repeat(1, minmax(0px, 1fr))",
      },
      2: {
        gridTemplateColumns: "repeat(2, minmax(0px, 1fr))",
      },
      3: {
        gridTemplateColumns: "repeat(3, minmax(0px, 1fr))",
      },
      4: {
        gridTemplateColumns: "repeat(4, minmax(0px, 1fr))",
      },
      5: {
        gridTemplateColumns: "repeat(5, minmax(0px, 1fr))",
      },
      6: {
        gridTemplateColumns: "repeat(6, minmax(0px, 1fr))",
      },
    },
  },
});
