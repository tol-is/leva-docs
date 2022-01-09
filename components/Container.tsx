import React from "react";

export const Container = ({ children }) => {
  return (
    <div className="max-w-[45rem] md:max-w-[65rem] ml-[3vw] md:ml-[10vw] mr-auto pl-[10rem] pr-4">
      {children}
    </div>
  );
};
