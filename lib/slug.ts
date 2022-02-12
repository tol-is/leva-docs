export const slugify = (input: string) =>
  input
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/_/g, "-")
    .replace(/--/g, "-")
    .slice(0, 200);
