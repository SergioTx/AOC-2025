import { solveA, solveB, type IdRange } from './code.ts';

const file = Deno.readTextFileSync(import.meta.dirname + '/input.txt');
const input = file.split(',').map((report: string) => report.split('-')) as IdRange[];

const day = import.meta.dirname?.match(/day(\d+)$/)?.at(1) ?? '-';

console.log(`${day}A: ${solveA(input)}`);
console.log(`${day}B: ${solveB(input)}`);
