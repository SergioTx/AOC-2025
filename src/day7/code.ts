const START = 'S';
const SPLIT = '^';

export function solveA(input: string[]): number {
  const startIndex = input[0]!.indexOf(START);
  let positions = [startIndex];
  let splitTimes = 0;

  for (let i = 1; i < input.length; i++) {
    const line = input[i]!;

    positions = Array.from(
      new Set(
        positions.flatMap((pos) => {
          if (line[pos] === SPLIT) {
            splitTimes++;
            return [pos - 1, pos + 1];
          } else {
            return [pos];
          }
        })
      )
    );
  }

  return splitTimes;
}

export function solveB(input: string[]) {
  const startIndex = input[0]!.indexOf(START);
  let positions = [{ index: startIndex, count: 1 }];

  for (let i = 1; i < input.length; i++) {
    const line = input[i]!;

    positions = positions
      .flatMap((pos) => {
        if (line[pos.index] === SPLIT) {
          return [
            { index: pos.index - 1, count: pos.count },
            { index: pos.index + 1, count: pos.count },
          ];
        } else {
          return [pos];
        }
      })
      .reduce((acc, curr) => {
        const existing = acc.find((p) => p.index === curr.index);
        if (existing) {
          existing.count += curr.count;
        } else {
          acc.push(curr);
        }
        return acc;
      }, [] as { index: number; count: number }[]);
  }

  return positions.reduce((sum, pos) => sum + pos.count, 0);
}
