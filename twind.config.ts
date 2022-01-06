import { css, Configuration } from "twind/css";

export const twindConfig: Configuration = {
  mode: "silent",
  preflight: (preflight) => {
    return css`
      ${preflight}
    `;
  },
};

export default twindConfig;
