import { styled } from "@styles/stitches.config";

const LoadingText = styled("span", {
  position: "fixed",
  top: "50%",
  left: "50%",
  fontFamily: "$mono",
  fontSize: "$1",
  color: "$hiContrast",
  transform: "translateX(-50%) translateY(-50%)",
});

export const Loading = () => <LoadingText>Loading</LoadingText>;
