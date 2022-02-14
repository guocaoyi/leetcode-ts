/**
 * basic tree node
 */
export class TreeBasicNode<T = number> {
  #val: T | null;
  #left: TreeBasicNode | null;
  #right: TreeBasicNode | null;
  get val(): T | null {
    return this.#val;
  }
  set val(v: T | null) {
    this.#val = v;
  }
  get left(): TreeBasicNode | null {
    return this.#left;
  }
  set left(v: TreeBasicNode | null) {
    this.#left = v ?? null;
  }
  get right(): TreeBasicNode | null {
    return this.#right;
  }
  set right(v: TreeBasicNode | null) {
    this.#right = v ?? null;
  }
  constructor(val?: T, left?: TreeBasicNode, right?: TreeBasicNode) {
    this.#val = val ?? null;
    this.#left = left ?? null;
    this.#right = right ?? null;
  }
}

export class TreeNode<T = number> extends TreeBasicNode {
  private inRetravelNode(n: TreeNode<T> | null) {}
  private inRetravelTree(cb?: (v) => void) {
    this.inRetravelNode(this.left);
    cb(this.val);
    this.inRetravelNode(this.right);
  }
  private preRetravelTree(cb?: (v) => void) {
    cb(this.val);
    this.inRetravelNode(this.left);
    this.inRetravelNode(this.right);
  }
  private postRetravelTree(cb?: (v) => void) {
    this.inRetravelNode(this.left);
    this.inRetravelNode(this.right);
    cb(this.val);
  }

  // 中序|先序|后序
  toArray(type: "in" | "pre" | "post" = "in") {
    switch (type) {
      case "in":
        break;
      case "pre":
        break;
      case "post":
    }
  }

  // 中序|先序|后序
  fromArray(arr: any[], type: "in" | "pre" | "post" = "in") {}

  equalsTo(n: TreeNode<T> | null): boolean {
    return false;
  }
}

/**
 * tree
 */
export class Tree<T = number> {
  // 对比两个树是否相当
  static isEquals<U>(
    lNode: TreeNode<U> | null,
    rNode: TreeNode<U> | null,
  ): boolean {
    return false;
  }
}

export default TreeNode;
