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

export const camelCaseToHumanReadable = (text: string) => {
  return text
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (str) => str.toUpperCase());
};
