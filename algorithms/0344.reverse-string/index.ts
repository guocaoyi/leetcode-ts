/**
 * Array.prototype.reverse
 * 由于 Array 对象内置了 reverse 函数，先采用这个方法看看效率。然后自行实现 reverse
 * @date
 * @status Accepted
 * @runtime
 * @memory
 */
var reverseString = (s: string[]): void => {
  s.reverse();
};

/**
 * O(1) extra memory 迫使无法使用额外的数组进行缓存；
 * @time 2019.03
 * @status Wrong Answer
 * @params `Input: ["h","e","l","l","o"] Output: ["h","e","l","l","o"] Expected: ["o","l","l","e","h"]`
 */
var reverseString = (s: string[]): void => {
  let arr: string[] = [];
  for (let i = s.length; i > 0; i--) {
    arr.push(s[i - 1]);
  }
  s = arr;
};
