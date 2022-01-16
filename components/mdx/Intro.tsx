import React from "react";
import Demo from "../../demos/busy";

export const Intro = ({ title, description, children }) => {
  return (
    <header data-mdx="intro" className="relative max-w-7xl md:h-[560px]">
      <div className="md:absolute  h-full flex items-center">
        <div>
          <h1 className="mb-4">{title}</h1>
          <p className="text-xl max-w-sm text-grey-20">{description}</p>
        </div>
      </div>
      <div className="hidden md:block">
        <Demo />
      </div>
    </header>
  );
};
