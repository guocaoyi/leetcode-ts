/**
 * # 32. Longest Valid Parentheses
 * 
 * Given a string containing just the characters `'('` and `')'`, find the length of the longest valid (well-formed) parentheses substring.
 * 
 * ## Example
 * 
 * ```bash
 * Input: "(()"
 * Output: 2
 * Explanation: The longest valid parentheses substring is "()"
 * ```
 * ```bash
 * Input: ")()())"
 * Output: 4
 * Explanation: The longest valid parentheses substring is "()()"
 * ```
 * 
 * ## Thinking 
 * 
 * - 消消乐
 */
export type Solution = (s: string) => number;

/**
 * @date 2020/07/04 11:58:00
 * @time O(kn)
 * @space O(n)
 * @runtime
 * @memory
 * @runtime_cn 104 ms, faster than 23.8%
 * @memory_cn 40.1 MB, faster than 100.00%
 */
export const longestValidParentheses = (s: string): number => {
  const len: number = s.length;
  const stack: { index: number; char: string }[] = [];
  const tip = new Array(len);
  for (let i = 0; i < len; i++) {
    stack.push({ index: i, char: s.charAt(i) });
    const len = stack.length;
    if (len >= 2) {
      const sum = stack[len - 2].char + stack[len - 1].char;
      if ((sum === "()" || sum === "{}" || sum === "[]")) {
        const pre = stack.pop();
        const next = stack.pop();
        tip[pre?.index as number] = 1;
        tip[next?.index as number] = 1;
      }
    }
  }
  let maxLen = 0;
  let Len = 0;
  for (let i = 0; i < tip.length; i++) {
    if (tip[i] === 1) {
      Len += 1;
      maxLen = Math.max(maxLen, Len);
    } else {
      Len = 0;
    }
  }
  return maxLen;
};

/**
 * @time
 * @space
 */
export const longestValidParentheses1 = (s: string): number => {
  const len: number = s.length;
  const stack: { index: number; char: string }[] = [];
  const tip = new Array(len);
  for (let i = 0; i < len; i++) {
    stack.push({ index: i, char: s.charAt(i) });
    const len = stack.length;
    if (len >= 2) {
      const sum = stack[len - 2].char + stack[len - 1].char;
      if ((sum === "()" || sum === "{}" || sum === "[]")) {
        const pre = stack.pop();
        const next = stack.pop();
        tip[pre?.index as number] = 1;
        tip[next?.index as number] = 1;
      }
    }
  }
  let maxLen = 0;
  let Len = 0;
  for (let i = 0; i < tip.length; i++) {
    if (tip[i] === 1) {
      Len += 1;
      maxLen = Math.max(maxLen, Len);
    } else {
      Len = 0;
    }
  }
  return maxLen;
};
