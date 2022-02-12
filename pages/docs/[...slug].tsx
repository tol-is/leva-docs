import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";

import { getDocBySlug, getDocsSlugs } from "@lib/mdx";
import { MDXRenderer } from "@components/mdx/MDXRenderer";
import { Box, Container, WrapperPageDoc } from "@components/UI";
import { Loading } from "@components/Loading";

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
            <Container layout="doc">
              <MDXRenderer code={post.code} frontmatter={post.frontmatter} />
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
      slug: params.slug.join("/"),
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
