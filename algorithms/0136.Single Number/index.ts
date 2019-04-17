/**
 * @runtime 104ms < 58.49%
 * @memory 37.3mb
 */
var singleNumber = (nums: Array<number>): any => {
  let map: any = {};
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
 * @runtime 108ms > 
 * @memory 36.9mb <
 */
var singleNumber2 = (nums: Array<number>): any => {
  let map: any = {};
  nums.forEach((n: number) => {
    if (n in map && map[n] == 1) {
      // 已经存在 且 == 1
      delete map[n];
    } else {
      // 不存在
      map[n] = 1;
    }
  });
  return Object.keys(map);
};
