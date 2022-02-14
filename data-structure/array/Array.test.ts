import * as asserts from "https://deno.land/std@0.125.0/testing/asserts.ts";
import * as log from "https://deno.land/std@0.125.0/log/mod.ts";

import { reverse } from "./Array.ts";

log.info("data structures. array");

Deno.test({
  name: `[] reverse is []`,
  fn(): void {
    const result = reverse([]);
    asserts.assertEquals(result, []);
  },
});
