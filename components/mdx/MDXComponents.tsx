import * as React from "react";

import { Pre } from "./Pre";
import { H1, H2, H3, H4, H5, Paragraph, Code } from "@components/Text";
import { Anchor } from "@components/Actions";
import { Table, Tr, Th, Td, Thead } from "@components/Table";

export const MDXComponents = {
  pre: Pre,
  h1: (props) => <H1 {...props} prose />,
  h2: (props) => <H2 {...props} prose />,
  h3: (props) => <H3 {...props} prose />,
  h4: (props) => <H4 {...props} prose />,
  h5: (props) => <H5 {...props} prose />,
  p: (props) => <Paragraph {...props} prose />,
  code: Code,
  a: Anchor,
  li: (props) => <Paragraph as="li" {...props} />,
  table: Table,
  thead: Thead,
  tr: Tr,
  th: Th,
  td: Td,
};
