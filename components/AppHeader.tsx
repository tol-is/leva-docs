import { useState } from "react";
import Link from "next/link";
import { tw } from "twind";

export const AppHeader = () => {
  return (
    <div className="fixed left-0 top-0 h-10 px-6 flex items-center bg-grey-100 w-full">
      <Link href="/">
        <a>Leva</a>
      </Link>
    </div>
  );
};
