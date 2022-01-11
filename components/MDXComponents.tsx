import * as React from "react";
import NextLink from "next/link";
import { Pre } from "./mdx/Pre";
import { Intro } from "./mdx/Intro";
import { tw } from "twind";
import { css } from "twind/css";

const Heading =
  (TAG = "h2") =>
  ({ id, children, props }) => {
    const className = css`
      display: block;
      position: relative;
      top: -100px;
      content: "";
    `;

    return (
      <TAG {...props} className="relative">
        {children}
        <div id={id} className={tw(className)} />
      </TAG>
    );
  };

export const MDXComponents = {
  pre: Pre,
  Intro: Intro,
  h1: Heading("h1"),
  h2: Heading("h2"),
  h3: Heading("h3"),
  h4: Heading("h4"),
  h5: Heading("h5"),
};
