/// <reference lib="deno.ns" />

import { expect } from '@std/expect';
import { solveA, solveB } from './code.ts';

const input = `162,817,812
57,618,57
906,360,560
592,479,940
352,342,300
466,668,158
542,29,236
431,825,988
739,650,466
52,470,668
216,146,977
819,987,18
117,168,530
805,96,715
346,949,466
970,615,88
941,993,340
862,61,35
984,92,344
425,690,689`.split('\n');

const day = import.meta.dirname?.match(/day(\d+)$/)?.at(1) ?? '-';

Deno.test(day + 'A', () => {
  const result = solveA(input, 10);
  expect(result).toBe(40);
});

Deno.test(day + 'B', () => {
  const result = solveB(input);
  expect(result).toBe(25272);
});
