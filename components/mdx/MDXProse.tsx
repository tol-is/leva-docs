import { styled } from "@styles/stitches.config";

export const MDXProse = styled("div", {
  color: "$loContrast",
  "& h1, h2, h3, h4, h5": {
    color: "$hiContrast",
  },

  "> ol, > ul": {
    listStyle: "list",
    listStylePosition: "inside",
  },

  "> h2": {
    marginTop: "$8",
    marginBottom: "$3",
    "@sm": {
      marginTop: "$10",
      marginBottom: "$3",
    },
  },

  "> h3": {
    marginTop: "$8",
    marginBottom: "$3",
    "@sm": {
      marginTop: "$10",
      marginBottom: "$3",
    },
  },

  "> h2 + h3": {
    marginTop: "$4",
    marginBottom: "$3",
  },

  "> h4": {
    marginTop: "$6",
    marginBottom: "$3",
    "@sm": {
      marginTop: "$8",
      marginBottom: "$3",
    },
  },

  "> h2 + h4": {
    marginTop: "$4",
    marginBottom: "$3",
    "@sm": {
      marginTop: "$4",
      marginBottom: "$3",
    },
  },

  "> h3 + h4": {
    marginTop: "$4",
    marginBottom: "$3",
    "@sm": {
      marginTop: "$4",
      marginBottom: "$3",
    },
  },

  "> h5": {
    marginTop: "$4",
    marginBottom: "$1",
  },

  "> p, > ul, > ol": {
    marginTop: "$0",
    marginBottom: "$5",
    "@sm": {
      marginTop: "$0",
      marginBottom: "$5",
    },
  },

  "& p > code, & li > code": {
    margin: "$0 $semi",
  },

  "> ul > li, > ol > li": {
    marginTop: "$0",
    marginBottom: "$1",
    "@sm": {
      marginTop: "$0",
      marginBottom: "$1",
    },
  },

  '> [data-mdx="pre-container"]': {
    marginTop: "$5",
    marginBottom: "$6",
    "@sm": {
      marginTop: "$5",
      marginBottom: "$6",
    },
  },

  "> table": {
    marginTop: "$4",
    marginBottom: "$5",
    "@sm": {
      marginTop: "$4",
      marginBottom: "$5",
    },
  },

  "& > :first-child": {
    marginTop: "0 !important",
  },
  "& > :last-child": {
    marginBottom: "0 !important",
  },
});
