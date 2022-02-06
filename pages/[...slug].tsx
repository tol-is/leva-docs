import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";

import { getDocBySlug, getWebsiteSlugs } from "@lib/mdx";
import { MDXRenderer } from "@components/MDXRenderer";
import { Container, WrapperPageDoc } from "@components/UI";

import { Article } from "@components/UI";

export default function Page({ post }) {
  const router = useRouter();

  // console.log(post.slug);
  // if (!router.isFallback && !post) {
  //   return <ErrorPage statusCode={404} title="NotFound" />;
  // }

  return (
    <>
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <>
          <Head>
            <title>Leva | {post.frontmatter.title}</title>
          </Head>
          <WrapperPageDoc>
            <Container size="doc">
              <MDXRenderer code={post.code} />
            </Container>
          </WrapperPageDoc>
        </>
      )}
    </>
  );
}

export async function getStaticProps({ params }) {
  const post = await getDocBySlug(params.slug.join("/"));

  // console.log(params);
  // console.log(post ? post.frontmatter : "NOT FOUND?");
  return {
    props: {
      post: post || null,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const pageSlugs = await getWebsiteSlugs();
  return {
    paths: pageSlugs || [],
    fallback: true,
  };
}
