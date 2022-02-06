import { styled } from "@styles/stitches.config";

export const Span = styled("span", {
  variants: {
    bold: { true: { fontWeight: 700 } },
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
