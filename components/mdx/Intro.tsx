import React from "react";
import Demo from "../../demos/busy";

export const Intro = ({ title, description, children }) => {
  return (
    <header data-mdx="intro" className="max-w-7xl">
      <h1 className="mb-4">{title}</h1>
      <p className="text-xl">{description}</p>
      <Demo />
    </header>
  );
};
