const ROLL = '@';

function getAdjacentRolls(arr: string[][], i: number, j: number): number {
  return [
    arr[i - 1]?.[j - 1],
    arr[i - 1]?.[j],
    arr[i - 1]?.[j + 1],
    arr[i]![j - 1],
    arr[i]![j + 1],
    arr[i + 1]?.[j - 1],
    arr[i + 1]?.[j],
    arr[i + 1]?.[j + 1],
  ].filter((pos) => pos === ROLL).length;
}

export function solveA(input: string[]): number {
  let result = 0;
  const arr = input.map((line) => line.split(''));
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i]!.length; j++) {
      const element = arr[i]![j];

      if (element === ROLL) {
        const adjacentRolls = getAdjacentRolls(arr, i, j);
        if (adjacentRolls <= 3) {
          result++;
        }
      }
    }
  }
  return result;
}

export function solveB(input: string[]): number {
  const arr = input.map((line) => line.split(''));
  let total = 0;
  let result = 0;
  do {
    result = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i]!.length; j++) {
        const element = arr[i]![j];

        if (element === ROLL) {
          const adjacentRolls = getAdjacentRolls(arr, i, j);
          if (adjacentRolls <= 3) {
            arr[i]![j] = 'x';
            result++;
            total++;
          }
        }
      }
    }
  } while (result > 0);

  return total;
}
