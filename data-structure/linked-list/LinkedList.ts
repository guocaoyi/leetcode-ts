/**
 * 链表节点（Linked List）
 */
export class LinkedListNode {
  private _value: any;
  private _next: LinkedListNode;
  constructor(value: any, next: LinkedListNode = null) {
    this.value = value;
    this.next = next;
  }
  public set value(v: any) {
    this._value = v;
  }
  public get value(): any {
    return this._value;
  }
  public set next(n: LinkedListNode) {
    this._next = n;
  }
  public get next(): LinkedListNode {
    return this._next;
  }
  public toString() {
    return `${this._value}`;
  }
}

/**
 * Singly Linked List
 */
export class LinkedList {
  private _head: LinkedListNode = null;
  private _tail: LinkedListNode = null;

  constructor() {
    this._head = null;
    this._tail = null;
  }

  public set head(node: LinkedListNode) {
    this._head = node;
  }
  public get head() {
    return this._head;
  }
  public set tail(node: LinkedListNode) {
    this._tail = node;
  }
  public get tail() {
    return this._tail;
  }

  /**
   * 首部新增 make new Node to be a head
   * @param v any
   * @return LinkedList
   */
  prepend(v: any): LinkedList {
    const node = new LinkedListNode(v, this.head);
    this.head = node;
    if (this.tail === null) {
      this.tail = node;
    }
    return this;
  }

  /**
   * 尾部新增
   */
  append(v: any, next: LinkedListNode = null): LinkedList {
    const node = new LinkedListNode(v, next);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    return this;
  }

  /**
   * 删除尾部并返回元素
   */
  pop(): LinkedListNode {
    return null;
  }

  /**
   * 删除首部并返回元素
   */
  shift(): LinkedListNode {
    const node = this.head;
    this.head = this.head.next;
    return node;
  }

  /**
   * 删除
   */
  delete(v: any): LinkedListNode {
    const deletion: LinkedListNode = this.tail;
    if (this.head === this.tail) {
    }
    let node: LinkedListNode = this.head;
    let prenode: LinkedListNode = null;
    while (node !== null && node.next !== null) {
      if (node.value === v) {
        break;
      }
      prenode = node;
      node = node.next;
    }
    prenode.next = node.next;
    node = null;
    return deletion;
  }

  /**
   * 转 Array
   */
  fromArray(arr: any[]): LinkedListNode[] {
    for (let i = 0, len = arr.length; i < len; i += 1) {
      this.append(arr[i]);
    }
    return [];
  }

  /**
   * 转数组 LinkedListNode[]
   * @return LinkedListNode[]
   */
  toArray(): LinkedListNode[] {
    const bottle: LinkedListNode[] = [];
    let curnode: LinkedListNode = this.head;
    while (curnode) {
      bottle.push(curnode);
      curnode = curnode.next;
    }
    return bottle;
  }

  /**
   * 翻转链表
   * @return void
   */
  reverse(): void {
    let curNode: LinkedListNode = this.head;
    let prenode: LinkedListNode = null;
    let nextnode: LinkedListNode = null;

    while (curNode) {
      nextnode = curNode.next;
    }
    this.tail = this.head;
    this.head = prenode;
  }

  /**
   * toArray & toString
   * @return JSON
   */
  toString(): string {
    return JSON.stringify(this.toArray());
  }
}
