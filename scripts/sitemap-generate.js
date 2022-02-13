const fs = require("fs");
const path = require("path");
const glob = require("glob");
const matter = require("gray-matter");

const MDX_PATH = path.join(
  process.cwd(),
  "docs",
  process.env.NEXT_PUBLIC_LEVA_VERSION
);

const slugify = (input) => {
  return input
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/_/g, "-")
    .replace(/--/g, "-")
    .slice(0, 200);
};

const ROUTES_PATH = path.join(process.cwd(), "lib", "sitemap.json");

const transformHeading = ({ level, heading, docSlug }) => {
  const id = level === 1 ? "top" : slugify(heading);

  return {
    id,
    level,
    heading,
  };
};

const getMarkdownToc = ({ source, docSlug }) =>
  source
    .split("\n")
    .map((line) => {
      const matches = line.match(/^#+[\s]+/);

      if (!matches) return false;

      const heading = line.replace(matches[0], "").trim();
      const level = matches[0].trim().length;

      return transformHeading({
        level,
        heading,
        docSlug,
      });
    })
    .filter(Boolean);

module.exports.generateSitemap = async () => {
  const files = glob.sync(`${MDX_PATH}/**/*.mdx`);

  const docs = files
    .reduce((result, file) => {
      const source = fs.readFileSync(file, "utf8");
      const { data } = matter(source);

      const slug = `/docs${file
        .replace(`${MDX_PATH}`, "")
        .replace(".mdx", "")}`;

      const toc = [...getMarkdownToc({ source, docSlug: slug })];

      return [
        ...result,
        {
          ...data,
          slug: slug,
          toc: toc,
        },
      ];
    }, [])
    .sort((a, b) => Number(a.order) - Number(b.order))
    .filter(Boolean);

  let data = JSON.stringify({ docs });
  fs.writeFileSync(ROUTES_PATH, data);
};
