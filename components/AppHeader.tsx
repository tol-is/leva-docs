import React from "react";

import Link from "next/link";

import { styled } from "@styles/stitches.config";

const LevaLogo = styled("a", {
  color: "$accent",
});

export const AppHeader = () => {
  return (
    <div className="fixed left-0 top-0 h-10 px-6 flex items-center bg-grey-100 w-full">
      <Link href="/">
        <LevaLogo>
          <svg
            width="52"
            height="15"
            viewBox="0 0 52 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M0.424805 15H10.5748V11.55H4.2998V0.450012H0.424805V15Z"
            />
            <path
              fill="currentColor"
              d="M12.4359 15H23.2109V11.55H16.2859V9.42501H21.3859V6.30001H16.2859V3.90001H22.7359V0.450012H12.4359V15Z"
            />
            <path
              fill="currentColor"
              d="M29.3359 15H32.7359L38.3359 0.450012H34.1609L31.0609 9.55001H31.0109L27.9359 0.450012H23.7109L29.3359 15Z"
            />
            <path
              fill="currentColor"
              d="M36.8678 15H40.8928L41.6928 12.675H46.9178L47.7178 15H51.7678L46.1428 0.450012H42.4678L36.8678 15ZM42.7178 9.52501L44.2678 4.90001H44.3178L45.8678 9.52501H42.7178Z"
            />
          </svg>
        </LevaLogo>
      </Link>
    </div>
  );
};
