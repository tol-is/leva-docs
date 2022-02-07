import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
  body: {
    margin: 0,
    backgroundColor: "$grey90",
    color: "$loContrast",
    fontSize: "initial",
    fontFamily: "$averta",
    fontWeight: 400,
    fontStyle: "normal",
    fontKerning: "normal",
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    textRendering: "optimizeLegibility",
    fontFeatureSettings: "salt",
  },
});
