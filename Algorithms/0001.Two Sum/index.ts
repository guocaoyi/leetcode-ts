/**
 * 方案一：两次列表遍历
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export function onTwiceBubble(
  nums: Array<number>,
  target: number
): Array<number> {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
}

/**
 * 方案二：两次哈希遍历
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export function onTwiceIteratorHash(
  nums: Array<number>,
  target: number
): Array<number> {
  const map: any = {};
  const length = nums.length;
  // 使用Array.forEach在性能上会有点损耗(测试用例:61ms到59ms)
  for (let i = 0; i < length; i++) {
    map[nums[i]] = i;
  }
  for (let i = 0; i < length; i++) {
    const x = target - nums[i];
    if (x in map && map[x] != i) {
      return [i, map[x]];
    }
  }
}

/**
 * 方案三：一次哈希遍历
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export function onIteratorHash(
  nums: Array<number>,
  target: number
): Array<number> {
  const map: any = {};
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    const x = target - nums[i];
    if (x in map && map[x] != i) {
      return [map[x], i];
    }
    map[nums[i]] = i;
  }
}
