import * as asserts from "https://deno.land/std/testing/asserts.ts";
import { blue, bgBlue, white } from "https://deno.land/std/fmt/colors.ts";

import { findMedianSortedArrays } from "./index.ts";

console.log(
  bgBlue(white("0004")),
  blue("Median Of Two Sorted Arrays"),
);

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
