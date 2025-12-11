export function solveA(input: string[]): number {
  const parsedInput = input.map((line) => line.split(',').map(Number)) as [number, number][];

  let max = 0;

  parsedInput.forEach(([x, y]) => {
    parsedInput.forEach(([x1, y1]) => {
      const res = (Math.abs(x - x1) + 1) * (Math.abs(y - y1) + 1);

      if (res > max) {
        max = res;
      }
    });
  });

  return max;
}

export function solveB(_input: string[]) {
  return -1;
}
