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

import { MDXProse } from "./MDXProse";

import { MDXComponents } from "./MDXComponents";

export const MDXRenderer: React.FC<{ code: string }> = ({ code }) => {
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

  return (
    <MDXProse>
      <Component components={MDXComponents as any} />
    </MDXProse>
  );
};
