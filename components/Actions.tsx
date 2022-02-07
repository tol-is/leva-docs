import NextLink from "next/link";

import { styled } from "@styles/stitches.config";

export const IconButton = styled("button", {
  background: "transparent",
  border: "none",
  color: "$loContrast",
  marginLeft: "$2",
  padding: "$1",
  width: "$5",
  height: "$5",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  lineHeight: "1",
  "&:hover": {
    opacity: 1,
    color: "$hiContrast",
  },
  "&:focus": {
    opacity: 1,
    color: "$hiContrast",
    outline: "1px solid $loContrast",
    outlineOffset: "1px",
  },
});

export const PrimaryCta = styled("a", {
  display: "flex",
  alignItems: "center",
  background: "$accent",
  color: "$hiContrast",
  padding: "$0 $5",
  height: "$7",
  border: "$0",
  fontFamily: "$mono",
  fontSize: "$2",
  lineHeight: 1,
  textDecoration: "none",
  "&:hover": {
    background: "$grey10",
    color: "$grey100",
  },
  "&:focus": {
    outline: "1px solid $loContrast",
    outlineOffset: "3px",
  },
});

const StyledTextLink = styled("a", {
  color: "$loContrast",
  fontWeight: 700,
  textDecoration: "none",
  "&:hover": {
    color: "$hiContrast",
  },
  "&:focus": {
    outline: "1px solid $loContrast",
    outlineOffset: "3px",
  },
  variants: {
    bold: {
      false: {
        fontWeight: 400,
      },
    },
  },
});

type StyledTextLinkProps = Parameters<typeof StyledTextLink>[0];
type AnchorProps = StyledTextLinkProps & { as?: string };

export const Anchor = ({ href, children, ...rest }: AnchorProps) => {
  const external = href.includes("http");

  return external ? (
    <StyledTextLink rel="noopener noreferrer" href={href} {...rest}>
      {children}
    </StyledTextLink>
  ) : (
    <NextLink href={href} passHref>
      <StyledTextLink {...rest}>{children}</StyledTextLink>
    </NextLink>
  );
};
