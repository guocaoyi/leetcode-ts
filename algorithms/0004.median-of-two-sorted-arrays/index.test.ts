import * as asserts from "https://deno.land/std/testing/asserts.ts";
import * as log from "https://deno.land/std/log/mod.ts";
import { findMedianSortedArrays } from "./index.ts";

log.info("3. Longest Substring without Repeating Characters");

Deno.test({
  name: `
  nums1 = [1, 3]
  nums2 = [2]

  The median is 2.0
  `,
  fn(): void {
    const result = findMedianSortedArrays([1, 3], [2]);
    asserts.assertEquals(result, 2.0);
  },
});

Deno.test({
  name: `
  nums1 = [1, 2]
  nums2 = [3, 4]

  The median is (2 + 3)/2 = 2.5
  `,
  fn(): void {
    const result = findMedianSortedArrays([1, 2], [3, 4]);
    asserts.assertEquals(result, 2.5);
  },
});
