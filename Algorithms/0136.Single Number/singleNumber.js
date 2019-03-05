/**
 * @time 104 ms
 * @memory 37.3 MB
 * @sort 58.49%
 * @commit https://leetcode-cn.com/submissions/detail/13915968/
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let map = {};
  nums.forEach(n => {
    if (n in map) {
      // map 已经存在 n
      map[n]++;
    } else {
      // 不存在
      map[n] = 1;
    }
    if (map[n] == 2) {
      // 存在并且 == 2
      delete map[n];
    }
  });
  return Object.keys(map);
};

/**
 * @description 这里已经没有优化空间了，想想其他方法
 * @time 108 ms
 * @memory 36.9 MB
 * @sort 55.12%
 * @commit https://leetcode-cn.com/submissions/detail/13916397/
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber2 = function(nums) {
  let map = {};
  nums.forEach(n => {
    if ((n in map) & (map[n] == 1)) {
      // 已经存在 且 == 1
      delete map[n];
    } else {
      // 不存在
      map[n] = 1;
    }
  });
  return Object.keys(map);
};
