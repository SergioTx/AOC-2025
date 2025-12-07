const file = Deno.readTextFileSync('src/day5/input5.txt');
const input = file.split('\n');

function getIngredientsAndRanges(input: string[]) {
  const res = {
    ingredients: [] as number[],
    ranges: [] as [number, number][],
  }

  const splitIndex = input.findIndex(line => line.trim() === '');
  const ranges = input.slice(0, splitIndex);
  const ingredients = input.slice(splitIndex+1);

  res.ranges = ranges.map(range => range.split('-').map(Number)) as [number, number][];
  res.ingredients = ingredients.map(Number);

  return res;
}

function solve5A(input: string[]): number {
  const {ingredients, ranges} = getIngredientsAndRanges(input);
  const freshIngredients = ingredients.filter(ingredient => {
    return ranges.some(([min,max]) => {
      return min <= ingredient && max >= ingredient;
    })
  });
  return freshIngredients.length;
}

function solve5B(input: string[]) {
  const {ranges} = getIngredientsAndRanges(input);

  // Using a Set is not an option as it overflows
  // Need to mix ranges that overlap

  const updatedRanges = [] as [number, number][];
  ranges.toSorted(([minA], [minB]) => minA - minB).forEach(([min,max]) => {
    const index = updatedRanges.findIndex(([minUpdated, maxUpdated]) => {
      return (minUpdated <= min && maxUpdated >= min) || (minUpdated <= max && maxUpdated >= max);
    });
    if (index < 0) {
      updatedRanges.push([min,max]);
    } else {
      updatedRanges[index]![0] = Math.min(updatedRanges[index]![0], min);
      updatedRanges[index]![1] = Math.max(updatedRanges[index]![1], max);
    }
  });

  // regular number overflows, needs BigInt
  const total = updatedRanges.reduce((acc, [min, max]) => {
    return acc + BigInt((max-min) + 1);
  }, 0n);

  return total;
}

console.log('5A: ', solve5A(input));
console.log('5B: ', solve5B(input));
