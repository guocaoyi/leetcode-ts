import * as asserts from "https://deno.land/std/testing/asserts.ts";
import * as log from "https://deno.land/std/log/mod.ts";
import { tribonacci } from "./index.ts";

log.info("1137. N-th Tribonacci Number");

Deno.test({
  name: `
  Input: n = 4
  Output: 4
  Explanation:
  T_3 = 0 + 1 + 1 = 2
  T_4 = 1 + 1 + 2 = 4
  `,
  fn(): void {
    const result: number = tribonacci(4);
    asserts.assertEquals(4, result);
  },
});

Deno.test({
  name: `
  Input: n = 0
  Output: 0
  `,
  fn(): void {
    const result: number = tribonacci(0);
    asserts.assertEquals(0, result);
  },
});

Deno.test({
  name: `
  Input: n = 1
  Output: 1
  `,
  fn(): void {
    const result: number = tribonacci(1);
    asserts.assertEquals(1, result);
  },
});

Deno.test({
  name: `
  Input: n = 25
  Output: 1389537
  `,
  fn(): void {
    const result: number = tribonacci(25);
    asserts.assertEquals(1389537, result);
  },
});

Deno.test({
  name: `
  Input: n = 29
  Output: 15902591
  `,
  fn(): void {
    const result: number = tribonacci(29);
    asserts.assertEquals(15902591, result);
  },
});

Deno.test({
  name: `
  Input: n = 30
  Output: 29249425
  `,
  fn(): void {
    const result: number = tribonacci(30);
    asserts.assertEquals(29249425, result);
  },
});

Deno.test({
  name: `
  Input: n = 31
  Output: 53798080
  `,
  fn(): void {
    const result: number = tribonacci(31);
    asserts.assertEquals(53798080, result);
  },
});

Deno.test({
  name: `
  Input: n = 35
  Output: 615693474
  `,
  fn(): void {
    const result: number = tribonacci(35);
    asserts.assertEquals(615693474, result);
  },
});

Deno.test({
  name: `
  Input: n = 37
  Output: 2082876103
  `,
  fn(): void {
    const result: number = tribonacci(37);
    asserts.assertEquals(2082876103, result);
  },
});
