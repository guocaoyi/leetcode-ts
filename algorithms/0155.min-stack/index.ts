/**
 * 155. Min Stack
 * 
 * Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
 * 
 * - push(x) -- Push element x onto stack.
 * - pop() -- Removes the element on top of the stack.
 * - top() -- Get the top element.
 * - getMin() -- Retrieve the minimum element in the stack.
 * 
 * ## Example
 * 
 * ```bash
 * Input
 * ["MinStack","push","push","push","getMin","pop","top","getMin"]
 * [[],[-2],[0],[-3],[],[],[],[]]
 * 
 * Output
 * [null,null,null,null,-3,null,0,-2]
 * 
 * Explanation
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.getMin(); // return -3
 * minStack.pop();
 * minStack.top();    // return 0
 * minStack.getMin(); // return -2
 * ```
 * 
 * ## Constraints
 * 
 * Methods `pop`, `top` and `getMin` operations will always be called on non-empty stacks.
 */
export abstract class AMinStack {
  abstract push(x: number): void;
  abstract pop(): void;
  abstract top(): number;
  abstract getMin(): number;
}

/**
 * Use Array
 * @date 2020/07/10 19:30:14
 * @time
 * @space
 * @runtime
 * @memory
 * @runtime_cn 932 ms, faster than 9.52%
 * @memory_cn 41.7 MB, less than 100.00%
 */
export class MinStack {
  #stack: number[];
  #size: number;

  constructor() {
    this.#stack = [];
    this.#size = 0;
  }

  // 入栈
  push(x: number): void {
    this.#stack.push(x);
    this.#size++;
  }

  // 出栈
  pop(): void {
    const result = this.#stack.pop();
    !(typeof result === "undefined") && this.#size--;
  }

  // 栈顶
  top(): number {
    return this.#stack[this.#size - 1];
  }

  // 栈中最小
  getMin(): number {
    let min: number = this.top();
    for (let i = this.#size - 1; i >= 0; i--) {
      min = Math.min(min, this.#stack[i]);
    }
    return min;
  }
}

/**
 * @date
 * @time
 * @space
 * @runtime
 * @memory
 * @runtime_cn 136 ms, faster than 61.90%
 * @memory_cn 42.5 MB, less than 100.00%
 */
export class MinStack1 {
  #stack: number[];
  #min: number;

  constructor() {
    this.#stack = [];
    this.#min = Number.MAX_SAFE_INTEGER;
  }

  // 入栈
  push(x: number): void {
    // 更新最小值
    this.#stack.push(x);
    this.#min = Math.min(this.#min, x);
  }

  // 出栈
  pop(): void {
    // 更新最小值
    this.#stack.pop();
    this.#min = Math.min(...this.#stack);
  }

  // 栈顶
  top(): number {
    let len = this.#stack.length;
    return this.#stack[len - 1];
  }

  // 栈中最小
  getMin(): number {
    return this.#min;
  }
}
