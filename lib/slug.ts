export const slugify = (input: string) =>
  input
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replaceAll("_", "-")
    .replaceAll("--", "-")
    .slice(0, 200);
