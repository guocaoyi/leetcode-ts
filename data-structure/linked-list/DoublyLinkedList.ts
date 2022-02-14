/**
 * LinkedList Node
 */
export class DoublyLinkedListNode {
  #value: unknown; // current node value
  // previous node
  #prev: DoublyLinkedListNode | null = null;
  // next node
  #next: DoublyLinkedListNode | null = null;

  constructor(props: unknown) {
    this.#value = props;
  }

  public set value(v: unknown) {
    this.#value = v;
  }

  public get value(): unknown {
    return this.#value;
  }

  public set prev(node: DoublyLinkedListNode) {
    this.#prev = node;
  }

  public get prev(): DoublyLinkedListNode {
    return this.#prev;
  }

  public set next(node: DoublyLinkedListNode) {
    this.#next = node;
  }
  public get next(): DoublyLinkedListNode | null {
    return this.#next;
  }

  public toString() {
    return `${this.value}`;
  }
}

/**
 * Doubly Linked List
 */
export class DoublyLinkedList {
  #head: DoublyLinkedListNode;
  #tail: DoublyLinkedListNode;

  constructor() {
    this.#head = null;
    this.#tail = null;
  }

  public set head(node: DoublyLinkedListNode) {
    this.#head = node;
  }
  public get head(): DoublyLinkedListNode {
    return this.#head;
  }

  public set tail(node: DoublyLinkedListNode) {
    this.#tail = node;
  }
  public get tail(): DoublyLinkedListNode {
    return this.#tail;
  }

  /**
   * 链首新增元素
   */
  public prepend(v: unknown) {
    let node = new DoublyLinkedListNode(v);
  }

  /**
   * 链尾新增元素
   */
  public append() {}

  /**
   * 移除链尾节点，并返回
   */
  public pop() {}
  /**
   * 移除链首节点，并返回
   */
  public shift() {}
  /**
   * 根据值删除链
   */
  public delete(v: any) {}

  /**
   * 将数组转换成链表
   */
  public fromArray() {}

  /**
   * 将数链表换成组转
   */
  public toArray() {}

  /**
   * 链表翻转
   */
  public reverse() {}
}
