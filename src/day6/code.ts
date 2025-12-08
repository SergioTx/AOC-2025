export function solveA(input: string[]): number {
  const arr = input.map(line => line.trim().split(/\s+/));
  const cols = [] as string[][];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i]!.length; j++) {
      if (cols[j] == null) {
        cols[j] = [];
      }

      cols[j]!.push(arr[i]![j]!);
    }
  }

  return cols.reduce((acc, col) => {
    const op = col.pop();
    const fn = op === '+' ? (a: number,b:number) => a+b : (a:number,b:number) => a*b;
    return acc + col.map(Number).reduce(fn);
  }, 0);
}

export function solveB(input: string[]) {
  const arr = input.map(line => line.split(''));
  const cols = [] as string[][];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i]!.length; j++) {
      if (cols[j] == null) {
        cols[j] = [];
      }

      cols[j]!.push(arr[i]![j]!);
    }
  }

  const ops = [] as {nums: number[], op: '+' | '*'}[];
  cols.forEach(col => {
    const lastEl = col.at(-1);
    const strCol = col.join('');
    if (lastEl === '+' || lastEl === '*') {
      ops.push({
        op: lastEl,
        nums: [parseInt(strCol)]
      })
    } else if (strCol.trim() !== '') {
      ops.at(-1)!.nums.push(parseInt(strCol));
    }
  });

  return ops.reduce((acc, col) => {
    const fn = col.op === '+' ? (a: number,b:number) => a+b : (a:number,b:number) => a*b;
    const colResult = col.nums.reduce(fn);
    return acc + colResult;
  }, 0);
}
