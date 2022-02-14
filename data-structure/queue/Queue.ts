import { LinkedList, LinkedListNode } from "../linked-list/LinkedList";

/**
 * 队列（Queue）
 */
export class Queue {
  private list: LinkedList; // linked list

  constructor() {
    this.list = new LinkedList();
  }

  /**
   * 查看队列是否为空
   */
  isEmpty() {
    return !!this.list.head;
  }

  /**
   * 取出第一个元素，并返回
   */
  peek() {
    return this.list.head.value;
  }

  /**
   * 新增元素（add a new element）
   */
  enqueue(node: any) {
    this.list.prepend(node);
  }

  /**
   * 溢出元素（remove an element）
   */
  dequeue(): any {
    const node: LinkedListNode = this.list.pop();
    return !!node ? node.value : null;
  }

  /**
   * 重写 toString 方法
   * @override
   */
  toString() {
    return this.list.toString();
  }
}
