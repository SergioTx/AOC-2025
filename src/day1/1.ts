const file = Deno.readTextFileSync('src/day1/input1.txt');
const input = file.split('\n') as Action[];

type Direction = 'L' | 'R';
type Action = `${Direction}${number}`;

const initialPosition = 50;

function parseAction(action: Action): number {
  const direction = action.charAt(0) as Direction;
  const distance = parseInt(action.slice(1), 10);

  return direction === 'L' ? -distance : distance;
}

function countZeros(initialPosition: number, actions: Action[]): number {
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

function countZeroPasses(initialPosition: number, actions: Action[]): number {
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

const day1Part1 = countZeros(initialPosition, input);
const day1Part2 = countZeroPasses(initialPosition, input);

console.log('1A: ', day1Part1);
console.log('1B: ', day1Part2);
