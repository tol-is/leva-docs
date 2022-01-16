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
    <div
      data-mdx="pre-container"
      className="flex flex-col sm:flex-row bg-grey-80 rounded p-5"
    >
      <div
        data-mdx="pre-side-leva"
        className="order-1 sm:order-2 w-full flex items-center"
      >
        <LevaPanel store={store} fill titleBar={false} />
      </div>
      <div className="order-2 sm:order-1 flex-1 mt-6 sm:mt-0 sm:pr-5">
        <CodeBlock code={code} language={language} />
      </div>
    </div>
  );
};
