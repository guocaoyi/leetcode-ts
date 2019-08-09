`
0. \*\*

\*\*\*

"""
\*\*\*
"""

::: \*\*
### \*\*
>>> \*\*
`;
let reverseString: (s: string[]) => void;

/**
 * Array.prototype.reverse
 * 由于 Array 对象内置了 reverse 函数，先采用这个方法看看效率。然后自行实现 reverse
 * @time
 * @status Accepted
 * @runtime
 * @memory
 */
reverseString = (s: string[]): void => {
  s.reverse();
};

/**
 * O(1) extra memory 迫使无法使用额外的数组进行缓存；
 * @time 2019.03
 * @status Wrong Answer
 * @case `Input: ["h","e","l","l","o"] Output: ["h","e","l","l","o"] Expected: ["o","l","l","e","h"]`
 */
reverseString = (s: string[]): void => {
  let arr: string[] = [];
  for (let i = s.length; i > 0; i--) {
    arr.push(s[i - 1]);
  }
  s = arr;
};

/**
 * O(1) extra memory 迫使无法使用额外的数组进行缓存；
 * @time 2019.06
 * @status Accepted
 * @runtime 116ms > 81.07%
 * @memory 46.8MB < 52.47%
 */
reverseString = (s: string[]): void => {
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
 * @time 2019.06
 * @status Accepted
 * @runtime 116ms > 81.07%
 * @memory 46.8MB < 52.47%
 */
reverseString = (s: string[]): void => {
  const middle: number = Math.floor(s.length / 2);
  for (let i = 0; i < middle; i++) {
    [s[i], s[s.length - i - 1]] = [s[s.length - i - 1], s[i]];
  }
};
