import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";

import {
  useControls,
  useCreateStore,
  useStoreContext,
  Leva,
  LevaPanel,
  LevaStoreProvider,
  folder,
  button,
  monitor,
} from "leva";

import { TDocFrontMatter } from "@lib/sitemap";
import { MDXProse } from "./MDXProse";
import { MDXComponents } from "./MDXComponents";
import { MDXContext } from "./MDXContext";

export const MDXRenderer: React.FC<{
  code: string;
  frontmatter: TDocFrontMatter;
}> = ({ code, frontmatter }) => {
  const Component = useMemo(
    () =>
      getMDXComponent(code, {
        globalLeva: {
          useControls,
          useCreateStore,
          useStoreContext,
          Leva,
          LevaPanel,
          LevaStoreProvider,
          folder,
          button,
          monitor,
        },
      }),
    [code]
  );

  const providerValue = useMemo(() => {
    return frontmatter;
  }, [frontmatter]);

  return (
    <MDXProse>
      <MDXContext.Provider value={providerValue}>
        <Component components={MDXComponents as any} />
      </MDXContext.Provider>
    </MDXProse>
  );
};
