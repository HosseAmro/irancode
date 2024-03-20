type AnyObject = { [key: string | number | symbol]: any };

export function SimilarObjectsRemover(objects: AnyObject[]): AnyObject[] {
  const uniqueMap: { [key: string]: boolean } = {};
  objects.forEach((obj) => {
    const objString = JSON.stringify(obj, Object.keys(obj).sort());
    uniqueMap[objString] = true;
  });
  const uniqueObjects = Object.keys(uniqueMap).map((objString) =>
    JSON.parse(objString)
  );
  return uniqueObjects;
}
