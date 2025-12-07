import { solveA, solveB, type Action } from "./code";

const file = Deno.readTextFileSync('src/day1/input.txt');
const input = file.split('\n') as Action[];

console.log('1A: ', solveA(input));
console.log('1B: ', solveB(input));
