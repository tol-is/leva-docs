import React, { useState } from "react";
import NextLink from "next/link";
import * as ScrollArea from "@radix-ui/react-scroll-area";

import map from "@lib/doc-routes.json";

import { styled } from "@styles/stitches.config";
import { Span } from "./Text";
import { Box } from "./UI";

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

const StyledSidenav = styled("nav", {
  display: "none",
  position: "fixed",
  zIndex: 10,
  left: 0,
  top: 0,
  bottom: 0,
  width: "$sidenav",
  "@sm": {
    display: "block",
  },
});

const ScrollRoot = styled(ScrollArea.Root, {
  position: "absolute",
  height: "100%",
});

const ScrollViewport = styled(ScrollArea.Viewport, {
  position: "absolute",
  height: "100%",
});

const NavRoot = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",

  padding: "$12 $4 $12 $4",
  "@sm": {
    padding: "$12 $6 $12 $6",
  },
  "@md": {
    paddingTop: "$13",
    paddingBottom: "$13",
  },
});

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
    <NextLink href={href} passHref>
      <a onMouseOver={onOver} onMouseOut={onOut}>
        <Span size={2} css={{ display: "block" }}>
          {heading}
        </Span>
      </a>
    </NextLink>
  );
};

export const Sidenav = () => {
  const sidenav = map as unknown as TDoc[];
  return (
    <StyledSidenav>
      <ScrollRoot>
        <ScrollViewport>
          <NavRoot>
            {sidenav.map((doc) => (
              <Box>
                {doc.toc.map((section) => (
                  <SidenavLink {...section} parentSlug={doc.slug} />
                ))}
              </Box>
            ))}
          </NavRoot>
        </ScrollViewport>
        <ScrollArea.Scrollbar orientation="vertical">
          <ScrollArea.Thumb />
        </ScrollArea.Scrollbar>
        <ScrollArea.Corner />
      </ScrollRoot>
    </StyledSidenav>
  );
};
