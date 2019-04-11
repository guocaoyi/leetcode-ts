/**
 * 单次遍历
 * @description 使用 `strs[0]` 作为初始前缀串，逐一遍历 `strs[]` 元素进行比较，如 `String.indexOf !== 0` 则自减长度 1，直至成立后继续访问后面的元素。
 * @status Accepted
 * @runtime 60ms >92.74%
 * @memory 33.8MB <86.74%
 */
var longestCommonPrefix = (strs: Array<string>) => {
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
 * 单次遍历
 * @description 使用 `strs[0]` 作为初始前缀串，逐一遍历 `strs[]` 元素进行比较，如 `String.indexOf !== 0` 则自减长度 1，直至成立后继续访问后面的元素。
 * @status Time Limited
 */
var longestCommonPrefix = (strs: Array<string>) => {
  if (!strs || strs.length <= 0) return "";
  let prefix: string = strs[0]; // 使用 strs[0] 作为初始前缀串
  for (let i = 1; i < strs.length; i++) {
    let subStr: string = strs[i];
    while (subStr.indexOf(prefix) !== 0) {
      // 不存在前缀子串
      prefix = prefix.slice(0, prefix.length - 1);
      if (prefix.length == 0) return "";
    }
  }
  return prefix;
};

/**
 * @solutioins
 * @param matrix d
 * @param target
 */
var searchMatrx = function(matrix: any, target: any) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == target) {
        return true;
      }
    }
  }
  return false;
};
