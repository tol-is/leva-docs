import React from "react";

export const Intro = ({ title, description, children }) => {
  return (
    <header className="max-w-7xl">
      <h1 className="mb-4">{title}</h1>
      <p className="text-xl">{description}</p>
      <div className="pt-[45%] bg-white"></div>
    </header>
  );
};
