/**
 * @description Write a function to find the longest common prefix string amongst an array of strings.If there is no common prefix, return an empty string "".
 * @topics String
 * @example ["flower","flow","flight"] -> "fl"
 * @example ["dog","racecar","car"] -> ""
 * @example [1,1,2] -> [[1,1,2],[1,2,1],[2,1,1]]
 * @note All given inputs are in lowercase letters a-z.
 * @thinking
 */
declare let longestCommonPrefix: any;

let a = {
  example: `
  Input: [[1,1],[2,2],[3,3]]
  Output: 3
  Explanation:
  ^
  |
  |        o
  |     o
  |  o  
  +------------->
  0  1  2  3  4
  `
};

/**
 * 使用 `strs[0]` 作为初始前缀串，逐一遍历 `strs[]` 元素进行比较，如 `String.indexOf !== 0` 则自减长度 1，直至成立后继续访问后面的元素。
 * @submissions
 * @status Accepted
 * @runtime 60ms
 * @runtime_distribution >92.74%
 * @memory 33.8MB
 * @memory_distribution <86.74%
 * @commit
 */
longestCommonPrefix = function(strs: Array<string>) {
  let prefix: string = "";
  if (!strs || strs.length <= 0) return "";
  let point: number = 1;
  while (true) {
    prefix = strs[0].slice(0, point);
    for (let i: number = 0; i < strs.length; i++) {
      if (prefix !== strs[i].slice(0, point)) {
        return prefix.slice(0, prefix.length - 1);
      }
    }
    point++;
  }
};

/**
 *
 */
longestCommonPrefix = function(strs: Array<string>) {
  if (!strs || strs.length <= 0) return "";
  if (strs && strs.length > 0) {
    let prefix: string = strs[0]; // 使用 strs[0] 作为初始前缀串
    for (let i = 1; i < strs.length; i++) {
      let subStr = strs[i];
      while (subStr.indexOf(prefix) !== 0) {
        // 不存在前缀子串∫
        prefix = prefix.slice(0, prefix.length - 1);
        if (prefix.length == 0) {
          return "";
        }
      }
    }
    return prefix;
  } else {
    return "";
  }
};
