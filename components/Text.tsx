import NextLink from "next/link";
import { Link2Icon, SpaceBetweenVerticallyIcon } from "@modulz/radix-icons";
import { styled } from "@styles/stitches.config";
import { Box } from "./UI";
import { IconButton } from "./Actions";

export const Span = styled("span", {
  variants: {
    bold: { true: { fontWeight: 700 } },
    prose: {
      true: { maxWidth: "$prose" },
    },
    size: {
      0: { fontSize: "$0", lineHeight: 12 / 10 },
      1: { fontSize: "$1", lineHeight: 20 / 14 },
      2: { fontSize: "$2", lineHeight: 20 / 14 },
      3: { fontSize: "$3", lineHeight: 24 / 16 },
      4: { fontSize: "$4", lineHeight: 28 / 18 },
      5: { fontSize: "$5", lineHeight: 28 / 20 },
      6: { fontSize: "$6", lineHeight: 32 / 24 },
      7: { fontSize: "$7", lineHeight: 32 / 24 },
      8: { fontSize: "$8", lineHeight: 36 / 32 },
      9: { fontSize: "$9", lineHeight: 40 / 32 },
      10: { fontSize: "$10", lineHeight: 54 / 46 },
      11: { fontSize: "$11", lineHeight: 64 / 64 },
    },
  },
});

type SpanProps = Parameters<typeof Span>[0];
type HeadingProps = SpanProps & { as?: string };

export const Heading = (props: HeadingProps) => {
  const { id, children, ...rest } = props;

  return (
    <Span {...rest}>
      <Box
        css={{
          position: "relative",
          display: "inline-flex",
          alignItems: "baseline",

          "& > a.heading_anchor": {
            opacity: 0,
            "&:hover": {
              opacity: 1,
            },
            "&:focus": {
              opacity: 1,
            },
          },
          "&:hover": {
            "& > a.heading_anchor": {
              opacity: 1,
            },
          },
        }}
      >
        <span id={`heading_${id}`}>{children}</span>
        {id ? (
          <>
            <NextLink href={`#${id}`} passHref>
              <IconButton
                as="a"
                className="heading_anchor"
                aria-labelledby={`heading_${id}`}
              >
                <Link2Icon />
              </IconButton>
            </NextLink>
            <Box
              id={id}
              css={{ display: "block", position: "relative", top: "-230px" }}
            />
          </>
        ) : null}
      </Box>
    </Span>
  );
};

export const Display1 = (props: HeadingProps) => (
  <Heading as="h1" size={{ "@initial": 7, "@sm": 8, "@lg": 10 }} {...props} />
);

export const DisplayMono = styled("h2", {
  fontSize: "$1",
  fontFamily: "$mono",
  color: "$uloContrast",
  textTransform: "uppercase",
  fontWeight: 400,
  variants: {
    accent: { true: { color: "$accent" } },
  },
});

export const H1 = (props: HeadingProps) => (
  <Heading as="h1" size={{ "@initial": 9, "@sm": 10 }} {...props} />
);

export const H2 = (props: HeadingProps) => (
  <Heading as="h2" size={{ "@initial": 7, "@sm": 8 }} {...props} />
);

export const H3 = (props: HeadingProps) => (
  <Heading as="h3" size={{ "@initial": 6, "@sm": 7 }} {...props} />
);

export const H4 = (props: HeadingProps) => (
  <Heading as="h4" size={{ "@initial": 5, "@sm": 6 }} {...props} />
);

export const H5 = (props: HeadingProps) => (
  <Heading as="h5" size={{ "@initial": 4, "@sm": 5 }} {...props} />
);

export const Paragraph = (props: HeadingProps) => (
  <Span as="p" size={{ "@initial": 3, "@sm": 4 }} {...props} />
);

export const Large = (props: HeadingProps) => (
  <Span as="p" size={{ "@initial": 5, "@sm": 6 }} {...props} />
);

export const Code = styled("code", {
  fontFamily: "$mono",
  color: "$accent",
  fontSize: "0.92em",
  background: "$grey100",
  padding: "$px $semi",
});
