/**
 * # 100. Same Tree
 * 
 * Given two binary trees, write a function to check if they are the same or not.
 * 
 * Two binary trees are considered the same if they are structurally identical and the nodes have the same value.
 * 
 * ## Example
 * 
 * ```bash
 * Input:     1         1
 *           / \       / \
 *          2   3     2   3
 * 
 *         [1,2,3],   [1,2,3]
 * 
 * Output: true
 * ```
 * ```bash
 * Input:     1         1
 *           /           \
 *          2             2
 * 
 *         [1,2],     [1,null,2]
 * 
 * Output: false
 * ```
 * ```bash
 * Input:     1         1
 *           / \       / \
 *          2   1     1   2
 * 
 *         [1,2,1],   [1,1,2]
 * 
 * Output: false
 * ```
 */
export type Solution = (p: TreeNode | null, q: TreeNode | null) => boolean;

export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

export const isSameTree = (p: TreeNode | null, q: TreeNode | null): boolean => {
  if (p !== null && q !== null) {
    return p?.val === q?.val &&
      isSameTree(p?.left as TreeNode | null, q?.left as TreeNode | null) &&
      isSameTree(p?.right as TreeNode | null, q?.right as TreeNode | null);
  } else {
    return false;
  }
};
