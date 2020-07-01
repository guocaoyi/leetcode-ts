import * as asserts from "https://deno.land/std/testing/asserts.ts";
import * as log from "https://deno.land/std/log/mod.ts";
import { getRow as getRow, getRow1 } from "./index.ts";

log.info("119. Pascals Triangle II");

Deno.test({
  name: `
  Input: 0
  Output: [1]
  `,
  fn(): void {
    const result: number[] = getRow(0);
    asserts.assertEquals(
      [1],
      result,
    );
  },
});

Deno.test({
  name: `
  Input: 1
  Output: [1, 1]
  `,
  fn(): void {
    const result: number[] = getRow(1);
    asserts.assertEquals(
      [1, 1],
      result,
    );
  },
});

Deno.test({
  name: `
  Input: 3
  Output: [1, 3, 3, 1],
  `,
  fn(): void {
    const result: number[] = getRow(3);
    asserts.assertEquals(
      [1, 3, 3, 1],
      result,
    );
  },
});

Deno.test({
  name: `
  Input: 5
  Output: [1, 5, 10, 10, 5, 1],
  `,
  fn(): void {
    const result: number[] = getRow(5);
    asserts.assertEquals(
      [1, 5, 10, 10, 5, 1],
      result,
    );
  },
});

Deno.test({
  name: `
  Input: 33
  Output:
  [
    1, 33, 528,
    5456, 40920, 237336,
    1107568, 4272048, 13884156,
    38567100, 92561040, 193536720,
    354817320, 573166440, 818809200,
    1037158320, 1166803110, 1166803110,
    1037158320, 818809200, 573166440,
    354817320, 193536720, 92561040,
    38567100, 13884156, 4272048,
    1107568, 237336, 40920,
    5456, 528, 33,
    1
  ]
  `,
  fn(): void {
    const result: number[] = getRow(33);
    asserts.assertEquals(
      [
        1,
        33,
        528,
        5456,
        40920,
        237336,
        1107568,
        4272048,
        13884156,
        38567100,
        92561040,
        193536720,
        354817320,
        573166440,
        818809200,
        1037158320,
        1166803110,
        1166803110,
        1037158320,
        818809200,
        573166440,
        354817320,
        193536720,
        92561040,
        38567100,
        13884156,
        4272048,
        1107568,
        237336,
        40920,
        5456,
        528,
        33,
        1,
      ],
      result,
    );
  },
});
