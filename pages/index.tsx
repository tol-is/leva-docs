import React from "react";
import Head from "next/head";
import { useCreateStore } from "leva";

import { HomeIntro } from "@components/HomeIntro";
import { HomeDemo } from "@components/HomeDemo";
import { HomeSections } from "@components/HomeSections";
import { Box } from "@components/UI";
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
          paddingTop: "$13",
          "@md": {
            paddingTop: "$13",
          },
        }}
      >
        <Box css={{ marginTop: "$0" }}>
          <HomeIntro store={store} />
        </Box>
        <Box css={{ marginTop: "$13" }}>
          <HomeSections />
        </Box>
        <Box css={{ marginTop: "$13" }}>
          <HomeFeatures />
        </Box>
        <Box css={{ marginTop: "$13" }}>
          <HomeSupport />
        </Box>
      </Box>
    </>
  );
}
