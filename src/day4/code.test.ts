/// <reference lib="deno.ns" />

import { expect } from 'jsr:@std/expect';
import { solveA, solveB } from './code';

const input = `..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`.split('\n');

const day = import.meta.dirname?.match(/day(\d+)$/)?.at(1) ?? '-';

Deno.test(day + 'A', () => {
  const result = solveA(input);
  expect(result).toBe(13);
});

Deno.test(day + 'B', () => {
  const result = solveB(input);
  expect(result).toBe(43);
});
