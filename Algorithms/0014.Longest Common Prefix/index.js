/**
 * @param {string[]} strs
 * @return {string}
 * @tiemout 超时
 */
var longestCommonPrefix = function(strs) {
  let prefix = "";
  if (strs && strs.length > 0) {
    let point = 1;
    while (true) {
      prefix = strs[0].slice(0, point);
      for (let i = 0; i < strs.length; i++) {
        if (prefix !== strs[i].slice(0, point)) {
          return prefix.slice(0, prefix.length - 1);
        }
      }
      point++;
    }
  } else {
    return "";
  }
};

/**
 * @status Accepted
 * @runtime 60ms
 * @runtime distribution: >92.74%
 * @memory 33.8 MB
 * @memory distribution: <86.74%
 * @param {*} strs
 */
var longestCommonPrefix = function(strs) {
  if (strs && strs.length > 0) {
    let prefix = strs[0]; // 使用 strs[0] 作为初始前缀串
    for (let i = 1; i < strs.length; i++) {
      let subStr = strs[i];
      while (subStr.indexOf(prefix) !== 0) {
        // 不存在前缀子串
        prefix = prefix.slice(0, prefix.length - 1);
        if ((prefix.length = 0)) {
          return "";
        }
      }
    }
    return prefix;
  } else {
    return "";
  }
};
