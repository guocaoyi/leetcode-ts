import * as asserts from "https://deno.land/std/testing/asserts.ts";
import * as log from "https://deno.land/std/log/mod.ts";
import { MinStack } from "./index.ts";

log.info("155. Min Stack");

Deno.test({
  name: `
  Input
  ["MinStack","push","push","push","getMin","pop","top","getMin"]
  [[],[-2],[0],[-3],[],[],[],[]]
  
  Output
  [null,null,null,null,-3,null,0,-2]
  `,
  fn(): void {
    const result: MinStack[] = [];

    const minStack = new MinStack();
    result.push(minStack);
    result.push(minStack.push(-2));
    result.push(minStack.push(0));
    result.push(minStack.push(-3));
    result.push(minStack.getMin());
    result.push(minStack.pop());
    result.push(minStack.top());
    result.push(minStack.getMin());

    asserts.assertEquals(
      [minStack, undefined, undefined, undefined, -3, undefined, 0, -2],
      result,
    );
  },
});
