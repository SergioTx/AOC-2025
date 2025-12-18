/// <reference lib="deno.ns" />

import { expect } from '@std/expect';
import { solveA, solveB } from './code.ts';

const input = `aaa: you hhh
you: bbb ccc
bbb: ddd eee
ccc: ddd eee fff
ddd: ggg
eee: out
fff: out
ggg: out
hhh: ccc fff iii
iii: out`.split('\n');

const inputB = `svr: aaa bbb
aaa: fft
fft: ccc
bbb: tty
tty: ccc
ccc: ddd eee
ddd: hub
hub: fff
eee: dac
dac: fff
fff: ggg hhh
ggg: out
hhh: out`.split('\n');

const day = import.meta.dirname?.match(/day(\d+)$/)?.at(1) ?? '-';

Deno.test(day + 'A', () => {
  const result = solveA(input);
  expect(result).toBe(5);
});

Deno.test(day + 'B', () => {
  const result = solveB(inputB);
  expect(result).toBe(2);
});
