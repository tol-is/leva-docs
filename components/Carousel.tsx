import React from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";

import { styled } from "@styles/stitches.config";

const ScrollRoot = styled(ScrollArea.Root, {});

const ScrollViewport = styled(ScrollArea.Viewport, {});

export const Carousel = ({ children }) => {
  return (
    <ScrollRoot>
      <ScrollViewport>{children}</ScrollViewport>
      <ScrollArea.Scrollbar orientation="horizontal">
        <ScrollArea.Thumb />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner />
    </ScrollRoot>
  );
};
