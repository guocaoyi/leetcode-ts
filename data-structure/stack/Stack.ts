import { LinkedList } from "../linked-list/LinkedList.ts";

/**
 * 栈
 * LIFO 原则（last in,first out）
 */
export class Stack {
  private list: LinkedList; // linked list

  constructor() {
    this.list = new LinkedList();
  }

  /**
   * 新增元素到栈内，last in
   */
  push(node: any) {
    this.list.prepend(node);
  }

  /**
   * 移除栈顶的元素，first out
   */
  pop(): any {
    this.list.pop();
    return null;
  }

  /**
   * to array
   */
  toArray() {
    return this.list.toArray();
  }
}
