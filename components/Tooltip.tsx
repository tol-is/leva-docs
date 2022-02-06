import React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { styled } from "@styles/stitches.config";

type TooltipProps = {
  children: React.ReactNode;
  content: string | React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: Function;
};

export const Content = styled(TooltipPrimitive.Content, {
  background: "$grey10",
  color: "$grey100",
  padding: "$2 $2 $1 $2",
  border: "$0",
  fontFamily: "$mono",
  fontSize: "$0",
  lineHeight: 1,
  textTransform: "uppercase",
});

export function Tooltip(props) {
  const { children, content, open, defaultOpen, onOpenChange, ...rest } = props;
  return (
    <TooltipPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
    >
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <Content side="top" align="center" {...rest}>
        {content}
      </Content>
    </TooltipPrimitive.Root>
  );
}
