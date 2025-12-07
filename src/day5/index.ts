import { solveA, solveB } from "./code";

const file = Deno.readTextFileSync('src/day5/input5.txt');
const input = file.split('\n');

console.log('5A: ', solveA(input));
console.log('5B: ', solveB(input));
