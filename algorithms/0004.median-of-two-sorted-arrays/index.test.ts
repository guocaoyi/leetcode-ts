import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import { findMedianSortedArrays } from "./index.ts";

Deno.test("0004.median-of-two-sorted-arrays", () => {
  const result = findMedianSortedArrays([1, 3], [2]);
  assertEquals(result, 2.0);
});

Deno.test("0004.median-of-two-sorted-arrays", () => {
  const result = findMedianSortedArrays([1, 2], [3, 4]);
  assertEquals(result, 2.5);
});
