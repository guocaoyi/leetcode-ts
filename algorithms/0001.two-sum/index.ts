/**
 * 嵌套循环遍历
 * 这事最偷懒的办法，快速实现后，再考虑优化方案
 * 使用Array.forEach在性能上会有点损耗(测试用例:61ms到59ms)
 * @time 2018.9.13
 * @status Accepted
 * @runtime 120ms | 40.065%
 */
var twoSum = (nums: number[], target: number): number[] => {
  for (let i: number = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};

/**
 * 哈希存储
 * @time
 * @status Accepted
 * @runtime 80 ms | 59.00%
 */
var twoSum = (nums: number[], target: number): number[] => {
  const map: any = {};
  nums.forEach((i, k) => (map[i] = k));
  for (let i = 0; i < nums.length; i++) {
    const x = target - nums[i];
    if (x in map && map[x] != i) {
      return [i, map[x]];
    }
  }
};

/**
 * 方案二：哈希存储
 * @time
 * @status Accepted
 * @runtime 56ms | 100.00%
 */
var twoSum = (nums: number[], target: number): number[] => {
  const map: any = {};
  const length: number = nums.length;
  for (let i = 0; i < length; i++) {
    map[nums[i]] = i;
  }
  for (let i = 0; i < length; i++) {
    const x = target - nums[i];
    if (x in map && map[x] != i) {
      return [i, map[x]];
    }
  }
};

/**
 * 哈希遍历
 * @time
 * @status Accepted
 * @runtime 52ms | 100%
 */
var twoSum = (nums: number[], target: number): number[] => {
  const map: any = {};
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    const x = target - nums[i];
    if (x in map && map[x] != i) {
      return [map[x], i];
    }
    map[nums[i]] = i;
  }
};
