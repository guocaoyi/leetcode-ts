import * as asserts from "https://deno.land/std@0.125.0/testing/asserts.ts";
import * as log from "https://deno.land/std@0.125.0/log/mod.ts";
import { letterCombinations } from "./index.ts";

log.info("0017. Letter Combinations of a Phone Number #letterCombinations");

Deno.test({
  name: `
  Input: ""
  Output: [].`,
  fn(): void {
    const output: string[] = letterCombinations("");
    asserts.assertEquals(output, []);
  },
});

Deno.test({
  name: `
  Input: "5"
  Output: ["j", "k", "l"].`,
  fn(): void {
    const output: string[] = letterCombinations("5");
    asserts.assertEquals(output, ["j", "k", "l"]);
  },
});

Deno.test({
  name: `
  Input: "23"
  Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].`,
  fn(): void {
    const output: string[] = letterCombinations("23");
    asserts.assertEquals(output, [
      "ad",
      "ae",
      "af",
      "bd",
      "be",
      "bf",
      "cd",
      "ce",
      "cf",
    ]);
  },
});

Deno.test({
  name: `
  Input: "47"
  Output: ["gp", "gq", "gr", "gs", "hp", "hq", "hr", "hs", "ip", "iq", "ir", "is"].`,
  fn(): void {
    const output: string[] = letterCombinations("47");
    asserts.assertEquals(output, [
      "gp",
      "gq",
      "gr",
      "gs",
      "hp",
      "hq",
      "hr",
      "hs",
      "ip",
      "iq",
      "ir",
      "is",
    ]);
  },
});

Deno.test({
  name: `
  Input: "39"
  Output: ["dw", "dx", "dy", "dz", "ew", "ex", "ey", "ez", "fw", "fx", "fy", "fz"].`,
  fn(): void {
    const output: string[] = letterCombinations("39");
    asserts.assertEquals(output, [
      "dw",
      "dx",
      "dy",
      "dz",
      "ew",
      "ex",
      "ey",
      "ez",
      "fw",
      "fx",
      "fy",
      "fz",
    ]);
  },
});

Deno.test({
  name: `
  Input: "589"
  Output: ["aa", "ab", "ac", "ba", "bb", "bc", "ca", "cb", "cc"].`,
  fn(): void {
    const output: string[] = letterCombinations("589");
    asserts.assertEquals(output, [
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
    ]);
  },
});
