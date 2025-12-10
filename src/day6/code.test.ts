/// <reference lib="deno.ns" />

import { expect } from '@std/expect';
import { solveA, solveB } from './code.ts';

const input = `123 328  51 64
 45 64  387 23
  6 98  215 314
*   +   *   +  `.split('\n');

const day = import.meta.dirname?.match(/day(\d+)$/)?.at(1) ?? '-';

Deno.test(day + 'A', () => {
  const result = solveA(input);
  expect(result).toBe(4277556);
});

Deno.test(day + 'B', () => {
  const result = solveB(input);
  expect(result).toBe(3263827);
});
