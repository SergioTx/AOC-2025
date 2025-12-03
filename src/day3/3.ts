const file = Deno.readTextFileSync('src/day3/input3.txt');
const input = file.split('\n');

function getHighestNumber(line: string, length: number): number {
  const lineArr = line.split('').map(Number);

  const arr: number[] = [];
  while (arr.length < length) {
    const lastItem = arr.length - length + 1;
    const highest = Math.max(...lineArr.slice(0, lastItem >= 0 ? undefined : lastItem));
    arr.push(highest);
    const index = lineArr.indexOf(highest);
    lineArr.splice(0, index + 1);
  }

  return Number(arr.map(String).join(''));
}

function solve3A(input: string[]): number {
  return input.reduce((acc, line) => {
    const highestNumber = getHighestNumber(line, 2);
    return acc + highestNumber;
  }, 0);
}

function solve3B(input: string[]): number {
  return input.reduce((acc, line) => {
    const highestNumber = getHighestNumber(line, 12);
    return acc + highestNumber;
  }, 0);
}

const result3A = solve3A(input);
const result3B = solve3B(input);

console.log('3A: ', result3A);
console.log('3B: ', result3B);
