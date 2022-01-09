import { css, Configuration } from "twind/css";

export const twindConfig: Configuration = {
  mode: "silent",
  preflight: (preflight) => {
    return css`
      ${preflight}

      html, body {
        font-kerning: normal;
        text-rendering: auto;
      }

      body {
        overflow-x: hidden;
        @apply font-body bg-black text-white text-base;
      }

      :focus {
        outline: 1px solid #e5e5e5;
        outline-offset: 0px;
      }
    `;
  },
  theme: {
    screens: {
      xs: "375px",
      sm: "540px",
      md: "960px",
      lg: "128px",
      xl: "1600px",
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      bold: "700",
    },
    fontFamily: {
      body: [
        "Commissioner",
        "Averta",
        "JetBrainsMono",
        "-apple-system",
        "system-ui",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "sans-serif",
      ],
      mono: ["ui-monospace", "monospace"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      inherit: "inherit",
      white: "#dddce5",
      black: "#0a0a0a",

      grey: {
        10: "#dddce5",
        40: "#686868",
        60: "#4b4b4b",
        80: "#1b1b1b",
        100: "#0a0a0a",
      },
    },
    fontSize: {
      xxs: [
        "10px",
        {
          lineHeight: `${12 / 10}`,
        },
      ],
      xs: [
        "11px",
        {
          lineHeight: `${16 / 11}`,
        },
      ],
      sm: [
        "12px",
        {
          lineHeight: `${20 / 14}`,
        },
      ],
      base: [
        "18px",
        {
          lineHeight: `${28 / 18}`,
        },
      ],
      lg: [
        "18px",
        {
          lineHeight: `${28 / 18}`,
        },
      ],
      xl: [
        "20px",
        {
          lineHeight: `${28 / 20}`,
        },
      ],
      "2xl": [
        "24px",
        {
          lineHeight: `${32 / 24}`,
        },
      ],
      "3xl": [
        "28px",
        {
          lineHeight: `${32 / 24}`,
        },
      ],
      "4xl": [
        "32px",
        {
          lineHeight: `${36 / 32}`,
        },
      ],
      "5xl": [
        "40px",
        {
          lineHeight: `${36 / 32}`,
        },
      ],
      "6xl": [
        "48px",
        {
          lineHeight: `1`,
        },
      ],
      "7xl": [
        "60px",
        {
          lineHeight: `1`,
        },
      ],
      "8xl": [
        "72px",
        {
          lineHeight: `1`,
        },
      ],
      "9xl": [
        "96px",
        {
          lineHeight: `1`,
        },
      ],
      "10xl": [
        "112px",
        {
          lineHeight: `1`,
        },
      ],
    },
  },
  plugins: {},
};

export default twindConfig;
