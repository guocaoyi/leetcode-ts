import * as asserts from "https://deno.land/std/testing/asserts.ts";
import * as log from "https://deno.land/std/log/mod.ts";
import { longestValidParentheses } from "./index.ts";

log.info("32. Longest Valid Parentheses");

Deno.test({
  name: `
  Input: "(()"
  Output: 2
  Explanation: The longest valid parentheses substring is "()"
  `,
  fn(): void {
    const result: number = longestValidParentheses("(()");
    asserts.assertEquals(2, result);
  },
});

Deno.test({
  name: `
  Input: ")()())"
  Output: 4
  Explanation: The longest valid parentheses substring is "()()"
  `,
  fn(): void {
    const result: number = longestValidParentheses(")()())");
    asserts.assertEquals(4, result);
  },
});

Deno.test({
  name: `
  Input: "))))))))(((((((("
  Output: 0
  Explanation: The longest valid parentheses substring is ""
  `,
  fn(): void {
    const result: number = longestValidParentheses("))))))))((((((((");
    asserts.assertEquals(0, result);
  },
});

Deno.test({
  name: `
  Input: "()((((((((((()()()))))))))))"
  Output: 28
  Explanation: The longest valid parentheses substring is "()((((((((((()()()))))))))))"
  `,
  fn(): void {
    const result: number = longestValidParentheses(
      "()((((((((((()()()))))))))))",
    );
    asserts.assertEquals(28, result);
  },
});

Deno.test({
  name: `
  Input: "()(((((((((((())()())))))))))))))))))))))()((((((((((()()()))))))))))"
  Output: 30
  Explanation: The longest valid parentheses substring is "()(((((((((((())()()))))))))))"
  `,
  fn(): void {
    const result: number = longestValidParentheses(
      "()(((((((((((())()())))))))))))))))))))))()((((((((((()()()))))))))))",
    );
    asserts.assertEquals(30, result);
  },
});
