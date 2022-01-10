import { tw } from "twind";
import { css } from "twind/css";

const rhythm = css`
  h1 {
    @apply text-2xl font-bold;
  }

  h2 {
    @apply text-xl font-bold;
  }

  h3 {
    @apply text-lg font-bold;
  }

  h4 {
    @apply text-base font-bold;
  }

  h5 {
    @apply text-sm font-bold;
  }

  p,
  li {
    max-width: 40rem;
    @apply text-base;
  }

  & > h2 {
    @apply mt-16 mb-4 sm:(mt-20 mb-5);
  }

  & > h3 {
    @apply mt-10 mb-4 sm:(mt-12 mb-5);
  }

  & > h2 + h3 {
    @apply mt-4 mb-4 sm:(mt-5 mb-5);
  }

  & > h4 {
    @apply mt-6 mb-4 sm:(mt-8 mb-5);
  }

  & > h2 + h4 {
    @apply mt-4 mb-4 sm:(mt-5 mb-5);
  }
  & > h3 + h4 {
    @apply mt-4 mb-4 sm:(mt-5 mb-5);
  }

  & p {
    @apply my-4 sm:(my-5);

    &:first-child {
      @apply mt-0 sm:mt-0;
    }
    &:last-child {
      @apply mb-0 sm:mb-0;
    }
  }

  & > div {
    @apply my-5 sm:(my-7);
  }
  & > table {
    @apply my-5 sm:(my-6);
  }

  & > ul,
  & > li {
    @apply my-5 sm:(my-6);
  }

  & > :first-child {
    margin-top: 0 !important;
  }
  & > :last-child {
    margin-bottom: 0 !important;
  }

  pre,
  code {
    max-width: 50rem;
    oveflow: hidden;
    white-space: pre-wrap;

    word-break: keep-all;
  }
`;

export const MDXRhythm = ({ children }) => {
  return <div className={tw(rhythm)}>{children}</div>;
};
