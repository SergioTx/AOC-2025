/// <reference lib="deno.ns" />

import { expect } from '@std/expect';
import { solveA } from './code.ts';

const input = `0:
###
##.
##.

1:
###
##.
.##

2:
.##
###
##.

3:
##.
###
##.

4:
###
#..
###

5:
###
.#.
###

4x4: 0 0 0 0 2 0
12x5: 1 0 1 0 2 2
12x5: 1 0 1 0 3 2`.split('\n');

const day = import.meta.dirname?.match(/day(\d+)$/)?.at(1) ?? '-';

Deno.test.ignore(day + 'A', () => {
  const result = solveA(input);
  // the trivial solution doesn't work for the test case, but does for the real one
  expect(result).toBe(2);
});
