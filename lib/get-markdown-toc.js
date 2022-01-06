module.exports.getMarkdownToc = (source) =>
  source
    .split("\n")
    .map((line) => {
      const matches = line.match(/^#+[\s]+/);

      return matches
        ? {
            level: matches[0].trim().length,
            heading: line.replace(matches[0], "").trim(),
          }
        : false;
    })
    .filter(Boolean);
