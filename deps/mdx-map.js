const fs = require("fs");
const path = require("path");
const glob = require("glob");
const matter = require("gray-matter");

const { getMarkdownToc } = require("../lib/get-markdown-toc");

const MDX_PATH = path.join(
  process.cwd(),
  "mdx",
  process.env.NEXT_PUBLIC_LEVA_VERSION
);

module.exports = async () => {
  const files = glob.sync(`${MDX_PATH}/**/*.mdx`);

  const map = files
    .reduce((result, file) => {
      const source = fs.readFileSync(file, "utf8");
      const { data } = matter(source);
      const toc = getMarkdownToc(source);
      const slug = `${file.replace(`${MDX_PATH}`, "").replace(".mdx", "")}`;
      return [
        ...result,
        {
          ...data,
          toc: toc,
          slug: slug,
        },
      ];
    }, [])
    .sort((a, b) => Number(a.order) - Number(b.order))
    .filter(Boolean);

  return {
    code: `module.exports = ${JSON.stringify(map)}`,
  };
};
