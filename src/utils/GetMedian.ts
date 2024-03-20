function median(arr: number[]): number {
  const newArr = [...arr];
  newArr.sort((a, b) => a - b);
  const half = Math.floor(newArr.length / 2);
  if (newArr.length % 2 === 1) {
    return newArr[half];
  }
  return (newArr[half - 1] + newArr[half]) / 2;
}

export function getMedian(
  decodedCodes: {
    error?: number;
    code: number;
    start: number;
    end: number;
  }[]
): number {
  const errors = decodedCodes.flatMap((x) => x.error);
  const errorsNumber = errors.filter((e): e is number => e !== undefined);
  const medianOfErrors = median(errorsNumber);
  return medianOfErrors;
}
