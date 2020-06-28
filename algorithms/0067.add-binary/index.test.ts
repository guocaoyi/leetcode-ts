import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { blue, bgBlue, white } from "https://deno.land/std/fmt/colors.ts";

import { addBinary } from "./index.ts";

console.log(
  bgBlue(white("0067")),
  blue("Add Binary"),
);

Deno.test({
  name: `
  Input: a = "11", b = "1"
  Output: "100"
  `,
  fn(): void {
    const result: string = addBinary("11", "1");
    assertEquals(result, "100");
  },
});

Deno.test({
  name: `
  Input: a = "1010", b = "1011"
  Output: "10101"
  `,
  fn(): void {
    const result: string = addBinary("1010", "1011");
    assertEquals(result, "10101");
  },
});

Deno.test({
  name: `
  Input: a = "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101", 
         b = "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011"
  Output: "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000"
  `,
  fn(): void {
    const result: string = addBinary(
      "10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101",
      "110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011",
    );
    assertEquals(
      result,
      "110111101100010011000101110110100000011101000101011001000011011000001100011110011010010011000000000",
    );
  },
});
