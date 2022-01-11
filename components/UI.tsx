import React from "react";

import Link from "next/link";

export const AppHeader = () => {
  return (
    <div className="fixed left-0 top-0 h-10 px-6 flex items-center bg-grey-100 w-full">
      <Link href="/">
        <a>Leva</a>
      </Link>
    </div>
  );
};

export const Article = ({ children }) => {
  return <article className="pt-20 pb-12">{children}</article>;
};

export const Container = ({ children }) => {
  return (
    <div className="ml-[3vw] md:ml-[10vw] mr-auto pl-[10rem] pr-4">
      {children}
    </div>
  );
};
