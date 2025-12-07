/// <reference lib="deno.ns" />

import { expect } from 'jsr:@std/expect';
import { solveA, solveB } from './code';

const input = `987654321111111
811111111111119
234234234234278
818181911112111`.split('\n');

Deno.test('3A', () => {
  const result = solveA(input);
  expect(result).toBe(357);
});

Deno.test('3B', () => {
  const result = solveB(input);
  expect(result).toBe(3121910778619);
});