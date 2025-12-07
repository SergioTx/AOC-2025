
export type Direction = 'L' | 'R';
export type Action = `${Direction}${number}`;

function parseAction(action: Action): number {
  const direction = action.charAt(0) as Direction;
  const distance = parseInt(action.slice(1), 10);

  return direction === 'L' ? -distance : distance;
}

export function solveA(actions: Action[]): number {
  let initialPosition = 50;
  let zeros = 0;
  actions.forEach((action) => {
    initialPosition += parseAction(action);

    while (initialPosition < 0) {
      initialPosition += 100;
    }
    while (initialPosition >= 100) {
      initialPosition -= 100;
    }

    if (initialPosition === 0) {
      zeros++;
    }
  });

  return zeros;
}

export function solveB(actions: Action[]): number {
  let initialPosition = 50;
  let zeros = 0;
  actions.forEach((action) => {
    const numAction = parseAction(action);
    const sign = Math.sign(numAction);
    for (let step = 0; step < Math.abs(numAction); step++) {
      initialPosition += sign;

      if (initialPosition % 100 === 0) {
        zeros++;
      }
    }
  });

  return zeros;
}
