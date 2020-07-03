import * as asserts from "https://deno.land/std/testing/asserts.ts";
import * as log from "https://deno.land/std/log/mod.ts";
import { sortedArrayToBST } from "./index.ts";

log.info("108. Convert Sorted Array to Binary Search Tree");

Deno.test({
  name: `
  Input: 0
  Output:
  []
  `,
  fn(): void {
    const result: number[][] = pascalTriangle(0);
    asserts.assertEquals(
      [],
      result,
    );
  },
});
