function parseInput(input: string[]): Record<string, string[]> {
  const map: Record<string, string[]> = {};
  for (const line of input) {
    const [key, rest] = line.split(':').map((s) => s.trim());
    const values = rest ? rest.split(' ').map((s) => s.trim()) : [];
    map[key!] = values;
  }
  return map;
}

function findPaths(map: Record<string, string[]>, current: string, visited: Set<string>): number {
  if (current === 'out') {
    return 1;
  }
  if (visited.has(current)) {
    return 0;
  }
  visited.add(current);

  let totalPaths = 0;
  for (const nextPath of map[current] || []) {
    totalPaths += findPaths(map, nextPath, new Set(visited));
  }
  return totalPaths;
}

export function solveA(_input: string[]): number {
  const input = parseInput(_input);

  const visited = new Set<string>();
  const totalPaths = findPaths(input, 'you', visited);

  return totalPaths;
}

function formatInputWithoutDacOrFft(
  input: Record<string, { key: string; value: number }[]>
): Record<string, { key: string; value: number }[]> {
  const outs = new Map<string, { key: string; value: number }[]>();
  for (const [key, values] of Object.entries(input)) {
    if (key === 'svr' || key === 'dac' || key === 'fft') continue;

    if (values.some((v) => v.key === 'out')) {
      outs.set(key, values);
    }
  }

  if (outs.size === 0) return input;

  while (outs.values().some((vals) => vals.some((v) => outs.has(v.key)))) {
    for (const [key, values] of outs.entries()) {
      const newValues = values.flatMap((v) =>
        outs.has(v.key)
          ? outs.get(v.key)!.map((out) => {
              return { key: out.key, value: out.value * v.value };
            })
          : v
      );
      const uniqueNewValues = Object.entries(Object.groupBy(newValues, (v) => v.key))
        .map(([k, v]) => [k, v!.reduce((acc, cur) => acc + cur.value, 0)])
        .map(([k, v]) => ({ key: k as string, value: v as number }));

      outs.set(key, uniqueNewValues);
    }
  }

  let hasChanges = false;

  const newInput: Record<string, { key: string; value: number }[]> = {};
  for (const [key, values] of Object.entries(input)) {
    const hasOuts = values.some((v) => outs.has(v.key) && v.key !== 'svr' && v.key !== 'dac' && v.key !== 'fft');
    if (hasOuts) {
      const newValues = values.flatMap((v) =>
        outs.has(v.key)
          ? outs.get(v.key)!.map((out) => {
              return { key: out.key, value: out.value * v.value };
            })
          : v
      );
      const uniqueNewValues = Object.entries(Object.groupBy(newValues, (v) => v.key))
        .map(([k, v]) => [k, v!.reduce((acc, cur) => acc + cur.value, 0)])
        .map(([k, v]) => ({ key: k as string, value: v as number }));

      newInput[key] = uniqueNewValues;

      hasChanges = true;
    } else if (!outs.has(key)) {
      newInput[key] = values;
    }
  }

  if (hasChanges) {
    return formatInputWithoutDacOrFft(newInput);
  }
  return newInput;
}

function findPathsContainingDacAndFft(
  map: Record<string, { key: string; value: number }[]>,
  current: string,
  sum: number,
  visited: Set<string>
): number {
  if (current === 'out') {
    if (visited.has('dac') && visited.has('fft')) {
      return sum;
    }
    return 0;
  }
  if (visited.has(current)) {
    return 0;
  }
  visited.add(current);

  let totalPaths = 0;
  for (const nextPath of map[current] || []) {
    const nextValue = findPathsContainingDacAndFft(map, nextPath.key, sum * nextPath.value, new Set(visited));
    totalPaths += nextValue;
  }
  return totalPaths;
}

export function solveB(_input: string[]) {
  const parsedInput = parseInput(_input);
  const formattedInput = Object.fromEntries(
    Object.entries(parsedInput).map(([key, values]) => [key, values.map((v) => ({ key: v, value: 1 }))])
  );
  const input = formatInputWithoutDacOrFft(formattedInput);

  const visited = new Set<string>();
  const totalPaths = findPathsContainingDacAndFft(input, 'svr', 1, visited);

  return totalPaths;
}
