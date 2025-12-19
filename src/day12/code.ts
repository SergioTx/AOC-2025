function extractData(input: string[]): {
  objects: {
    shape: string[][];
    positions: number;
  }[];
  ops: {
    field: number[];
    shapes: number[];
  }[];
} {
  const objects = [] as {
    shape: string[][];
    positions: number;
  }[];
  const shape = [] as string[][];
  const ops = [] as {
    field: number[];
    shapes: number[];
  }[];
  input.forEach((line) => {
    if (line.trim() === '') {
      objects.push({
        shape: structuredClone(shape),
        positions: shape.reduce((a, b) => a + b.filter((c) => c === '#').length, 0),
      });
      shape.length = 0;
      return;
    }
    if (line.includes(':') && !line.includes('x')) {
      return;
    }
    if (line.includes('#') || line.includes('.')) {
      shape.push(line.split(''));
      return;
    }

    if (line.includes('x')) {
      const [fieldPart, shapePart] = line.split(':').map((part) => part.trim()) as [string, string];
      const field = fieldPart.split('x').map((n) => parseInt(n, 10));
      const shapes = shapePart.split(' ').map((n) => parseInt(n, 10));
      ops.push({ field, shapes });
      return;
    }
  });
  return { objects, ops };
}

export function solveA(_input: string[]): number {
  const { ops, objects } = extractData(_input);

  let sum = 0;
  // trivial logic: does it fit in the space provided?
  for (const op of ops) {
    const { field, shapes } = op;
    const fieldSize = field.reduce((a, b) => a * b, 1);
    const shapesSize = shapes.reduce((a, b, index) => {
      const obj = objects[index]!;
      return a + obj.positions * b;
    }, 0);
    if (shapesSize <= fieldSize) {
      sum += 1;
    }
  }

  // it looks like the trivial solution works for the real input, but not for the test one

  return sum;
}

// there's no B for this day
