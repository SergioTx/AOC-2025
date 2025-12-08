/// <reference lib="deno.ns" />

import { expect } from 'jsr:@std/expect';
import { solveA, solveB, type Action } from './code';

const input = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82`.split('\n') as Action[];

const day = import.meta.dirname?.match(/day(\d+)$/)?.at(1) ?? '-';

Deno.test(day + 'A', () => {
  const result = solveA(input);
  expect(result).toBe(3);
});

Deno.test(day + 'B', () => {
  const result = solveB(input);
  expect(result).toBe(6);
});
