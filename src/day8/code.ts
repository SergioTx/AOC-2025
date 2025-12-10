export function solveA(input: string[], connectionsToMake: number): number {
  const numbers = input.map((line) => line.split(',').map(Number)) as [number, number, number][];

  const distances = numbers.map(([x, y, z]) => {
    return numbers.map(([x2, y2, z2]) => {
      const dx = x - x2;
      const dy = y - y2;
      const dz = z - z2;
      return Math.sqrt(dx ** 2 + dy ** 2 + dz ** 2);
    });
  });

  const connections = [] as number[][];
  let minDistance = 0;

  for (let i = 0; i < connectionsToMake; i++) {
    const minDistances = distances.flatMap((row) => Math.min(...row.filter((d) => d > minDistance)));
    minDistance = Math.min(...minDistances);
    const minDistanceFromIndex = minDistances.indexOf(minDistance);
    const minDistanceToIndex = distances[minDistanceFromIndex]!.indexOf(minDistance);

    const connectionsAffected = connections.filter(
      (conn) => conn.includes(minDistanceFromIndex) || conn.includes(minDistanceToIndex)
    );
    if (connectionsAffected.length === 0) {
      connections.push([minDistanceFromIndex, minDistanceToIndex]);
    } else if (connectionsAffected.length === 1) {
      const connectionIndex = connections.findIndex(
        (conn) => conn.includes(minDistanceFromIndex) || conn.includes(minDistanceToIndex)
      );
      if (!connections[connectionIndex]!.includes(minDistanceFromIndex)) {
        connections[connectionIndex]!.push(minDistanceFromIndex);
      }
      if (!connections[connectionIndex]!.includes(minDistanceToIndex)) {
        connections[connectionIndex]!.push(minDistanceToIndex);
      }
    } else {
      // Merge connections
      const firstIndex = connections.findIndex(
        (conn) => conn.includes(minDistanceFromIndex) || conn.includes(minDistanceToIndex)
      );
      const secondIndex = connections.findIndex(
        (conn, index) =>
          index !== firstIndex && (conn.includes(minDistanceFromIndex) || conn.includes(minDistanceToIndex))
      );
      connections[firstIndex] = [...connections[firstIndex]!, ...connections[secondIndex]!];
      connections.splice(secondIndex, 1);
    }
  }

  const lengths = connections
    .map((conn) => conn.length)
    .toSorted((a, b) => b - a)
    .slice(0, 3)
    .reduce((a, b) => a * b, 1);

  return lengths;
}

// Takes a few seconds to run
export function solveB(input: string[]) {
  const numbers = input.map((line) => line.split(',').map(Number)) as [number, number, number][];

  const distances = numbers.map(([x, y, z]) => {
    return numbers.map(([x2, y2, z2]) => {
      const dx = x - x2;
      const dy = y - y2;
      const dz = z - z2;
      return Math.sqrt(dx ** 2 + dy ** 2 + dz ** 2);
    });
  });

  const connected = new Set<number>();
  let minDistance = 0;

  while (connected.size < numbers.length) {
    const minDistances = distances.flatMap((row) => Math.min(...row.filter((d) => d > minDistance)));
    minDistance = Math.min(...minDistances);
    const minDistanceFromIndex = minDistances.indexOf(minDistance);
    const minDistanceToIndex = distances[minDistanceFromIndex]!.indexOf(minDistance);

    connected.add(minDistanceFromIndex);
    connected.add(minDistanceToIndex);

    if (connected.size === numbers.length) {
      return numbers.at(minDistanceFromIndex)!.at(0)! * numbers.at(minDistanceToIndex)!.at(0)!;
    }
  }
}
