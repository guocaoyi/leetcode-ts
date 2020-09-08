import * as asserts from "https://deno.land/std/testing/asserts.ts";
import * as log from "https://deno.land/std/log/mod.ts";
import { checkInclusion } from "./index.ts";

log.info("567. Permutation in String");

Deno.test({
  name: `
  Input: s1 = "ab" s2 = "eidbaooo"
  Output: True
  Explanation: s2 contains one permutation of s1 ("ba").
  `,
  fn(): void {
    const result: boolean = checkInclusion("ab", "eidbaooo");
    asserts.assertEquals(true, result);
  },
});

Deno.test({
  name: `
  Input:s1= "ab" s2 = "eidboaoo"
  Output: False
  `,
  fn(): void {
    const result: boolean = checkInclusion("ab", "eidboaoo");
    asserts.assertEquals(false, result);
  },
});
