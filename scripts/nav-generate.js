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

const transformHeading = ({ level, heading, docSlug }) => {
  console.log(heading);

  const id = slugify(heading);

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

module.exports.generateNav = async () => {
  const files = glob.sync(`${MDX_PATH}/**/*.mdx`);

  const map = files
    .reduce((result, file) => {
      const source = fs.readFileSync(file, "utf8");
      const { data } = matter(source);

      console.log(JSON.stringify(data));
      const slug = `/docs${file
        .replace(`${MDX_PATH}`, "")
        .replace(".mdx", "")}`;

      const toc = [
        transformHeading({ level: 1, heading: data.title, docSlug: slug }),
        ...getMarkdownToc({ source, docSlug: slug }),
      ];

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
