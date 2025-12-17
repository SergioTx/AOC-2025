function extractData(input: string): { buttons: number[][]; schema: (0 | 1)[]; joltage: number[] } {
  const schema =
    input
      .match(/\[([\.#]+)\]/g)
      ?.toString()
      .split('')
      .slice(1, -1)
      .map((char) => (char === '#' ? 1 : 0)) || null;

  if (!schema) throw new Error('Invalid schema format');

  const buttons =
    input
      .match(/\(((?:\d,)*\d+)\)/g)
      ?.map((match) => {
        return match
          .substring(1, match.length - 1)
          .split(',')
          .map(Number);
      })
      .sort((a, b) => a.toString().localeCompare(b.toString())) || null;

  if (!buttons) throw new Error('Invalid buttons format');

  const joltage =
    input
      .match(/\{([\d,]+)\}/g)
      ?.toString()
      .split('')
      .slice(1, -1)
      .join('')
      .split(',')
      .map(Number) || null;

  if (!joltage) throw new Error('Invalid joltage format');

  return { buttons, schema, joltage };
}

function applyButtonSchemaPress(currentSchema: (0 | 1)[], button: number[]) {
  currentSchema = [...currentSchema];

  button.forEach((index) => {
    currentSchema[index] = currentSchema[index] === 0 ? 1 : 0;
  });

  return currentSchema;
}

function getNumberOfPressesToMatchSchema(
  buttons: number[][],
  targetSchema: (0 | 1)[],
  maxPresses: number,
  currentSchema: (0 | 1)[],
  prevButtons?: number[][]
): number {
  for (const button of buttons) {
    let currentButtonSchema = [...currentSchema];
    const currentPrevButtons = prevButtons ? [...prevButtons] : [];

    currentButtonSchema = applyButtonSchemaPress(currentButtonSchema, button);
    currentPrevButtons.push(button);

    if (currentPrevButtons.length >= maxPresses) {
      continue;
    }

    const schemaKey = currentButtonSchema.join('');
    if (schemaKey === targetSchema.join('')) {
      maxPresses = currentPrevButtons.length;
      continue;
    }

    // recursive call
    maxPresses = Math.min(
      maxPresses,
      getNumberOfPressesToMatchSchema(
        // pressing the same button again goes to the previous state, so we skip it
        buttons.filter((btn) => btn !== button),
        targetSchema,
        maxPresses,
        currentButtonSchema,
        currentPrevButtons
      )
    );
  }

  return maxPresses;
}

// not optimized, will time out on larger inputs
export function solveA(input: string[]): number {
  let sum = 0;

  input.forEach((line) => {
    const { buttons, schema } = extractData(line);

    const initialSchema = Array.from({ length: schema.length }, () => 0 as const);

    const presses = getNumberOfPressesToMatchSchema(buttons, schema, buttons.length, initialSchema);
    sum += presses ?? 0;
  });

  return sum;
}

export function solveB(_input: string[]) {
  return -1;
}
