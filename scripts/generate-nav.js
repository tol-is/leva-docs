const fs = require("fs");
const path = require("path");
const glob = require("glob");
const matter = require("gray-matter");

const MDX_PATH = path.join(
  process.cwd(),
  "docs",
  process.env.NEXT_PUBLIC_LEVA_VERSION
);

const slugify = (input) =>
  input
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replaceAll("_", "-")
    .replaceAll("--", "-")
    .slice(0, 200);

const ROUTES_PATH = path.join(process.cwd(), "lib", "doc-routes.json");

const getMarkdownToc = (source) =>
  source
    .split("\n")
    .map((line) => {
      const matches = line.match(/^#+[\s]+/);

      return matches
        ? {
            level: matches[0].trim().length,
            heading: line.replace(matches[0], "").trim(),
            id: slugify(line.replace(matches[0], "").trim()),
          }
        : false;
    })
    .filter(Boolean);

const run = async () => {
  const files = glob.sync(`${MDX_PATH}/**/*.mdx`);

  const map = files
    .reduce((result, file) => {
      const source = fs.readFileSync(file, "utf8");
      const { data } = matter(source);
      const toc = [
        { level: 1, heading: data.title },
        ...getMarkdownToc(source),
      ];
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

  let data = JSON.stringify(map);
  fs.writeFileSync(ROUTES_PATH, data);
};

run();
