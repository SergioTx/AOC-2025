/// <reference lib="deno.ns" />

import { expect } from 'jsr:@std/expect';
import { solveA, solveB } from './code';

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

Deno.test('5A', () => {
  const result = solveA(input);
  expect(result).toBe(3);
});

Deno.test('5B', () => {
  const result = solveB(input);
  expect(result).toBe(14n);
});