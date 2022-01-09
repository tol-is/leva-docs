import { useState } from "react";
import Link from "next/link";
import { tw } from "twind";

import map from "@lib/doc-routes.json";

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
};

const SidenavLink = ({ heading, level, parentSlug }) => {
  const [hover, setHover] = useState(false);
  const onOver = () => {
    setHover(true);
  };

  const onOut = () => {
    setHover(false);
  };
  return (
    <Link href={`${parentSlug}/`}>
      <a
        className="ml-4 relative py-2 flex items-center my-px px-2 flex items-center justify-start group hover:(z-10)"
        onMouseOver={onOver}
        onMouseOut={onOut}
      >
        {/* <span
          className={tw(
            "group-hover:(w-full)",
            "absolute inline-block w-1 h-full bg-white mr-2",
            level == 1 && "w-0",
            level == 2 && "w-1",
            level == 3 && "w-1",
            level == 4 && "w-1"
          )}
        /> */}

        <span
          aria-hidden
          className={tw(
            "block mt-0.5",
            // hover ? "text-black" : "text-white",
            "relative z-10 font-mono text-sm"
          )}
        >
          {heading}
        </span>
      </a>
    </Link>
  );
};

export const Sidenav = () => {
  const sidenav = map as unknown as TDoc[];
  console.log(sidenav);
  return (
    <div className="fixed left-0 w-60 h-full overflow-scroll ">
      <div className="flex flex-col justify-center items-start min-h-full space-y-5 my-14">
        {sidenav.map((doc) => (
          <div className="flex flex-col items-start">
            {doc.toc.map((section) => (
              <SidenavLink {...section} parentSlug={doc.slug} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
