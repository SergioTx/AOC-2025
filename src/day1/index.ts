import { solveA, solveB, type Action } from './code.ts';

const file = Deno.readTextFileSync(import.meta.dirname + '/input.txt');
const input = file.split('\n') as Action[];

const day = import.meta.dirname?.match(/day(\d+)$/)?.at(1) ?? '-';

console.log(`--- Day ${day} ---`);
if (
  Deno.args.length === 0 ||
  Deno.args.some((arg) => arg === day) ||
  Deno.args.some((arg) => arg.toUpperCase() === `${day}A`)
) {
  console.log(`${day}A: ${solveA(input)}`);
}

if (
  Deno.args.length === 0 ||
  Deno.args.some((arg) => arg === day) ||
  Deno.args.some((arg) => arg.toUpperCase() === `${day}B`)
) {
  console.log(`${day}B: ${solveB(input)}`);
}
