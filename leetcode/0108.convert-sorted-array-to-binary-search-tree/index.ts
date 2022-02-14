/**
 * 108. Convert Sorted Array to Binary Search Tree
 *
 * Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
 *
 * For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.
 *
 * ## Example
 *
 * ```bash
 * Given the sorted array: [-10,-3,0,5,9],
 *
 * One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:
 *
 *       0
 *      / \
 *    -3   9
 *    /   /
 *  -10  5
 * ```
 */
export type Solution = (nums: number[]) => TreeNode | null;

/**
 * Definition for a binary tree node.
 */
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
 * 递归
 * @date 2020/07/03 20:21:19
 * @time O(1)
 * @space O(1)
 * @runtime 80 ms, faster than 100.00%
 * @memory 40.3 MB, less than 100.00%
 * @runtime_cn 76 ms, faster than 100.00%
 * @memory_cn 38 MB, less than 100.00%
 */
export const sortedArrayToBST = (nums: number[]): TreeNode | null => {
  if (!nums.length) return null;

  const root = Math.ceil((nums.length - 1) / 2);
  const result = new TreeNode(nums[root]);
  result.left = sortedArrayToBST(nums.slice(0, root));
  result.right = sortedArrayToBST(nums.slice(root + 1));

  return result;
};
