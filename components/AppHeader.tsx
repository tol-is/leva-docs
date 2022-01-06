import React from "react";
import NextJsLink from "next/link";

import { tw } from "twind";

export const AppHeader = () => {
  return (
    <header className={tw("fixed w-full", "h-24 lg:h-20 left-0 z-50")}>
      <div className="px-8 lg:px-10 h-16 lg:h-20 flex items-center">
        <NextJsLink href="/">
          <a className="flex space-x-8 text-white px-1 py-2">Leva</a>
        </NextJsLink>
      </div>
    </header>
  );
};
