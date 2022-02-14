import * as asserts from "https://deno.land/std@0.125.0/testing/asserts.ts";
import * as log from "https://deno.land/std@0.125.0/log/mod.ts";
import { sortedArrayToBST } from "./index.ts";

log.info("108. Convert Sorted Array to Binary Search Tree");

Deno.test({
  name: `
  Input: 0
  Output:
  []
  `,
  fn(): void {
    const result = sortedArrayToBST([0]);
    asserts.assertEquals([], result);
  },
});
