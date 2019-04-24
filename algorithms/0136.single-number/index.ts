/**
 * 这里已经没有优化空间了，想想其他方法
 * @hash 223496299
 * @time 2019.04.19
 * @status Accepted
 * @runtime 64 ms | 81.78%
 * @memory 36.9MB | 41.03%
 */
var singleNumber = (nums: number[]): number => {
  let map: any = {};
  let length: number = nums.length;
  for (let i: number = 0; i < length; i++) {
    if (nums[i] in map && map[nums[i]] == 1) {
      // map 已经存在 n
      delete map[nums[i]];
    } else {
      // 不存在
      map[nums[i]] = 1;
    }
  }
  return Number(Object.keys(map)[0]);
};
