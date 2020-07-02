/**
 *  
 */
export type Solution = (nums: number[], target: number) => number

/**
 * 
 * @date 2020/07/03 00:10:10
 * @time O(n)
 * @space O(1)
 * @runtime
 * @memory 
 * @runtime_cn 72 ms, faster than 60.71% 
 * @memory_cn 34.9 MB, less than 100.00%
 */
export const searchInsert = (nums: number[], target: number): number => {
  let result: number = nums.length
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < target) {
      continue;
    } else if (nums[i] === target) {
      result = i
      break;
    } else {
      result = i
      break;
    }
  }
  return result
};