import * as asserts from "https://deno.land/std/testing/asserts.ts";
import * as log from "https://deno.land/std/log/mod.ts";
import { groupAnagrams } from "./index.ts";

log.info("49. Group Anagrams");

Deno.test({
  name: `
  Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
  Output:
  [
    ["ate","eat","tea"],
    ["nat","tan"],
    ["bat"]
  ]
  `,
  fn(): void {
    const result: string[][] = groupAnagrams(
      ["eat", "tea", "tan", "ate", "nat", "bat"],
    );
    asserts.assertEquals(
      [
        ["ate", "eat", "tea"],
        ["nat", "tan"],
        ["bat"],
      ],
      result,
    );
  },
});
