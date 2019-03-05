/**
 * 
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2
 */

/**
 * @param {number[]} nums
 * @return {number}
 * @time 116 ms
 * @momory 37.2 MB
 * @sort 37.93%
 * @commit https://leetcode-cn.com/submissions/detail/14004956/
 */
var majorityElement = function(nums) {
  let set = new Set(nums);
  let map = {};
  nums.forEach(n => {
    if (n in map) {
      map[n]++;
    } else {
      map[n] = 1;
    }
  });
  let maximum = 0;
  let maxKey = undefined;

  for (k in map) {
    if (map[k] >= maximum) {
      maximum = map[k];
      maxKey = k;
    }
  }
  return maxKey;
};
