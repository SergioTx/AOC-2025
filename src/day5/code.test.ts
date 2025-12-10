/// <reference lib="deno.ns" />

import { expect } from '@std/expect';
import { solveA, solveB } from './code.ts';

const input = `3-5
10-14
16-20
12-18

1
5
8
11
17
32`.split('\n');

const day = import.meta.dirname?.match(/day(\d+)$/)?.at(1) ?? '-';

Deno.test(day + 'A', () => {
  const result = solveA(input);
  expect(result).toBe(3);
});

Deno.test(day + 'B', () => {
  const result = solveB(input);
  expect(result).toBe(14n);
});
