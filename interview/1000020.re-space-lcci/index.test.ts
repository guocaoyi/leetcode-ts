import * as asserts from "https://deno.land/std/testing/asserts.ts";
import * as log from "https://deno.land/std/log/mod.ts";
import {
  respace as respace,
} from "./index.ts";

log.info("面试题 17.13. Re-Space LCCI");

Deno.test({
  name: `
  Input:
  dictionary = ["looked","just","like","her","brother"]
  sentence = "jesslookedjustliketimherbrother"
  Output:  7
  Explanation:  After unconcatenating, we got "jess looked just like tim her brother", which containing 7 unrecognized characters.
  `,
  fn(): void {
    const result: number = respace(
      ["looked", "just", "like", "her", "brother"],
      "jesslookedjustliketimherbrother",
    );
    asserts.assertEquals(7, result);
  },
});

Deno.test({
  name: `
  Input:
  dictionary = ["a"]
  sentence = "aaaaaaaaaaaaaaaaaaaa"
  Output:  0
  `,
  fn(): void {
    const result: number = respace(
      ["a"],
      "aaaaaaaaaaaaaaaaaaaa",
    );
    asserts.assertEquals(0, result);
  },
});

Deno.test({
  name: `
  Input:
  dictionary = ["hello", 'world']
  sentence = "jesslookedjustliketimherbrother"
  Output: 31
  `,
  fn(): void {
    const result: number = respace(
      ["hello", "world"],
      "jesslookedjustliketimherbrother",
    );
    asserts.assertEquals(31, result);
  },
});
