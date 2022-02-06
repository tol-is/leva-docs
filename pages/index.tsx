import React from "react";
import Head from "next/head";
import { useCreateStore } from "leva";

import { HomeIntro } from "@components/HomeIntro";
import { HomeDemo } from "@components/HomeDemo";

export default function Page() {
  const store = useCreateStore();

  return (
    <>
      <Head>
        <title>Leva</title>
      </Head>
      <HomeDemo store={store} />
      <div style={{ zIndex: 1, position: "relative" }}>
        <HomeIntro store={store} />
      </div>
    </>
  );
}
