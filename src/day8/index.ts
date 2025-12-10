const file = Deno.readTextFileSync(import.meta.dirname + '/input.txt');
const input = file.split('\n');

const day = import.meta.dirname?.match(/day(\d+)$/)?.at(1) ?? '-';

console.log(`${day}A: COMMENTED ${input.length /*solveA(input, 1_000)*/}`);
console.log(`${day}B: COMMENTED ${input.length /*solveB(input)*/}`);
