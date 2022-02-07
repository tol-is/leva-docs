import React, { useState } from "react";
import NextLink from "next/link";
import * as ScrollArea from "@radix-ui/react-scroll-area";

import map from "@lib/doc-routes.json";

import { styled } from "@styles/stitches.config";
import { Box, Flex } from "./UI";

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
  background: "$grey80",
  "@lg": {
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
  padding: "$11 $4 $11 $4",
  "@sm": {
    padding: "$11 $6 $11 $6",
  },
});

const StyledNavLink = styled("a", {
  fontFamily: "$mono",
  fontSize: "$2",
  color: "$loContrast",
  textDecoration: "none",
  padding: "$1 0",
  display: "block",
  "&:hover": {
    color: "$hiContrast",
    textDecoration: "underline",
  },

  variants: {
    level: {
      1: {
        fontWeight: 700,
      },
    },
  },
});

const SidenavLink = ({ heading, id, level, parentSlug }) => {
  const href = id ? `${parentSlug}/#${id}` : `${parentSlug}`;

  return (
    <NextLink href={href} passHref>
      <StyledNavLink level={level}>{heading}</StyledNavLink>
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
            <Box
              css={{
                "ul + ul": {
                  marginTop: "$6",
                },
              }}
            >
              {sidenav.map((doc) => (
                <Flex direction="column" as="ul">
                  {doc.toc.map((section) => (
                    <li key={`${doc.slug}-${section.id}`}>
                      <SidenavLink {...section} parentSlug={doc.slug} />
                    </li>
                  ))}
                </Flex>
              ))}
            </Box>
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
