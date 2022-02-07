import React from "react";

import { H1, Large } from "@components/Text";
import { Box } from "./UI";

export const Intro = ({ title, description, ...rest }) => {
  return (
    <Box as="header" {...rest}>
      <H1 id="#">{title}</H1>
      <Large css={{ marginTop: "$3" }}>{description}</Large>
    </Box>
  );
};
