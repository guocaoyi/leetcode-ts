/** */
export class BinarySearchTree {}

/**
 * 二叉搜索树
 */
export class BinarySearchTreeNode {
  #root: null;
  #left: BinarySearchTreeNode = null;
  #right: BinarySearchTreeNode = null;

  constructor(value: any) {
    this.#root = value;
  }

  get root(): BinarySearchTreeNode {
    return this.#root;
  }
  set left(n: BinarySearchTreeNode) {
    this.#left = n;
  }
  get left(): BinarySearchTreeNode {
    return this.#left;
  }

  set right(n: BinarySearchTreeNode) {
    this.#right = n;
  }
  get right(): BinarySearchTreeNode {
    return this.#right;
  }

  /**
   * 先序遍历
   * @param cb
   */
  public preOrderedTraver(cb: (node: BinarySearchTreeNode) => void) {
    this.#preOrderedTraverNode(this.root, cb);
  }

  #preOrderedTraverNode = (
    node: BinarySearchTreeNode,
    cb: (node: BinarySearchTreeNode) => void,
  ) => {
    cb(node);
    this.#preOrderedTraverNode(node.left, cb);
    this.#preOrderedTraverNode(node.right, cb);
  };

  /**
   * 中序遍历
   * @param cb
   */
  public inOrderedTraver(cb: (node: BinarySearchTreeNode) => void) {
    this.#inOrderedTraverNode(this.root, cb);
  }

  #inOrderedTraverNode = (
    node: BinarySearchTreeNode,
    cb: (node: BinarySearchTreeNode) => void,
  ) => {
    this.#inOrderedTraverNode(node.left, cb);
    cb(node);
    this.#inOrderedTraverNode(node.right, cb);
  };

  /**
   * 后序遍历
   * @param cb
   */
  public postOrderedTraver(cb: (node: BinarySearchTreeNode) => void) {
    this.#postOrderedTraverNode(this.root, cb);
  }

  #postOrderedTraverNode = (
    node: BinarySearchTreeNode,
    cb: (node: BinarySearchTreeNode) => void,
  ) => {
    this.#postOrderedTraverNode(node.left, cb);
    this.#postOrderedTraverNode(node.right, cb);
    cb(node);
  };
}

export default BinarySearchTreeNode;
