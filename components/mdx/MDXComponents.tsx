import * as React from "react";

import { Pre } from "./Pre";
import { H1, H2, H3, H4, H5, Paragraph, Code } from "@components/Text";
import { Anchor } from "@components/Actions";
import { Table, Tr, Th, Td, Thead } from "@components/Table";
import { styled } from "@styles/stitches.config";
import { DocIntro } from "@components/mdx/DocIntro";

const MDXAnchor = styled("a", {
  color: "$loContrast",
  fontWeight: 700,
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
    color: "$hiContrast",
  },
  "&:focus": {
    outline: "1px solid $loContrast",
    outlineOffset: "3px",
  },
});

export const MDXComponents = {
  pre: Pre,
  h1: (props) => <DocIntro {...props} prose />,
  h2: (props) => <H2 {...props} prose />,
  h3: (props) => <H3 {...props} prose />,
  h4: (props) => <H4 {...props} prose />,
  h5: (props) => <H5 {...props} prose />,
  p: (props) => <Paragraph {...props} prose />,
  code: Code,
  a: MDXAnchor,
  li: (props) => <Paragraph as="li" {...props} />,
  table: Table,
  thead: Thead,
  tr: Tr,
  th: Th,
  td: Td,
};
