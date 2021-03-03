import * as asserts from "https://deno.land/std/testing/asserts.ts";
import * as log from "https://deno.land/std/log/mod.ts";
import { isSameTree, TreeNode } from "./index.ts";

log.info("100. Same Tree");

const inOrderTree = (arr: Array<number | null>): TreeNode<number> => {
  // 中序遍历
  return new TreeNode(0);
};

Deno.test({
  name: `
  Input:     1         1
            / \       / \
           2   3     2   3

          [1,2,3],   [1,2,3]

  Output: true
  `,
  fn(): void {
    const pRootNode = inOrderTree([1, 2, 3]);
    const qRootNode = inOrderTree([1, 2, 3]);

    const result: boolean = isSameTree(pRootNode, qRootNode);
    asserts.assertEquals(result, true);
  },
});

Deno.test({
  name: `
  Input:     1         1
            /           \
           2             2

        [1,2],     [1,null,2]

  Output: false
  `,
  fn(): void {
    const pRootNode = inOrderTree([1, 2]);
    const qRootNode = inOrderTree([1, null, 2]);

    const result: boolean = isSameTree(pRootNode, qRootNode);
    asserts.assertEquals(result, false);
  },
});

Deno.test({
  name: `
  Input:     1         1
            / \       / \
           2   1     1   2

          [1,2,1],   [1,1,2]

  Output: false
  `,
  fn(): void {
    const pRootNode = inOrderTree([1, 2, 1]);
    const qRootNode = inOrderTree([1, 1, 2]);

    const result: boolean = isSameTree(pRootNode, qRootNode);
    asserts.assertEquals(result, false);
  },
});
