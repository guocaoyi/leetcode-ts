import * as asserts from "https://deno.land/std@0.125.0/testing/asserts.ts";
import * as log from "https://deno.land/std@0.125.0/log/mod.ts";
import { hasPathSum, TreeNode } from "./index.ts";

log.info("112. Path Sum");

Deno.test({
  name: `
  Input:
         5
        / \
       4   8
      /   / \
     11  13  4
    /  \      \
   7    2      1
   sum = 22
  Output: true
  `,
  fn(): void {
    const result: boolean = hasPathSum(new TreeNode(), 22);
    asserts.assertEquals(true, result);
  },
});
