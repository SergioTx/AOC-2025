/// <reference lib="deno.ns" />

import { expect } from 'jsr:@std/expect';
import { solveA, solveB, type IdRange } from './code';

const input = `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,
1698522-1698528,446443-446449,38593856-38593862,565653-565659,
824824821-824824827,2121212118-2121212124`.split(',').map((report: string) => report.split('-')) as IdRange[];

Deno.test('2A', () => {
  const result = solveA(input);
  expect(result).toBe(1227775554);
});

Deno.test('2B', () => {
  const result = solveB(input);
  expect(result).toBe(4174379265);
});