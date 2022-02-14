/**
 * # 112. Path Sum
 *
 * Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.
 *
 * Note: A leaf is a node with no children.
 *
 * ## Example
 *
 * Given the below binary tree and `sum = 22`,
 *
 * ```bash
 *       5
 *      / \
 *     4   8
 *    /   / \
 *   11  13  4
 *  /  \      \
 * 7    2      1
 * ```
 */
export type Solution = (root: TreeNode | null, sum: number) => boolean;

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

/**
 * @date 2020/07/07 00:30:00
 * @time
 * @space
 * @runtime
 * @memory
 * @runtime_cn 76 ms, faster than 100.00%
 * @memory_cn 38.6 MB, less than 100.00%
 */
export const hasPathSum = (root: TreeNode | null, sum: number): boolean => {
  let s = 0;
  const loop = (root: TreeNode | null): boolean => {
    s += root?.val || 0;
    if (root?.left === null && root.right === null) {
      // is top leaf
      if (s === sum) {
        return true;
      } else {
        s -= root?.val || 0;
        return false;
      }
    }

    if (root?.left) {
      const res = loop(root.left);
      if (res) return true;
    }

    if (root?.right) {
      const res = loop(root.right);
      if (res) return true;
    }

    s -= root?.val || 0;
    return false;
  };
  const result = loop(root);
  return typeof result !== "boolean" ? false : result;
};
