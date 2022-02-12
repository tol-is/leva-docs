import React from "react";

import { H1, Large } from "@components/Text";
import { Box } from "../UI";
import { useFrontMattter } from "./MDXContext";

export const DocIntro = ({ children, description }) => {
  const frontmatter = useFrontMattter();

  return (
    <Box as="header">
      <H1 id={frontmatter.toc[0].id}>{frontmatter.toc[0].heading}</H1>
      {frontmatter.description ? (
        <Large css={{ marginTop: "$3" }} prose>
          {frontmatter.description}
        </Large>
      ) : null}
    </Box>
  );
};

// <Box
//                 css={{
//                   marginTop: "$8",
//                   "@sm": {
//                     marginTop: "$11",
//                   },
//                 }}
//               ></Box>
