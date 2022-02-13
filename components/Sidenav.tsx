import React, { useState } from "react";
import NextLink from "next/link";
import * as ScrollArea from "@radix-ui/react-scroll-area";

import { sitemap } from "@lib/sitemap";

import { styled } from "@styles/stitches.config";
import { Box, Flex } from "./UI";

const StyledSidenav = styled("nav", {
  display: "none",
  position: "sticky",
  zIndex: 10,
  right: 0,
  top: "$8",
  bottom: 0,
  width: "$sidenav",
  height: "calc(100vh - $8)",
  borderLeft: "1px solid $grey100",
  boxShadow: "var(--shadow-elevation-medium)",
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
  padding: "$8 $4 $8 $4",
  "@sm": {
    padding: "$8 $6 $8 $6",
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
              {sitemap.docs.map((doc) => (
                <Flex direction="column" as="ul" key={doc.slug}>
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
