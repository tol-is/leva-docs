import React from "react";

import { CodeBlock } from "./CodeBlock";
import { getDemo } from "../MDXDemo";

export const Pre = ({ children, demo }) => {
  const code = children.props.children.trim();
  const language = children.props.className.split("-")[1] || "jsx";

  return (
    <div className="flex flex-row grey-80 bg-[#141619]">
      <div className="w-full max-w-prose">
        <CodeBlock code={code} language={language} />
      </div>
      <div className="p-5 flex-0 min-w-40">{demo && <>{getDemo(demo)}</>}</div>
    </div>
  );
};
