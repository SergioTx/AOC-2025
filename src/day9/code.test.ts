/// <reference lib="deno.ns" />

import { expect } from '@std/expect';
import { solveA, solveB } from './code.ts';

const input = `7,1
11,1
11,7
9,7
9,5
2,5
2,3
7,3`.split('\n');

const day = import.meta.dirname?.match(/day(\d+)$/)?.at(1) ?? '-';

Deno.test(day + 'A', () => {
  const result = solveA(input);
  expect(result).toBe(50);
});

Deno.test(day + 'B', () => {
  const result = solveB(input);
  expect(result).toBe(24);
});
