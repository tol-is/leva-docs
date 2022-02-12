import React from "react";

import { H1, Large } from "@components/Text";
import { Box } from "./UI";
import { slugify } from "@lib/slug";

export const Intro = ({ title, description, ...rest }) => {
  const id = slugify(title);

  return (
    <Box as="header" {...rest}>
      <H1 id={id}>{title}</H1>
      <Large css={{ marginTop: "$3" }} prose>
        {description}
      </Large>
    </Box>
  );
};
