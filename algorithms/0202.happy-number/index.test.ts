import * as asserts from "https://deno.land/std/testing/asserts.ts";
import * as log from "https://deno.land/std/log/mod.ts";

import { isHappy } from "./index.ts";

log.info("0202 Happy Number");

Deno.test({
  name: `
  Input: 1
  Output: true
  Explanation:
  1^2 = 1
  1^2 = 1
  ...
  `,
  fn(): void {
    const result = isHappy(1);
    asserts.assertEquals(result, true);
  },
});

Deno.test({
  name: `
  Input: 2
  Output: false
  Explanation:
  2^2 = 4
  4^2 = 16
  1^2 + 6^2 = 37
  3^2 + 7^2 = 58
  5^2 + 8^2 = 89
  8^2 + 9^2 = 145
  1^2 + 4^2 + 5^2 = 42
  4^2 + 2^2 = 20
  2^2 + 0^2 = 4
  .....
  `,
  fn(): void {
    const result = isHappy(2);
    asserts.assertEquals(result, false);
  },
});

Deno.test({
  name: `
  Input: 7
  Output: true
  Explanation:
  7^2 = 49
  4^2 + 9^2 = 97
  9^2 + 7^2 = 130
  1^2 + 3^2 + 0^2 = 10
  1^2 + 0^2 = 1
  `,
  fn(): void {
    const result = isHappy(7);
    asserts.assertEquals(result, true);
  },
});

Deno.test({
  name: `
  Input: 9
  Output: false
  Explanation:
  9^2 = 18
  1^2 + 8^2 = 65
  6^2 + 5^2 = 61
  6^2 + 1^2 = 37
  3^2 + 7^2 = 58
  5^2 + 8^2 = 89
  8^2 + 9^2 = 145
  1^2 + 4^2 + 5^2 = 42
  4^2 + 2^2 = 20
  2^2 + 0^2 = 4
  4^2 = 16
  1^2 + 6^2 = 37
  3^2 + 7^2 = 58
  5^2 + 8^2 = 89
  8^2 + 9^2 = 145
  ......
  `,
  fn(): void {
    const result = isHappy(9);
    asserts.assertEquals(result, false);
  },
});

Deno.test({
  name: `
  Input: 19
  Output: true
  Explanation:
  1^2 + 9^2 = 82
  8^2 + 2^2 = 68
  6^2 + 8^2 = 100
  1^2 + 0^2 + 0^2 = 1
  `,
  fn(): void {
    const result = isHappy(19);
    asserts.assertEquals(result, true);
  },
});

Deno.test({
  name: `
  Input: 10000
  Output: true
  Explanation:
  1^2 + 0^2 + 0^2 + 0^2 + 0^2 = 1
  1^2 = 1
  ...
  `,
  fn(): void {
    const result = isHappy(10000);
    asserts.assertEquals(result, true);
  },
});

Deno.test({
  name: `
  Input: 145
  Output: false
  Explanation:
  1^2 + 4^2 + 5^2 = 42
  4^2 + 2^2 = 20
  2^2 + 0^2 = 4
  4^2 = 16
  1^2 + 6^2 = 37
  3^2 + 7^2 = 58
  5^2 + 8^2 = 89
  8^2 + 9^2 = 145
  .....
  `,
  fn(): void {
    const result = isHappy(145);
    asserts.assertEquals(result, false);
  },
});
