/**
 * @param {number[]} nums
 * @return {number}
 * @time 116 ms
 * @momory 37.2 MB
 * @sort 37.93%
 * @commit https://leetcode-cn.com/submissions/detail/14004956/
 */
var majorityElement = (nums: Array<number>) => {
  let map: any = {};
  nums.forEach(n => {
    if (n in map) {
      map[n]++;
    } else {
      map[n] = 1;
    }
  });
  let maximum = 0;
  let maxKey = undefined;

  for (let k in map) {
    if (map[k] >= maximum) {
      maximum = map[k];
      maxKey = k;
    }
  }
  return maxKey;
};
