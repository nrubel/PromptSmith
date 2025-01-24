export const getParts = (
  val: string,
): {
  parts: string[];
  uniqueBlocks: string[];
} => {
  const parts = val.split(/\[.*?\]/);
  const matches = val.match(/\[.*?\]/g) || []; // Use `match` to find all occurrences
  const uniqueBlocks = Array.from(new Set(matches));
  return { parts, uniqueBlocks };
};

export const getFinalText = (
  placeholders: { [key: string]: string },
  template: string,
) =>
  Object.keys(placeholders).reduce(
    (result, placeholder) =>
      result.replaceAll(placeholder, placeholders[placeholder]),
    template,
  );
