import React from "react";
import { LevaPanel, useControls, useCreateStore } from "leva";

import { CodeBlock } from "./CodeBlock";

export const Pre = ({ children, demo }) => {
  const code = children.props.children.trim();
  const language = children.props.className.split("-")[1] || "jsx";

  const store = useCreateStore();
  useControls(
    {
      myNumber: 4,
      myFooColor: "#fff",
      vec3: {
        x: 0,
        y: 2,
        z: 1.5,
      },
    },
    { store: store }
  );

  return (
    <div data-mdx="pre" className="flex bg-grey-80 p-5 rounded-sm">
      <div className="flex-1">
        <CodeBlock code={code} language={language} />
      </div>
      <div className="w-72 flex items-center">
        <LevaPanel store={store} fill titleBar={false} />
      </div>
    </div>
  );
};
