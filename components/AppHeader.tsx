import React from "react";
import NextJsLink from "next/link";

export const AppHeader = () => {
  return (
    <header>
      <NextJsLink href="/">
        <a>Leva</a>
      </NextJsLink>
    </header>
  );
};
