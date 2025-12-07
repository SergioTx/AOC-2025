import { solveA, solveB } from "./code";

const file = Deno.readTextFileSync('src/day4/input.txt');
const input = file.split('\n');

console.log('4A: ', solveA(input));
console.log('4B: ', solveB(input));
