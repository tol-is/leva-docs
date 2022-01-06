import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";

import { getDocBySlug, getWebsiteSlugs } from "@lib/mdx";
import { MDXRenderer } from "components/MDXRenderer";

export default function Page({ post }) {
  const router = useRouter();

  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    post && (
      <>
        {router.isFallback ? (
          <h1>Loading…</h1>
        ) : (
          <>
            <article>
              <Head>
                <title>Leva | {post.frontmatter.title}</title>
              </Head>
              <MDXRenderer code={post.code} />
            </article>
          </>
        )}
      </>
    )
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
  const pageSlugs = await getWebsiteSlugs();
  return {
    paths: pageSlugs || [],
    fallback: true,
  };
}
