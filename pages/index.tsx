import React from "react";
import Head from "next/head";

import dynamic from "next/dynamic";
import { Hero } from "@components/hero";

export const isServer = typeof window === "undefined";

export default function Page() {
  return (
    <>
      <Head>
        <title>Leva</title>
      </Head>
      <Hero />
    </>
  );
}
