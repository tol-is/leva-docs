import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";

import { getDocBySlug, getDocsSlugs } from "@lib/mdx";
import { MDXRenderer } from "@components/MDXRenderer";
import { Box, Container, WrapperPageDoc } from "@components/UI";
import { Loading } from "@components/Loading";
import { Intro } from "@components/Intro";

export default function Page({ post }) {
  const router = useRouter();

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} title="NotFound" />;
  }

  return (
    <>
      {router.isFallback ? (
        <Loading />
      ) : (
        <>
          <Head>
            <title>Leva | {post.frontmatter.title}</title>
          </Head>
          <WrapperPageDoc>
            <Container size="doc">
              <Intro
                title={post.frontmatter.title}
                description={post.frontmatter.description}
              />
              <Box
                css={{
                  marginTop: "$8",
                  "@sm": {
                    marginTop: "$11",
                  },
                }}
              >
                <MDXRenderer code={post.code} />
              </Box>
            </Container>
          </WrapperPageDoc>
        </>
      )}
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = await getDocBySlug(params.slug.join("/"));

  return {
    props: {
      post: post || null,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const pageSlugs = await getDocsSlugs();
  return {
    paths: pageSlugs || [],
    fallback: true,
  };
}
