export function SimilarStringRemover(strings: string[]): string[] {
  const uniqueMap: { [key: string]: boolean } = {};
  strings.forEach((str) => {
    uniqueMap[str] = true;
  });
  const uniqueStrings = Object.keys(uniqueMap);
  return uniqueStrings;
}
