import { tw } from "twind";
import { css } from "twind/css";

const rhythm = css`
  h1 {
    @apply text-4xl font-bold;
  }

  h2 {
    @apply text-2xl font-bold;
  }

  h3 {
    @apply text-xl font-bold;
  }

  h4 {
    @apply text-base font-bold;
  }

  h5 {
    @apply text-sm font-bold;
  }

  p,
  li {
    @apply text-base;
  }

  pre {
    @apply text-sm leading-5;
  }

  p,
  ul,
  ol,
  h3,
  h4,
  h5 {
    max-width: 32rem;
  }

  > ol,
  > ul {
    list-style: list;
    list-offset: 0;
  }

  [data-mdx="pre"] {
    max-width: 52rem;
  }

  pre,
  code {
    max-width: 32rem;
    oveflow: hidden;
    white-space: pre-wrap;
    word-break: keep-all;
  }

  hr {
    @apply my-0;
  }

  h2 {
    @apply mt-20 mb-4;
  }

  h3 {
    @apply mt-12 mb-4;
  }

  h2 + h3 {
    @apply mt-4 mb-4;
  }

  h4 {
    @apply mt-4 mb-4;
  }

  h2 + h4 {
    @apply mt-4 mb-4;
  }

  h3 + h4 {
    @apply mt-4 mb-4;
  }

  p,
  ul,
  ol {
    @apply mb-6;
  }

  ul > li,
  ol > li {
    @apply mb-3;
  }

  [data-mdx="pre"] {
    @apply mb-7;
  }

  [data-mdx="intro"] {
    @apply mb-16;
  }

  & > :first-child {
    margin-top: 0 !important;
  }
  & > :last-child {
    margin-bottom: 0 !important;
  }
`;

export const MDXProse = ({ children }) => {
  return <div className={tw(rhythm)}>{children}</div>;
};
