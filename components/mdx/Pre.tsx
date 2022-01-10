import React from "react";

import { CodeBlock } from "./CodeBlock";
import { getDemo } from "../MDXDemo";

export const Pre = ({ children, demo }) => {
  const code = children.props.children.trim();
  const language = children.props.className.split("-")[1] || "jsx";

  return (
    <div className="flex flex-row grey-80 bg-[#181c20]">
      <div className="w-full max-w-prose border-r-1">
        <CodeBlock code={code} language={language} />
      </div>
      <div className="px-1 py-1 flex-0 min-w-[18rem]">
        {demo && <>{getDemo(demo)}</>}
      </div>
    </div>
  );
};
