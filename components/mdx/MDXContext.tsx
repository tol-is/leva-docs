import { createContext, useContext } from "react";

import { TDocFrontMatter } from "@lib/sitemap";

export const MDXContext = createContext<TDocFrontMatter | null>(null);

export const useFrontMattter = () => {
  const frontmatter = useContext(MDXContext);
  return frontmatter;
};
