/// <reference lib="deno.ns" />

import { expect } from '@std/expect';
import { solveA, solveB } from './code.ts';

const input = `987654321111111
811111111111119
234234234234278
818181911112111`.split('\n');

const day = import.meta.dirname?.match(/day(\d+)$/)?.at(1) ?? '-';

Deno.test(day + 'A', () => {
  const result = solveA(input);
  expect(result).toBe(357);
});

Deno.test(day + 'B', () => {
  const result = solveB(input);
  expect(result).toBe(3121910778619);
});
