import * as asserts from "https://deno.land/std/testing/asserts.ts";
import * as log from "https://deno.land/std/log/mod.ts";
import { uniquePaths } from "./index.ts";

log.info("62. Unique Paths");

Deno.test({
  name: `
  Input: 3, 2
  Output: 3
  `,
  fn(): void {
    const result: number = uniquePaths(3, 2);
    asserts.assertEquals(3, result);
  },
});

Deno.test({
  name: `
  Input: 7, 3
  Output: 28
  `,
  fn(): void {
    const result: number = uniquePaths(7, 3);
    asserts.assertEquals(28, result);
  },
});

Deno.test({
  name: `
  Input: 3, 3
  Output: 6
  `,
  fn(): void {
    const result: number = uniquePaths(3, 3);
    asserts.assertEquals(6, result);
  },
});

Deno.test({
  name: `
  Input: 1, 1
  Output: 1
  `,
  fn(): void {
    const result: number = uniquePaths(1, 1);
    asserts.assertEquals(1, result);
  },
});

Deno.test({
  name: `
  Input: 2, 3
  Output: 3
  `,
  fn(): void {
    const result: number = uniquePaths(2, 3);
    asserts.assertEquals(3, result);
  },
});

// 测试 16 * 16 的情况下 Runtime 耗时
Deno.test({
  name: `
  Input: 16, 16
  Output: 155117520
  `,
  fn(): void {
    const result: number = uniquePaths(16, 16);
    asserts.assertEquals(155117520, result);
  },
});
