import { solveA, solveB, type IdRange } from './code.ts';

const file = Deno.readTextFileSync(import.meta.dirname + '/input.txt');
const input = file.split(',').map((report: string) => report.split('-')) as IdRange[];

const day = import.meta.dirname?.match(/day(\d+)$/)?.at(1) ?? '-';

console.log(`--- Day ${day} ---`);
if (Deno.args.length === 0 || Deno.args.some((arg) => arg.toUpperCase() === `${day}A`)) {
  console.log(`${day}A: ${solveA(input)}`);
}

if (Deno.args.length === 0 || Deno.args.some((arg) => arg.toUpperCase() === `${day}B`)) {
  console.log(`${day}B: ${solveB(input)}`);
}
