import fs from "fs";
import path from "path";

import glob from "glob";
import matter from "gray-matter";

import { bundleMDX } from "mdx-bundler";
import { remarkMdxCodeMeta } from "remark-mdx-code-meta";

export const MDX_PATH = path.join(
  process.cwd(),
  "docs",
  process.env.NEXT_PUBLIC_LEVA_VERSION
);

export const GLOBALS = {
  leva: {
    varName: "globalLeva",
    namedExports: [
      "useControls",
      "useCreateStore",
      "useStoreContext",
      "Leva",
      "LevaPanel",
      "LevaStoreProvider",
      "folder",
      "button",
      "monitor",
    ],
  },
};

export const getMDXMap = async () => {
  const files = glob.sync(`${MDX_PATH}/**/*.mdx`);

  return files
    .reduce((result, file) => {
      const source = fs.readFileSync(file, "utf8");
      const { data } = matter(source);
      const slug = `${file.replace(`${MDX_PATH}`, "").replace(".mdx", "")}`;
      return [
        ...result,
        {
          ...data,
          slug: slug,
        },
      ];
    }, [])
    .sort((a, b) => Number(a.order) - Number(b.order))
    .filter(Boolean);
};

const getMDXOptions = () => {
  const remarkPlugins = [remarkMdxCodeMeta];
  const rehypePlugins = [];

  return {
    esbuildOptions(options) {
      options.minify = false;
      options.target = ["es2020", "node12"];

      return options;
    },
    globals: GLOBALS,
    xdmOptions(options) {
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        ...remarkPlugins,
      ];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        ...rehypePlugins,
      ];

      return options;
    },
  };
};

export async function getMDX(filePath: string) {
  const options = getMDXOptions();
  try {
    return await bundleMDX({ ...options, file: filePath });
  } catch (error) {
    return await bundleMDX({ ...options, source: `${error.message}` });
  }
}

export const getWebsiteSlugs = async () => {
  const docs = await getMDXMap();

  console.log(docs);
  return docs.map((doc) => doc.slug);
};

export const getDocBySlug = async (slug: string) => {
  const filePath = path.join(MDX_PATH, `${slug}.mdx`);

  return getMDX(filePath);
};
