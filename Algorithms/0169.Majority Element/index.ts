/**
 * 通用解法
 * @description
 * @status
 * @date
 * @runtime 116ms > 37.93%
 * @momory 37.2 MB
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
