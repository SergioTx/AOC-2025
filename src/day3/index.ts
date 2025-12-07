import { solveA, solveB } from "./code";

const file = Deno.readTextFileSync('src/day3/input.txt');
const input = file.split('\n');

console.log('3A: ', solveA(input));
console.log('3B: ', solveB(input));
