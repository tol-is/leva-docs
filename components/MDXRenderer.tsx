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

export const markdownComponents = {
  container: (props) => <div id="container" {...props} />,
};

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
    <div>
      <Component components={markdownComponents as any} />
    </div>
  );
};
