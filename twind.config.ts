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
        @apply font-body bg-grey-100 text-white text-base;
      }

      :focus {
        outline: none;
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
        "iA Writer Quatro",
        "-apple-system",
        "system-ui",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "sans-serif",
      ],
      mono: ["iA Writer Mono", "ui-monospace", "monospace"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      inherit: "inherit",
      white: "#FEFEFE",
      black: "#111316",

      grey: {
        10: "#FEFEFE",
        20: "#dddce5",
        40: "#686868",
        60: "#373c4b",
        80: "#1e222c",
        100: "#181c20",
      },
      accent: "#077BFF",
    },
    fontSize: {
      xxs: [
        "10px",
        {
          lineHeight: `${12 / 10}`,
        },
      ],
      xs: [
        "12px",
        {
          lineHeight: `${20 / 14}`,
        },
      ],
      sm: [
        "14px",
        {
          lineHeight: `${20 / 14}`,
        },
      ],
      base: [
        "17px",
        {
          lineHeight: `${27 / 17}`,
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
    },
  },
  plugins: {},
};

export default twindConfig;
