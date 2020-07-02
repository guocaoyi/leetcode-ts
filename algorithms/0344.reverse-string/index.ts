/**
 * # 344. Reverse String
 *
 * Write a function that reverses a string. The input string is given as an array of characters `char[]`.
 *
 * Do not allocate extra space for another array, you must do this by modifying
 * the input array **in-place** with O(1) extra memory.
 *
 * You may assume all the characters consist of
 * [printable ascii characters.](https://en.wikipedia.org/wiki/ASCII#Printable_characters)
 *
 * ### Example
 *
 * ```bash
 * Input: ["h","e","l","l","o"]
 * Output: ["o","l","l","e","h"]
 * ```
 *
 * ```bash
 * Input: ["H","a","n","n","a","h"]
 * Output: ["h","a","n","n","a","H"]
 * ```
 * 
 * ## Notes
 * in-place 不得使用额外内存
 */
export type Solution = (s: string[]) => void;

/**
 * Array.prototype.reverse
 * 由于 Array 对象内置了 reverse 函数，先采用这个方法看看效率。然后自行实现 reverse
 * @date
 * @time O(n)
 * @space O(1)
 * @runtime
 * @memory
 * @runtime_cn
 * @memory_cn
 */
export const reverseString = (s: string[]): void => {
  s.reverse();
};

/**
 * O(1) extra memory 迫使无法使用额外的数组进行缓存；
 * @date 2019.06
 * @time O(n)
 * @space O(1)
 * @runtime 116 ms, faster than  81.07%
 * @memory 46.8 MB, less than 52.47%
 * @runtime_cn
 * @memory_cn
 */
export const reverseString$1 = (s: string[]): void => {
  const middle: number = Math.floor(s.length / 2);
  let repl: string;
  for (let i = 0; i < middle; i++) {
    repl = s[i];
    s[i] = s[s.length - i - 1];
    s[s.length - i - 1] = repl;
  }
};

/**
 * O(1) extra memory 迫使无法使用额外的数组进行缓存；
 * @date 2020.06.24 17:01
 * @time O(n)
 * @space O(1)
 * @runtime 108 ms, faster than 75.86%
 * @memory 42.8 MB, less than 100.00%
 * @runtime_cn
 * @memory_cn
 */
export const reverseString$2 = (s: string[]): void => {
  const middle: number = Math.floor(s.length / 2);
  for (let i = 0; i < middle; i++) {
    [s[i], s[s.length - i - 1]] = [s[s.length - i - 1], s[i]];
  }
};

/**
 * O(1) extra memory 迫使无法使用额外的数组进行缓存；
 * @date 2020.06.24 17:10
 * @time O(n)
 * @space O(1)
 * @runtime 104 ms, faster than 82.76%
 * @memory 42.6 MB, less than 100.00%
 * @runtime_cn
 * @memory_cn
 */
export const reverseString$3 = (s: string[]): void => {
  const middle: number = Math.floor(s.length / 2);
  for (let i = 0, j = 0; i < middle; i++) {
    j = s.length - i - 1;
    [s[i], s[j]] = [s[j], s[i]];
  }
};
