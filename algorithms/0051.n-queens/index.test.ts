import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import { blue, bgBlue, white } from "https://deno.land/std/fmt/colors.ts";

import {} from "./index.ts";

console.log(
  bgBlue(white("0051")),
  blue(""),
);

Deno.test({
  name: `
  `,
  fn(): void {
    //
  },
});
