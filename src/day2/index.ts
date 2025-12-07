import { solveB, solveA, type IdRange } from "./code";

const file = Deno.readTextFileSync('src/day2/input.txt');
const input = file.split(',').map((report: string) => report.split('-')) as IdRange[];

console.log('2A: ', solveA(input));
console.log('2B: ', solveB(input));
