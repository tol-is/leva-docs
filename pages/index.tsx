import React from "react";
import Head from "next/head";
import { useCreateStore } from "leva";

import { HomeIntro } from "@components/HomeIntro";
import { HomeDemo } from "@components/HomeDemo";
import { HomeSections } from "@components/HomeSections";
import { Box, HomePageRow } from "@components/UI";
import { HomeFeatures } from "@components/HomeFeatures";
import { HomeSupport } from "@components/HomeSupport";

export default function Page() {
  const store = useCreateStore();

  return (
    <>
      <Head>
        <title>Leva</title>
      </Head>
      <HomeDemo store={store} />

      <Box
        css={{
          zIndex: 1,
          position: "relative",
        }}
      >
        <HomePageRow>
          <HomeIntro store={store} />
        </HomePageRow>
        <HomePageRow dark>
          <HomeSections />
        </HomePageRow>
        <HomePageRow>
          <HomeFeatures />
        </HomePageRow>
        <HomePageRow dark>
          <HomeSupport />
        </HomePageRow>
      </Box>
    </>
  );
}
