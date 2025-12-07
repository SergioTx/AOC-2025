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

Deno.test('4A', () => {
  const result = solveA(input);
  expect(result).toBe(13);
});

Deno.test('4B', () => {
  const result = solveB(input);
  expect(result).toBe(43);
});