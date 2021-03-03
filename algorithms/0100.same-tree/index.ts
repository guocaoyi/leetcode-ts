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

export class TreeNode<T = number> {
  val: T | null;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: T, left?: TreeNode, right?: TreeNode) {
    this.val = val ?? null;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

export const isSameTree = (p: TreeNode | null, q: TreeNode | null): boolean => {
  // 遍历 Tree 节点，然后比较节点的值
  // recursive
  const inOrderedTreeEquals = (
    pNode: TreeNode | null,
    nNode: TreeNode | null,
    cb: (pNode: TreeNode | null, nNode: TreeNode | null) => boolean,
  ) => {
    // 退出条件，树遍历完（left&right === null）；或者不相等
    const equies = cb(pNode, nNode);
    if (equies) {
      return;
    }
    if (
      pNode?.left === null || pNode?.right === null || nNode?.left === null ||
      nNode?.left === null
    ) {
      inOrderedTreeEquals(pNode?.left ?? null, nNode?.left ?? null, cb);
      inOrderedTreeEquals(pNode?.right ?? null, nNode?.right ?? null, cb);
    }
  };

  inOrderedTreeEquals(
    p,
    q,
    (pNode: TreeNode | null, nNode: TreeNode | null) => {
      if (pNode?.val !== null && nNode?.val !== null) {
        //
      }
      return pNode?.val === nNode?.val;
    },
  );

  if (p !== null && q !== null) {
    return p?.val === q?.val &&
      isSameTree(p?.left as TreeNode | null, q?.left as TreeNode | null) &&
      isSameTree(p?.right as TreeNode | null, q?.right as TreeNode | null);
  } else {
    return false;
  }
};
