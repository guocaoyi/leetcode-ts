/**
 * # 20. Valid Parentheses
 * 
 * Given a string containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.
 * 
 * An input string is valid if:
 * 
 * - Open brackets must be closed by the same type of brackets.
 * - Open brackets must be closed in the correct order.
 * 
 * Note that an empty string is also considered valid.
 * 
 * ## Example
 * 
 * ```bash
 * Input: "()"
 * Output: true
 * ```
 * ```bash
 * Input: "()[]{}"
 * Output: true
 * ```
 * ```bash
 * Input: "(]"
 * Output: false
 * ```
 * ```bash
 * Input: "([)]"
 * Output: false
 * ```
 * ```bash
 * Input: "{[]}"
 * Output: true
 * ```
 */
export type Solution = (s: string) => boolean;

/**
 * 消消乐
 * @date 2020/07/04 11:16:0
 * @time O(n)
 * @space O(n)
 * @runtime
 * @memory
 * @runtime_cn 68 ms, faster than 81.50%
 * @memory_cn 36.3 MB, less than 100.00%
 */
export const isValid = (s: string): boolean => {
  let len = s.length;
  if (len % 2 !== 0) return false;
  let stack: string[] = [];
  for (let i = 0; i < len; i++) {
    stack.push(s.charAt(i));
    let len = stack.length;
    let sum = stack[len - 2] + stack[len - 1];
    if (len >= 2 && (sum === "()" || sum === "{}" || sum === "[]")) {
      stack.pop();
      stack.pop();
    }
  }
  return stack.length <= 0;
};
