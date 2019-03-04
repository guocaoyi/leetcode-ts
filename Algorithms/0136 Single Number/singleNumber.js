/**
 * 
 * Given a non-empty array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,1]
Output: 1
Example 2:

Input: [4,1,2,1,2]
Output: 4

 */

/**
 * @param {number[]} nums
 * @return {number}
 * @time 104 ms
 * @memory 37.3 MB
 * @sort 58.49%
 * @commit https://leetcode-cn.com/submissions/detail/13915968/
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
