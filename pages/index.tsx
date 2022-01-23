import React from "react";
import Head from "next/head";

import dynamic from "next/dynamic";

export const isServer = typeof window === "undefined";

export default function Page() {
  return (
    <>
      <Head>
        <title>Leva</title>
      </Head>
    </>
  );
}
