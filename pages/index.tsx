import React from "react";
import Head from "next/head";

import { Hero } from "@components/hero";

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
