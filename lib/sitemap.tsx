import sitemapData from "@lib/sitemap.json";

export const sitemap = sitemapData;

export type TSItemap = typeof sitemap;
export type TDocFrontMatter = typeof sitemap.docs[0];
