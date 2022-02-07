import React from "react";

import { H1, Large } from "@components/Text";
import { Box } from "./UI";

export const Intro = ({ title, description, ...rest }) => {
  const id = title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replaceAll("_", "-")
    .replaceAll("--", "-")
    .slice(0, 200);
  return (
    <Box as="header" {...rest}>
      <H1 id={id}>{title}</H1>
      <Large css={{ marginTop: "$3" }} prose>
        {description}
      </Large>
    </Box>
  );
};
