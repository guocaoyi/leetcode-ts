/**
 * # 697. Degre of an Array
 * 
 * ## Example
 * 
 * ```bash
 * 输入: [1, 2, 2, 3, 1]
 * 输出: 2
 * 解释: 
 * 输入数组的度是2，因为元素1和2的出现频数最大，均为2.
 * 连续子数组里面拥有相同度的有如下所示:
 * [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
 * 最短连续子数组[2, 2]的长度为2，所以返回2.
 * ```
 * ```bash
 * 输入: [1,2,2,3,1,4,2]
 * 输出: 6
 * ```
 */
export type Solution = (nums: number[]) => number;

/**
 * @date 2020/07/02 23:26:40
 * @time O(n log n)
 * @space O(n)
 * @runtime 80 ms, faster than 100.00%
 * @memory 41.1 MB, less than 100.00%
 * @runtime_cn 80 ms, faster than 100.00%
 * @memory_cn 41.1 MB, less than 100.00%
 */
export const findShortestSubArray = (nums: number[]): number => {
  const map: { [T: number]: number } = {};
  nums.forEach((num: number) => {
    num in map ? map[num] += 1 : map[num] = 1;
  });
  let vals = Object.values(map);
  vals.sort((pre: number, next: number) => pre - next);
  let degree = vals[vals.length - 1];
  let degreeSet: Set<number> = new Set();
  let degreeMap: { [T: number]: { start: number; end: number; gap?: number } } =
    {};
  (Object.entries(map) as any).forEach((v: number[]) => {
    if (v[1] === degree) {
      degreeSet.add(Number(v[0]));
    }
  });
  nums.forEach((num: number, i: number) => {
    if (degreeSet.has(num)) {
      if (num in degreeMap) {
        let v = degreeMap[num];
        degreeMap[num] = { start: v.start, end: i, gap: i - v.start };
      } else {
        degreeMap[num] = { start: i, end: NaN };
      }
    }
  });
  let degreeMapArray: any[] = Object.values(degreeMap);
  degreeMapArray.sort((
    pre: { start: number; end: number; gap: number },
    next: { start: number; end: number; gap: number },
  ) => pre.gap - next.gap);
  return (isNaN(degreeMapArray[0].gap) ? 0 : degreeMapArray[0].gap) + 1;
};
