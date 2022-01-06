import { useMemo } from "react";
import { getMDXComponent } from "mdx-bundler/client";

export const markdownComponents = {
  container: (props) => <div id="container" {...props} />,
};

export const MDXRenderer: React.FC<{ code: string }> = ({ code }) => {
  const Component = useMemo(
    () =>
      getMDXComponent(code, {
        // myTwind: { tw },
      }),
    [code]
  );

  return (
    <div>
      <Component components={markdownComponents as any} />
    </div>
  );
};
