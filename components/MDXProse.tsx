import { tw } from "twind";
import { css } from "twind/css";

const rhythm = css`
  h1,
  h2,
  h3,
  h4,
  h5 {
    @apply text-grey-30;
  }
  p,
  ul {
    @apply text-grey-30;
  }

  h1 {
    @apply text-6xl font-normal;
  }

  h2 {
    @apply text-4xl font-normal;
  }

  h3 {
    @apply text-2xl font-normal;
  }

  h4 {
    @apply text-xl font-bold;
  }

  h5 {
    @apply text-lg font-bold;
  }

  p,
  li {
    @apply text-lg;
  }

  pre {
    @apply text-sm leading-5;
  }

  > p,
  > ul,
  > ol,
  > h3,
  > h4,
  > h5 {
    max-width: 40rem;
  }

  > ol,
  > ul {
    list-style: list;
    list-style-position: inside;
  }

  [data-mdx="pre-container"] {
    max-width: 60rem;
  }

  [data-mdx="pre-side-leva"] {
    @apply sm:w-64 lg:w-80;
  }

  pre,
  code {
    oveflow: hidden;
    white-space: pre-wrap;
    word-break: keep-all;
  }

  > hr {
    @apply my-0;
  }

  > h2 {
    @apply mt-20 mb-4;
  }

  > h3 {
    @apply mt-12 mb-4;
  }

  > h2 + h3 {
    @apply mt-4 mb-4;
  }

  > h4 {
    @apply mt-4 mb-4;
  }

  > h2 + h4 {
    @apply mt-4 mb-4;
  }

  > h3 + h4 {
    @apply mt-4 mb-4;
  }

  > p,
  > ul,
  > ol {
    @apply mb-6;
  }

  > ul > li,
  > ol > li {
    @apply mb-0.5;
  }

  > [data-mdx="pre-container"] {
    @apply mt-10 mb-10;
  }

  > [data-mdx="intro"] {
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
