import * as asserts from "https://deno.land/std@0.125.0/testing/asserts.ts";
import * as log from "https://deno.land/std@0.125.0/log/mod.ts";
import { isValid } from "./index.ts";

log.info("20. Valid Parentheses");

Deno.test({
  name: `
  Input: "()"
  Output: true
  `,
  fn(): void {
    const result: boolean = isValid("()");
    asserts.assertEquals(true, result);
  },
});

Deno.test({
  name: `
  Input: "()[]{}"
  Output: true
  `,
  fn(): void {
    const result: boolean = isValid("()[]{}");
    asserts.assertEquals(true, result);
  },
});

Deno.test({
  name: `
  Input: "(]"
  Output: false
  `,
  fn(): void {
    const result: boolean = isValid("(]");
    asserts.assertEquals(false, result);
  },
});

Deno.test({
  name: `
  Input: "([)]"
  Output: false
  `,
  fn(): void {
    const result: boolean = isValid("([)]");
    asserts.assertEquals(false, result);
  },
});

Deno.test({
  name: `
  Input: "{[]}"
  Output: true
  `,
  fn(): void {
    const result: boolean = isValid("{[]}");
    asserts.assertEquals(true, result);
  },
});

Deno.test({
  name: `
  Input: ""
  Output: true
  `,
  fn(): void {
    const result: boolean = isValid("");
    asserts.assertEquals(true, result);
  },
});

Deno.test({
  name: `
  Input: "{"
  Output: false
  `,
  fn(): void {
    const result: boolean = isValid("{");
    asserts.assertEquals(false, result);
  },
});

Deno.test({
  name: `
  Input: "((((((()([{[{()}]}])))))))"
  Output: true
  `,
  fn(): void {
    const result: boolean = isValid("((((((()([{[{()}]}])))))))");
    asserts.assertEquals(true, result);
  },
});

Deno.test({
  name: `
  Input: "((((((()([{[{()}]}]))))))){"
  Output: false
  `,
  fn(): void {
    const result: boolean = isValid("((((((()([{[{()}]}]))))))){");
    asserts.assertEquals(false, result);
  },
});
