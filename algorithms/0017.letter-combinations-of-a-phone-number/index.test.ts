import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { blue, bgBlue, white } from "https://deno.land/std/fmt/colors.ts";

import { letterCombinations } from "./index.ts";

console.log(
  bgBlue(white("0017")),
  blue("Letter Combinations of a Phone Number #letterCombinations"),
);

Deno.test({
  name: `
  Input: ""
  Output: [].`,
  fn(): void {
    const output: string[] = letterCombinations("");
    assertEquals(
      output,
      [],
    );
  },
});

Deno.test({
  name: `
  Input: "5"
  Output: ["j", "k", "l"].`,
  fn(): void {
    const output: string[] = letterCombinations("5");
    assertEquals(
      output,
      ["j", "k", "l"],
    );
  },
});

Deno.test({
  name: `
  Input: "23"
  Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].`,
  fn(): void {
    const output: string[] = letterCombinations("23");
    assertEquals(
      output,
      ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"],
    );
  },
});

Deno.test({
  name: `
  Input: "47"
  Output: ["gp", "gq", "gr", "gs", "hp", "hq", "hr", "hs", "ip", "iq", "ir", "is"].`,
  fn(): void {
    const output: string[] = letterCombinations("47");
    assertEquals(
      output,
      ["gp", "gq", "gr", "gs", "hp", "hq", "hr", "hs", "ip", "iq", "ir", "is"],
    );
  },
});

Deno.test({
  name: `
  Input: "39"
  Output: ["dw", "dx", "dy", "dz", "ew", "ex", "ey", "ez", "fw", "fx", "fy", "fz"].`,
  fn(): void {
    const output: string[] = letterCombinations("39");
    assertEquals(
      output,
      ["dw", "dx", "dy", "dz", "ew", "ex", "ey", "ez", "fw", "fx", "fy", "fz"],
    );
  },
});

Deno.test({
  name: `
  Input: "589"
  Output: ["aa", "ab", "ac", "ba", "bb", "bc", "ca", "cb", "cc"].`,
  fn(): void {
    const output: string[] = letterCombinations("589");
    assertEquals(
      output,
      [
        "jtw",
        "jtx",
        "jty",
        "jtz",
        "juw",
        "jux",
        "juy",
        "juz",
        "jvw",
        "jvx",
        "jvy",
        "jvz",
        "ktw",
        "ktx",
        "kty",
        "ktz",
        "kuw",
        "kux",
        "kuy",
        "kuz",
        "kvw",
        "kvx",
        "kvy",
        "kvz",
        "ltw",
        "ltx",
        "lty",
        "ltz",
        "luw",
        "lux",
        "luy",
        "luz",
        "lvw",
        "lvx",
        "lvy",
        "lvz",
      ],
    );
  },
});
