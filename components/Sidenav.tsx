import React, { useState } from "react";
import Link from "next/link";
import { tw } from "twind";
import { slugify } from "@lib/slug";

import map from "@lib/doc-routes.json";

import * as ScrollArea from "@radix-ui/react-scroll-area";

type TDoc = {
  title: string;
  level: number;
  doc: string;
  description: string;
  slug: string;
  toc: TDocSection[];
};

type TDocSection = {
  heading: string;
  level: number;
  id: string;
};

const SidenavLink = ({ heading, id, parentSlug }) => {
  const [hover, setHover] = useState(false);
  const onOver = () => {
    setHover(true);
  };

  const onOut = () => {
    setHover(false);
  };
  const href = id ? `${parentSlug}/#${id}` : `${parentSlug}`;

  return (
    <Link href={href}>
      <a
        className="relative py-0.5 my-px flex items-center  justify-start group border-b-1 border-transparent focus:(border-white) hover:(border-b-1 border-white)"
        onMouseOver={onOver}
        onMouseOut={onOut}
      >
        <span className={tw("block mt-0.5", "relative z-10 text-sm")}>
          {heading}
        </span>
      </a>
    </Link>
  );
};

export const Sidenav = () => {
  const sidenav = map as unknown as TDoc[];
  return (
    <div className="hidden md:block fixed z-10 left-0 top-10 bottom-0 w-48">
      <ScrollArea.Root className="absolute h-full">
        <ScrollArea.Viewport className="absolute h-full">
          <div className="flex flex-col justify-center items-start space-y-5 px-5 py-10">
            {sidenav.map((doc) => (
              <div className="flex flex-col items-start">
                {doc.toc.map((section) => (
                  <SidenavLink {...section} parentSlug={doc.slug} />
                ))}
              </div>
            ))}
          </div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation="horizontal">
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
        <ScrollArea.Scrollbar orientation="vertical">
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner />
      </ScrollArea.Root>
    </div>
  );
};
