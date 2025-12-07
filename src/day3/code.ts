function getHighestNumber(line: string, length: number): number {
  const lineArr = line.split('').map(Number);

  const arr: number[] = [];
  while (arr.length < length) {
    const lastItem = arr.length - length + 1;
    const highest = Math.max(...lineArr.slice(0, lastItem >= 0 ? undefined : lastItem));
    arr.push(highest);
    const index = lineArr.indexOf(highest);
    lineArr.splice(0, index + 1);
  }

  return Number(arr.map(String).join(''));
}

export function solveA(input: string[]): number {
  return input.reduce((acc, line) => {
    const highestNumber = getHighestNumber(line, 2);
    return acc + highestNumber;
  }, 0);
}

export function solveB(input: string[]): number {
  return input.reduce((acc, line) => {
    const highestNumber = getHighestNumber(line, 12);
    return acc + highestNumber;
  }, 0);
}